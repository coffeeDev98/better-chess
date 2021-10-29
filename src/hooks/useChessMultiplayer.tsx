import { ShortMove } from "chess.js";
import React, { useEffect } from "react";
import { BOARD_MOVE_UPDATE } from "../constants/chessMultiplayerMsgTypes";
import { IMultiplayerProps } from "../types/chessMultiplayer";
import { parseJSON } from "../utils/utils";

interface IProps {
  Agora: any;
}

const useChessMultiplayer = (props: IProps) => {
  const { Agora } = props;

  const updateBoard = (move: ShortMove) => {
    const updateObject = {
      move: move,
    };
    Agora?.sendChannelMessage(updateObject, BOARD_MOVE_UPDATE);
  };
  return { updateBoard };
};

export default useChessMultiplayer;
