import { useEffect, useState } from "react";
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
import { parseJSON } from "../utils/utils";
import {
  BOARD_MOVE_UNDO,
  BOARD_MOVE_UPDATE,
} from "../constants/chessMultiplayerMsgTypes";

const Chess = require("chess.js");

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
  move?: (orig: Key, dest: Key, capturedPiece?: Piece) => void;
  dropNewPiece?: (piece: Piece, key: Key) => void;
  select?: (key: Key) => void; // called when a square is selected
  insert?: (elements: Elements) => void; // when the board DOM has been (re)inserted
}

const useChess = (Agora: any, Multiplayer: any) => {
  const [chess] = useState<ChessInstance>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [state, setState] = useState<{
    fen: string;
    dropSquareStyle: any;
    squareStyles: any;
    pieceSquare: any;
    square: string;
    history: Move[];
    boardPosition: any;
    pgn: any;
    undoMovesArray: Move[];
  }>({
    fen: "start",
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
    pgn: [],
    undoMovesArray: [],
  });

  // useEffect(() => {
  //   console.log("SQUARE_STYLES: ", state.squareStyles);
  // }, [state.squareStyles]);

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

  const setBoardPosition = (position: any) => {
    setState({
      ...state,
      boardPosition: position,
    });
  };

  const promotion = (
    sourceSquare: Square,
    targetSquare: Square,
    e?: Exclude<PieceType, "p" | "k">
  ) => {
    const from = sourceSquare;
    const to = targetSquare;
    chess.move({ from, to, promotion: e });
    setState({
      ...state,
      fen: chess.fen(),
    });
    // hidePromotionModal();
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
  const highlightSquare = (
    sourceSquare: Square,
    squaresToHighlight: string[]
  ) => {
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

  const onMouseOutSquare = (square: Square) => {
    removeHighlightSquare();
  };

  const onMouseOverSquare = (square: Square) => {
    // get list of possible moves for this square
    let moves = chess.moves({
      square,
      verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (const move of moves) {
      squaresToHighlight.push(move.to);
    }
    // console.log("SQUARESTOHIGHLIGHT: ", squaresToHighlight);
    highlightSquare(square, squaresToHighlight);
  };

  const onDrop = ({
    sourceSquare,
    targetSquare,
    piece,
  }: {
    sourceSquare: Square;
    targetSquare: Square;
    piece?: string;
  }) => {
    // see if the move is legal
    let move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      // promotion: "q", // always promote to a queen for example simplicity
    });
    // console.log("MOVE: ", move);
    const moves = chess.moves({ verbose: true });
    for (let i = 0, len = moves.length; i < len; i++) {
      /* eslint-disable-line */
      if (
        moves[i].flags.indexOf("p") !== -1 &&
        moves[i].from === sourceSquare
      ) {
        // setPendingMove([sourceSquare, targetSquare]);
        // console.log("opening promotional modal");
        promotion(sourceSquare, targetSquare, "r");
        // showPromotionModal();
        return;
      }
    }

    // illegal move
    if (move === null) return;
    setState(({ history, pieceSquare }) => ({
      ...state,
      fen: chess.fen(),
      pgn: chess.pgn()?.split(/\d\./),
      history: chess.history({ verbose: true }),
      squareStyles: squareStyling({ pieceSquare, history }),
    }));
    Multiplayer.updateBoard(move);
  };

  const onSquareClick = (square: Square) => {
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
    // const pieceMoves = chess.moves({ square, verbose: true });
    // let squaresToHighlight = [];
    // for (const m of pieceMoves) {
    //   squaresToHighlight.push(m.to);
    // }
    // highlightSquare(square, squaresToHighlight);

    for (let i = 0, len = moves.length; i < len; i++) {
      /* eslint-disable-line */
      if (moves[i].flags.includes("p") && moves[i].from === state.pieceSquare) {
        // setPendingMove([state.pieceSquare, targetSquare]);
        // console.log("opening promotional modal");
        promotion(state.pieceSquare, square, "q");
        // showPromotionModal();
        return;
      }
    }

    // illegal move
    if (move === null) return;

    setState({
      ...state,
      fen: chess.fen(),
      pgn: chess.pgn()?.split(/\d\./),
      history: chess.history({ verbose: true }),
      pieceSquare: "",
    });
    Multiplayer.updateBoard(move);
  };

  // central squares get diff dropSquareStyles
  const onDragOverSquare = (square: Square) => {
    setState({
      ...state,
      dropSquareStyle:
        square === "e4" || square === "d4" || square === "e5" || square === "d5"
          ? { backgroundColor: "cornFlowerBlue" }
          : { boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)" },
    });
  };

  const onSquareRightClick = (square: Square) =>
    setState({
      ...state,
      squareStyles: { [square]: { backgroundColor: "deepPink" } },
    });

  const undoMove = () => {
    const undoMoveObj = chess.undo();
    if (undoMoveObj) {
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
    const redoMoveObj: Move | undefined = state.undoMovesArray.pop();
    console.log("REDO: ", redoMoveObj);
    if (redoMoveObj) {
      const move = chess.move(redoMoveObj);
      console.log("REDONE: ", move);
      if (move !== null) {
        setState(({ history, pieceSquare }) => ({
          ...state,
          fen: chess.fen(),
          pgn: chess.pgn()?.split(/\d\./),
          history: chess.history({ verbose: true }),
          squareStyles: squareStyling({ pieceSquare, history }),
          // undoMovesArray: ,
        }));

        Multiplayer.updateBoard(move);
      }
    }
  };

  return {
    setBoardPosition,
    fen: state.fen,
    pgn: state.pgn,
    onDrop,
    onMouseOverSquare,
    onMouseOutSquare,
    squareStyles: state.squareStyles,
    onDragOverSquare,
    onSquareClick,
    onSquareRightClick,
    undoMove,
    redoMove,
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
