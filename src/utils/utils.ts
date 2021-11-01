export const parseJSON = (jsonString: string) => JSON.parse(jsonString);
export const stringifyJSON = (jsonString: string) => JSON.stringify(jsonString);

export const styleToString = (style: any) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() +
      ":" +
      style[key] +
      ";",
    ""
  );
};

var COLUMNS = "abcdefgh".split("");
function isObject(o: any) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o: any) {
  var ctor, prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}
function isString(s: any) {
  return typeof s === "string";
}
function validSquare(square: any) {
  return isString(square) && square.search(/^[a-h][1-8]$/) !== -1;
}
function validPieceCode(code: any) {
  return isString(code) && code.search(/^[bw][KQRNBP]$/) !== -1;
}
function validPositionObject(pos: any) {
  if (!isPlainObject(pos)) return false;

  for (var i in pos) {
    if (!pos.hasOwnProperty(i)) continue;

    if (!validSquare(i) || !validPieceCode(pos[i])) {
      return false;
    }
  }

  return true;
}
// convert bP, wK, etc code to FEN structure
function pieceCodeToFen(piece: string) {
  var pieceCodeLetters = piece.split("");

  // white piece
  if (pieceCodeLetters[0] === "w") {
    return pieceCodeLetters[1].toUpperCase();
  }

  // black piece
  return pieceCodeLetters[1].toLowerCase();
}
// convert FEN piece code to bP, wK, etc
function fenToPieceCode(piece: string) {
  // black piece
  if (piece.toLowerCase() === piece) {
    return "b" + piece.toUpperCase();
  }

  // white piece
  return "w" + piece.toUpperCase();
}
function squeezeFenEmptySquares(fen: string) {
  return fen
    .replace(/11111111/g, "8")
    .replace(/1111111/g, "7")
    .replace(/111111/g, "6")
    .replace(/11111/g, "5")
    .replace(/1111/g, "4")
    .replace(/111/g, "3")
    .replace(/11/g, "2");
}
function expandFenEmptySquares(fen: string) {
  return fen
    .replace(/8/g, "11111111")
    .replace(/7/g, "1111111")
    .replace(/6/g, "111111")
    .replace(/5/g, "11111")
    .replace(/4/g, "1111")
    .replace(/3/g, "111")
    .replace(/2/g, "11");
}
function validFen(fen: any) {
  if (!isString(fen)) return false;

  // cut off any move, castling, etc info from the end
  // we're only interested in position information
  fen = fen.replace(/ .+$/, "");

  // expand the empty square numbers to just 1s
  fen = expandFenEmptySquares(fen);

  // FEN should be 8 sections separated by slashes
  var chunks = fen.split("/");
  if (chunks.length !== 8) return false;

  // check each section
  for (var i = 0; i < 8; i++) {
    if (chunks[i].length !== 8 || chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
      return false;
    }
  }

  return true;
}

export const objToFen = (obj: any) => {
  if (!validPositionObject(obj)) return false;

  var fen = "";

  var currentRow = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var square = COLUMNS[j] + currentRow;

      // piece exists
      if (obj.hasOwnProperty(square)) {
        fen = fen + pieceCodeToFen(obj[square]);
      } else {
        // empty space
        fen = fen + "1";
      }
    }

    if (i !== 7) {
      fen = fen + "/";
    }

    currentRow = currentRow - 1;
  }

  // squeeze the empty numbers together
  fen = squeezeFenEmptySquares(fen);

  return fen;
};
// convert FEN string to position object
// returns false if the FEN string is invalid
export const fenToObj = (fen: any) => {
  if (!validFen(fen)) return false;

  // cut off any move, castling, etc info from the end
  // we're only interested in position information
  fen = fen.replace(/ .+$/, "");

  var rows = fen.split("/");
  var position: any = {};

  var currentRow = 8;
  for (var i = 0; i < 8; i++) {
    var row = rows[i].split("");
    var colIdx = 0;

    // loop through each character in the FEN section
    for (var j = 0; j < row.length; j++) {
      // number / empty squares
      if (row[j].search(/[1-8]/) !== -1) {
        var numEmptySquares = parseInt(row[j], 10);
        colIdx = colIdx + numEmptySquares;
      } else {
        // piece
        var square = COLUMNS[colIdx] + currentRow;
        position[square] = fenToPieceCode(row[j]);
        colIdx = colIdx + 1;
      }
    }

    currentRow = currentRow - 1;
  }

  return position;
};
