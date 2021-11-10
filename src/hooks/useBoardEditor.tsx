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

  //   useEffect(() => {
  //     console.log("FEN STRING: ", objToFen(state.boardPosition));
  //     setState({
  //       ...state,
  //       fen: objToFen(state.boardPosition) || "",
  //     });
  //   }, [state.boardPosition]);

  const setFenPosition = (fenString: string) => {
    setState({
      ...state,
      fen: fenString,
      boardPosition: fenToObj(fenString),
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
    if (sourceSquare === "spare") {
      const boardPosition = {
        ...state.boardPosition,
        [targetSquare]: piece,
      };
      setState({
        ...state,
        fen: objToFen(boardPosition) || state.fen,
        boardPosition,
      });
    }
  };

  return {
    fen: state.fen,
    pgn: state.pgn,
    onDrop,
    setFenPosition,
  };
};

export default useBoardEditor;
