import React, { useLayoutEffect } from "react";
import * as uuid from "uuid";
import { pgnView, pgnEdit, pgnPrint } from "@mliebelt/pgn-viewer";

interface IProps {
  pgn: string | undefined;
  mode: string;
}
const PGNViewer = ({ pgn, mode }: IProps) => {
  const pgnConfig = {
    pgn,
    timerTime: "1",
    startPlay: pgn
      ?.split(/\d\./)
      .join("")
      .split(" ")
      .filter((item: string) => item !== "").length,
    showResult: true,
    boardSize: "160",
    showFen: false,
    showCoords: false,
    figurine: true,
    movesHeight: "78px",
    // layout: "left",
    // pieceStyle: "merida",
  };
  const id = `board-0`;
  useLayoutEffect(() => {
    switch (mode) {
      case "view":
        pgnView(id, pgnConfig);
        break;
      case "edit":
        pgnEdit(id, pgnConfig);
        break;
      case "print":
        pgnPrint(id, pgnConfig);

        break;

      default:
        break;
    }
  });

  return <div id={id}></div>;
};

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  return prevProps.pgn === nextProps.pgn ? true : false;
};

export default React.memo(PGNViewer, areEqual);
