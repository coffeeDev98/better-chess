import { useEffect, useState } from "react";
import {
  ChessInstance,
  Move,
  Piece,
  PieceType,
  ShortMove,
  Square,
} from "chess.js";
import { fenToObj, objToFen, parseJSON, styleToString } from "../utils/utils";
import { BOARD_MOVE_UPDATE } from "../constants/chessMultiplayerMsgTypes";

const Chess = require("chess.js");

const defaultFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const emptyBoardFen = "8/8/8/8/8/8/8/8";

const useBoardEditor = () => {
  const [chess] = useState<ChessInstance>(new Chess(defaultFen));
  const [state, setState] = useState<{
    fen: string;
    orientation: "white" | "black";
    dropSquareStyle: any;
    squareStyles: any;
    pieceSquare: any;
    square: string;
    history: Move[];
    boardPosition: any;
    pgn: any;
  }>({
    fen: defaultFen,
    orientation: "white",
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
    boardPosition: fenToObj(defaultFen),
    pgn: [],
  });

  // useEffect(() => {
  //   console.log("ORIENTATION: ", state.orientation);
  // }, [state.orientation]);

  useEffect(() => {
    console.log("BOARD_POSITION: ", objToFen(state.boardPosition));
  }, [state.boardPosition]);

  const setFenPosition = (fenString: string) => {
    setState({
      ...state,
      fen: fenString,
      boardPosition: fenToObj(fenString),
    });
  };

  const setBoardPosition = (position: any) => {
    setState({
      ...state,
      fen: objToFen(position) || state.fen,
      boardPosition: position,
    });
  };

  const reset = () => {
    setState({
      ...state,
      fen: defaultFen,
      boardPosition: fenToObj(defaultFen),
    });
  };
  const clear = () => {
    setState({
      ...state,
      fen: emptyBoardFen,
      boardPosition: fenToObj(emptyBoardFen),
    });
  };

  const flip = () => {
    setState({
      ...state,
      orientation: state.orientation === "white" ? "black" : "white",
    });
  };

  const onDrop = ({
    sourceSquare,
    targetSquare,
    piece,
  }: {
    sourceSquare: Square | string;
    targetSquare: Square;
    piece?: string;
  }) => {
    console.log("EDITOR_ON_DROP: ", sourceSquare, targetSquare, piece);
    let boardPosition;
    boardPosition =
      sourceSquare === "spare"
        ? {
            ...state.boardPosition,
            [targetSquare]: piece,
          }
        : {
            ...Object.fromEntries(
              Object.entries(state.boardPosition).filter(
                ([key, value]: [key: any, value: any]) => key !== sourceSquare
              )
            ),
            [targetSquare]: piece,
          };
    console.log("BOARD_POSITION: ", boardPosition);
    setState({
      ...state,
      fen: objToFen(boardPosition) || state.fen,
      boardPosition,
    });
  };

  return {
    fen: state.fen,
    pgn: state.pgn,
    boardPosition: state.boardPosition,
    orientation: state.orientation,
    onDrop,
    setBoardPosition,
    setFenPosition,
    reset,
    clear,
    flip,
  };
};

export default useBoardEditor;
