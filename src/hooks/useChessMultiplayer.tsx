import { ChessInstance, Move, ShortMove } from "chess.js";
import React, { useEffect } from "react";
import {
  BOARD_FEN_UPDATE,
  BOARD_MOVE_UNDO,
  BOARD_MOVE_UPDATE,
  BOARD_PGN_UPDATE,
} from "../constants/chessMultiplayerMsgTypes";
import { IMultiplayerProps } from "../types/chessMultiplayer";
import { parseJSON } from "../utils/utils";

interface IProps {
  Agora: any;
}

const useChessMultiplayer = (props: IProps) => {
  const { Agora } = props;
  console.log("CHESS_MULTIPLAYER: ", Agora);
  const updateBoard = (move: ShortMove) => {
    const updateObject = {
      move: move,
    };
    Agora?.sendChannelMessage(updateObject, BOARD_MOVE_UPDATE);
  };
  const updateBoardFen = (fen: string) => {
    const updateObject = {
      fen: fen,
    };
    Agora?.sendChannelMessage(updateObject, BOARD_FEN_UPDATE);
  };
  const updateBoardPgn = (pgn: string) => {
    const updateObject = {
      pgn,
    };
    console.log("MULTIPLAYER_SEND: ", { Agora, updateObject });
    Agora?.sendChannelMessage(updateObject, BOARD_PGN_UPDATE);
  };
  const undoMoveMsg = (undoArray: Move[]) => {
    const updateObject = {
      undoArray: undoArray,
    };
    Agora?.sendChannelMessage(updateObject, BOARD_MOVE_UNDO);
  };
  const undoMove = ({
    chess,
    state,
    setState,
    undoArray,
  }: {
    chess: ChessInstance;
    state: any;
    setState: any;
    undoArray: Move[];
  }) => {
    const undoMoveObj = chess.undo();
    if (undoMoveObj) {
      setState({
        ...state,
        fen: chess.fen(),
        undoMovesArray: undoArray,
      });
    }
  };

  return { updateBoard, updateBoardFen, updateBoardPgn, undoMoveMsg, undoMove };
};

export default useChessMultiplayer;
