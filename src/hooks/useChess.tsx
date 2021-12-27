import { ChangeEvent, useEffect, useState } from "react";
import {
  ChessInstance,
  Move,
  Piece,
  PieceType,
  ShortMove,
  Square,
} from "chess.js";
import {
  Color,
  Dests,
  Key,
  MoveMetadata,
  Role,
  SetPremoveMetadata,
  Elements,
} from "chessground/types";
import { fenToObj, parseJSON } from "../utils/utils";
import {
  BOARD_FEN_UPDATE,
  BOARD_MOVE_UNDO,
  BOARD_MOVE_UPDATE,
  BOARD_PGN_UPDATE,
} from "../constants/chessMultiplayerMsgTypes";

const Chess = require("chess.js");
const ChessES6 = require("../packages/chess-es6/src/chess.js");
// const Chess = require("../packages/chess-es6.js/src/chess.js");
// const Chess = require("../packages/chess.js/chess.js");
interface IMovable {
  free?: boolean; // all moves are valid - board editor
  color?: Color | "both"; // color that can move. white | black | both | undefined
  dests?: Dests; // valid moves. {"a2" ["a3" "a4"] "b1" ["a3" "c3"]}
  showDests?: boolean; // whether to add the move-dest class on squares
  events?: {
    after?: (orig: Key, dest: Key, metadata: MoveMetadata) => void; // called after the move has been played
    afterNewPiece?: (role: Role, key: Key, metadata: MoveMetadata) => void; // called after a new piece is dropped on the board
  };
  rookCastle?: boolean; // castle by moving the king to the rook
}

interface IDraggable {
  enabled?: boolean; // allow moves & premoves to use drag'n drop
  distance?: number; // minimum distance to initiate a drag; in pixels
  autoDistance?: boolean; // lets chessground set distance to zero when user drags pieces
  showGhost?: boolean; // show ghost of piece being dragged
  deleteOnDropOff?: boolean; // delete a piece when it is dropped off the board
}

interface IPremovable {
  enabled?: boolean; // allow premoves for color that can not move
  showDests?: boolean; // whether to add the premove-dest class on squares
  castle?: boolean; // whether to allow king castle premoves
  dests?: Key[]; // premove destinations for the current selection
  events?: {
    set?: (orig: Key, dest: Key, metadata?: SetPremoveMetadata) => void; // called after the premove has been set
    unset?: () => void; // called after the premove has been unset
  };
}
interface IPredroppable {
  enabled?: boolean; // allow predrops for color that can not move
  events?: {
    set?: (role: Role, key: Key) => void; // called after the predrop has been set
    unset?: () => void; // called after the predrop has been unset
  };
}
interface IEvents {
  change?: () => void; // called after the situation changes on the board
  // called after a piece has been moved.
  // capturedPiece is undefined or like {color: 'white'; 'role': 'queen'}
  move?: (orig: Key, dest: Key, capturedPiece?: any) => void;
  dropNewPiece?: (piece: any, key: Key) => void;
  select?: (key: Key) => void; // called when a square is selected
  insert?: (elements: Elements) => void; // when the board DOM has been (re)inserted
}

const defaultFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const useChess = (Agora: any, Multiplayer: any) => {
  const [chess] = useState<any>(new Chess(defaultFen));
  const [game] = useState<any>(new ChessES6(defaultFen));
  const [promotionModal, setPromotionModal] = useState<boolean>(false);
  const [state, setState] = useState<{
    turn: "w" | "b";
    fen: string;
    orientation: "white" | "black";
    pendingMove: { sourceSquare: any; targetSquare: any } | undefined;
    dropSquareStyle: any;
    squareStyles: any;
    pieceSquare: any;
    square: string;
    history: any[];
    boardPosition: any;
    pgn: string;
    undoMovesArray: any[];
  }>({
    turn: chess.turn() || "w",
    fen: "start",
    orientation: "white",
    pendingMove: undefined,
    // square styles for active drop square
    dropSquareStyle: {},
    // custom square styles
    squareStyles: {},
    // square with the currently clicked piece
    pieceSquare: "",
    // currently clicked square
    square: "",
    // array of past game moves
    history: [],
    boardPosition: {},
    pgn: "",
    undoMovesArray: [],
  });

  // useEffect(() => {
  //   console.log("SQUARE_STYLES: ", state.squareStyles);
  // }, [state.squareStyles]);
  useEffect(() => {
    if (
      chess &&
      Object.fromEntries(new URLSearchParams(window.location.search).entries())
        .fen
    ) {
      chess.load(
        Object.fromEntries(
          new URLSearchParams(window.location.search).entries()
        ).fen
      );
      game.loadFen(
        Object.fromEntries(
          new URLSearchParams(window.location.search).entries()
        ).fen
      );
      setState({
        ...state,
        fen: Object.fromEntries(
          new URLSearchParams(window.location.search).entries()
        ).fen,
      });
    }
  }, [chess]);

  useEffect(() => {
    console.log(
      "POSITION: ",
      state.boardPosition,
      chess.in_check(),
      chess.turn()
    );
    chess.in_check() && inCheck(chess.turn());
  }, [state.boardPosition]);

  useEffect(() => {
    console.log("UNDO MOVES: ", state.undoMovesArray);
  }, [state.undoMovesArray]);

  useEffect(() => {
    if (Agora.channel) {
      Agora.channel?.on("ChannelMessage", (message: any) => {
        const data = parseJSON(message.text);
        // console.log("MESSAGE DATA: ", data);
        switch (data.type) {
          case BOARD_MOVE_UPDATE:
            onDrop({
              sourceSquare: data.json.move.from,
              targetSquare: data.json.move.to,
            });
            break;
          case BOARD_FEN_UPDATE:
            console.log("PGNPRING_LOADINGFEN...");
            chess.load(data.json.fen);
            game.loadFen(data.json.fen);
            console.log("PGNPRINT_FENUPDATE: ", data.json.fen);
            setState({ ...state, fen: data.json.fen });
            break;
          case BOARD_PGN_UPDATE:
            console.log("PGNPRING_LOADINGPGN...", data);
            chess.load_pgn(data.json.pgn);
            game.loadPgn(data.json.pgn);
            console.log("PGNPRINT_PGNUPDATE: ", data.json.pgn);
            setState({ ...state, pgn: data.json.pgn, fen: chess.fen() });
            break;
          case BOARD_MOVE_UNDO:
            const parametersObj = {
              chess,
              state,
              setState,
              undoArray: data.json.undoArray,
            };
            Multiplayer.undoMove(parametersObj);
            break;
          default:
            console.log("INVALID OPERATION");
            break;
        }
      });
    }
  }, [Agora.channel]);
  useEffect(() => {
    console.log("PGN: ", state.pgn);
  }, [state.pgn]);

  const showPromotionModal = () => setPromotionModal(true);
  const hidePromotionModal = () => setPromotionModal(false);

  const setBoardPosition = (position: any) => {
    setState({
      ...state,
      boardPosition: position,
    });
  };

  const reset = () => {
    chess.reset();
    setState({
      ...state,
      fen: defaultFen,
      boardPosition: fenToObj(defaultFen),
    });
  };

  const flip = () => {
    setState({
      ...state,
      orientation: state.orientation === "white" ? "black" : "white",
    });
  };

  const removeHighlightSquare = () => {
    const currKingPieceSquare = Object.keys(state.boardPosition).find(
      (key: string) => state.boardPosition[key] === `${chess.turn()}K`
    );
    setState(({ pieceSquare, history }) => ({
      ...state,
      squareStyles:
        chess.in_check() && currKingPieceSquare
          ? { [currKingPieceSquare]: state.squareStyles[currKingPieceSquare] }
          : squareStyling({ pieceSquare, history }),
    }));
  };

  // show possible moves
  const highlightSquare = (sourceSquare: any, squaresToHighlight: string[]) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, rgb(123,97,255,0.5) 20%, transparent 0%)",
              borderRadius: "50%",
            },
          },
          ...squareStyling({
            history: state.history,
            pieceSquare: state.pieceSquare,
          }),
        };
      },
      {}
    );

    setState(({ squareStyles }) => ({
      ...state,
      squareStyles: { ...squareStyles, ...highlightStyles },
    }));
  };

  const inCheck = (turn: string) => {
    const checkedKingPos: any = Object.keys(state.boardPosition).find(
      (key: string) => state.boardPosition[key] === `${turn}K`
    );
    console.log(
      "INCHECK: ",
      Object.keys(state.boardPosition).find(
        (key: string) => state.boardPosition[key] === `${turn}K`
      )
    );
    setState({
      ...state,
      squareStyles: {
        ...state.squareStyles,
        [checkedKingPos]: { backgroundColor: "red" },
      },
    });
  };

  const onMouseOverSquare = (square: any) => {
    // get list of possible moves for this square
    const moves = chess.moves({
      square,
      verbose: true,
    });
    // const moves = game.moves({
    //   onlyForSquare: square,
    //   onlyAlgebraicSquares: true,
    //   onlyDestinationSquares: true,
    // });
    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (const move of moves) {
      squaresToHighlight.push(move.to);
    }
    console.log("SQUARESTOHIGHLIGHT: ", { moves, squaresToHighlight });
    highlightSquare(square, squaresToHighlight);
  };

  const onMouseOutSquare = (square: any) => {
    removeHighlightSquare();
  };

  const promotion = (
    sourceSquare: any,
    targetSquare: any,
    e?: Exclude<any, "p" | "k">
  ) => {
    const from = sourceSquare;
    const to = targetSquare;
    chess.move({ from, to, promotion: e });
    game.makeMoveFromAlgebraic(from, to, e);
    setState({
      ...state,
      fen: chess.fen(),
      pendingMove: undefined,
    });
    hidePromotionModal();
  };

  const onDrop = ({
    sourceSquare,
    targetSquare,
    piece,
  }: {
    sourceSquare: any;
    targetSquare: any;
    piece?: string;
  }) => {
    // see if the move is legal
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      // promotion: "q", // always promote to a queen for example simplicity
    });
    const moves = chess.moves({ verbose: true });
    for (let i = 0, len = moves.length; i < len; i++) {
      /* eslint-disable-line */
      if (moves[i].flags.includes("p") && moves[i].from === sourceSquare) {
        setState({
          ...state,
          pendingMove: { sourceSquare, targetSquare },
        });
        showPromotionModal();
        return;
      }
    }

    // illegal move
    if (move === null) return;

    console.log("ES6 MOVES: ", {
      move: game.makeMoveFromAlgebraic(sourceSquare, targetSquare),
      moves: game.moves({
        onlyAlgebraicSquares: true,
        onlyForSquare: sourceSquare,
        onlyDestinationSquares: true,
      }),
      fen: game.toFen(),
      pgn: game.toPgn(),
      history: game.history(),
      game,
      header: game.header(),
    });
    game.makeMoveFromAlgebraic(sourceSquare, targetSquare);
    setState(({ history, pieceSquare }) => ({
      ...state,
      turn: chess.turn(),
      fen: chess.fen(),
      pgn: game.toPgn(),
      history: chess.history({ verbose: true }),
      squareStyles: squareStyling({ pieceSquare, history }),
    }));

    const fens: any[] = [];
    moves.forEach((m: any) => {
      chess.move(m);
      fens.push(chess.fen());
      chess.undo();
    });
    console.log("FENS: ", fens);
    // Multiplayer.updateBoard(move);
    // Multiplayer.updateBoardFen(chess.fen());
    Multiplayer.updateBoardPgn(game.toPgn());
  };

  const onSquareClick = (square: any) => {
    setState(({ history }) => ({
      ...state,
      squareStyles: {
        ...state.squareStyles,
        ...squareStyling({ pieceSquare: square, history }),
      },
      pieceSquare: square,
    }));
    let move = chess.move({
      from: state.pieceSquare,
      to: square,
      // promotion: "q", // always promote to a queen for example simplicity
    });

    const moves = chess.moves({ verbose: true });

    for (let i = 0, len = moves.length; i < len; i++) {
      /* eslint-disable-line */
      if (moves[i].flags.includes("p") && moves[i].from === state.pieceSquare) {
        setState({
          ...state,
          pendingMove: {
            sourceSquare: state.pieceSquare,
            targetSquare: square,
          },
        });
        // promotion(state.pieceSquare, square, "q");
        showPromotionModal();
        return;
      }
    }

    // illegal move
    if (move === null) return;

    setState({
      ...state,
      turn: chess.turn(),
      fen: chess.fen(),
      pgn: chess.pgn(),
      history: chess.history({ verbose: true }),
      pieceSquare: "",
    });
    Multiplayer.updateBoard(move);
  };

  // central squares get diff dropSquareStyles
  const onDragOverSquare = (square: any) => {
    setState({
      ...state,
      dropSquareStyle:
        square === "e4" || square === "d4" || square === "e5" || square === "d5"
          ? { backgroundColor: "cornFlowerBlue" }
          : { boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)" },
    });
  };

  const onSquareRightClick = (square: any) =>
    setState({
      ...state,
      squareStyles: { [square]: { backgroundColor: "deepPink" } },
    });

  const undoMove = () => {
    const undoMoveObj = chess.undo();
    if (undoMoveObj) {
      console.log("ES6 MOVE UNDO: ", game.prev());
      setState({
        ...state,
        fen: chess.fen(),
        undoMovesArray: [...state.undoMovesArray, undoMoveObj],
      });
      Multiplayer.undoMoveMsg([...state.undoMovesArray, undoMoveObj]);
    }
  };
  const redoMove = () => {
    if (state.undoMovesArray.length === 0) return;
    const redoMoveObj: any | undefined = state.undoMovesArray.pop();
    console.log("REDO: ", redoMoveObj);
    if (redoMoveObj) {
      console.log("ES6 MOVE REDO: ", game.next());
      const move = chess.move(redoMoveObj);
      console.log("REDONE: ", move);
      if (move !== null) {
        setState(({ history, pieceSquare }) => ({
          ...state,
          fen: chess.fen(),
          pgn: chess.pgn(),
          history: chess.history({ verbose: true }),
          squareStyles: squareStyling({ pieceSquare, history }),
          // undoMovesArray: ,
        }));

        Multiplayer.updateBoard(move);
      }
    }
  };

  return {
    turn: state.turn,
    fen: state.fen,
    pgn: state.pgn,
    history: state.history,
    orientation: state.orientation,
    squareStyles: state.squareStyles,
    pendingMove: state.pendingMove,
    promotionModal,
    setBoardPosition,
    reset,
    flip,
    onDrop,
    onMouseOverSquare,
    onMouseOutSquare,
    onDragOverSquare,
    onSquareClick,
    onSquareRightClick,
    undoMove,
    redoMove,
    promotion,
  };
};

const squareStyling = ({
  pieceSquare,
  history,
}: {
  pieceSquare: any;
  history: any;
}) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "rgba(123,97,255,0.5)" },
    // ...(history.length && {
    //   [sourceSquare]: {
    //     backgroundColor: "rgba(123,97,255,0.5)",
    //   },
    // }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "rgba(123,97,255,0.5)",
      },
    }),
  };
};

export default useChess;

// To show promotional Modal or not
// const showPromotionModal = () => setPromotionModal(true);
// const hidePromotionModal = () => setPromotionModal(false);

// const handleMove = (move: ShortMove) => {
//   const moves = chess.moves({ verbose: true });

//   for (let i = 0, len = moves.length; i < len; i++) {
//     /* eslint-disable-line */
//     if (moves[i].flags.indexOf("p") !== -1 && moves[i].from === move.from) {
//       setPendingMove([move.from, move.to]);
//       // showPromotionModal();
//       return;
//     }
//   }
//   const moveVerbose = chess.move(move);
//   if (moveVerbose) {
//     setFen(chess.fen());
//     Multiplayer.updateBoard(move);
//   }
// };

// const calcMovable = (): IMovable => {
//   const dests = new Map();
//   chess.SQUARES.forEach((s) => {
//     const ms = chess.moves({ square: s, verbose: true });
//     if (ms.length)
//       dests.set(
//         s,
//         ms.map((m) => m.to)
//       );
//   });

//   return {
//     free: false,
//     dests: dests,
//     showDests: true,
//     events: {
//       after: (from: any, to: any, metadeta: any) => {
//         // console.log("metadata: ", { from, to, metadeta });
//         return handleMove({ from: from, to: to });
//       },
//       afterNewPiece: (role: Role, key: Key, metaData: MoveMetadata) => {
//         console.log("afterNewPiece: ", role, key, metaData);
//       },
//     },
//     rookCastle: true,
//   };
// };

// const calcDraggable = (): IDraggable => ({
//   enabled: true,
//   showGhost: false,
//   deleteOnDropOff: false,
// });
