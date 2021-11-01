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
import { objToFen, parseJSON, styleToString } from "../utils/utils";
import { BOARD_MOVE_UPDATE } from "../constants/chessMultiplayerMsgTypes";

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
const defaultFen = "8/8/8/8/8/8/8/8";
const useBoardEditor = () => {
  const [chess] = useState<ChessInstance>(new Chess(defaultFen));
  const [state, setState] = useState<{
    fen: string;
    dropSquareStyle: any;
    squareStyles: any;
    pieceSquare: any;
    square: string;
    history: Move[];
    boardPosition: any;
    pgn: any;
  }>({
    fen: defaultFen,
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
  });

  useEffect(() => {
    console.log("FEN: ", state.fen);
  }, [state.fen]);

  useEffect(() => {
    const boardContainerDiv = window.document
      .getElementById("board-container")
      ?.querySelector<HTMLElement>("div");
    //   ?.querySelector("div")

    const firstChild = boardContainerDiv?.firstElementChild;
    const lastChild = boardContainerDiv?.lastElementChild;

    if (firstChild && lastChild) {
      firstChild.classList.add("black-spare-pieces");
      lastChild.classList.add("white-spare-pieces");
      firstChild.setAttribute("style", "");
      lastChild.setAttribute("style", "");
      //   console.log("LAST_CHILD: ", lastChild);
      //   boardContainerDiv = "blue";
    }
    // console.log("BOARD CONTAINER: ", boardContainerDiv);
  }, [window.document.getElementById("board-container")]);
  //   useEffect(() => {
  //     console.log("FEN STRING: ", objToFen(state.boardPosition));
  //     setState({
  //       ...state,
  //       fen: objToFen(state.boardPosition) || "",
  //     });
  //   }, [state.boardPosition]);

  const onDrop = ({
    sourceSquare,
    targetSquare,
    piece,
  }: {
    sourceSquare: Square | string;
    targetSquare: Square;
    piece?: string;
  }) => {
    if (sourceSquare === "spare") {
      const boardPosition = {
        ...state.boardPosition,
        [targetSquare]: piece,
      };
      setState({
        ...state,
        fen: objToFen(boardPosition) || state.fen,
        boardPosition: boardPosition,
      });
    }
  };

  return {
    fen: state.fen,
    pgn: state.pgn,
    onDrop,
  };
};

export default useBoardEditor;
