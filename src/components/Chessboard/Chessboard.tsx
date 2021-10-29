import React from "react";
import useChess from "../../hooks/useChess";
import useChessMultiplayer from "../../hooks/useChessMultiplayer";
import NativeChessboard from "chessboardjsx";
import useAgora from "../../hooks/useAgora";
import wK from "../../assets/images/chessPieces/wK.svg";
import wQ from "../../assets/images/chessPieces/wQ.svg";
import wB from "../../assets/images/chessPieces/wB.svg";
import wR from "../../assets/images/chessPieces/wR.svg";
import wN from "../../assets/images/chessPieces/wN.svg";
import wP from "../../assets/images/chessPieces/wP.svg";
import bK from "../../assets/images/chessPieces/bK.svg";
import bQ from "../../assets/images/chessPieces/bQ.svg";
import bB from "../../assets/images/chessPieces/bB.svg";
import bR from "../../assets/images/chessPieces/bR.svg";
import bN from "../../assets/images/chessPieces/bN.svg";
import bP from "../../assets/images/chessPieces/bP.svg";

interface ICustomPieceProps {
  squareWidth: number;
  isDragging: boolean;
}

interface IProps {
  dimension: number | undefined;
}

const Chessboard = (props: IProps) => {
  const { dimension } = props;
  const Agora = useAgora();
  const Multiplayer = useChessMultiplayer({
    Agora: Agora,
  });
  const {
    setBoardPosition,
    fen,
    onDrop,
    onMouseOverSquare,
    onMouseOutSquare,
    squareStyles,
    onDragOverSquare,
    onSquareClick,
    onSquareRightClick,
  } = useChess(Agora, Multiplayer);

  // const config: Partial<Config> = {
  //   fen: fen,
  //   coordinates: true,
  //   addPieceZIndex: true,
  //   // viewOnly: viewMode,
  //   disableContextMenu: false,
  //   resizable: true,
  //   autoCastle: true,
  //   highlight: {
  //     lastMove: true,
  //     check: true,
  //   },
  //   selectable: {
  //     enabled: true,
  //   },
  //   movable: calcMovable(),
  //   draggable: calcDraggable(),
  //   events: {
  //     dropNewPiece: (piece: Piece, key: Key) => {
  //       console.log({ piece, key });
  //     },
  //   },
  // };
  const customPieces = {
    wK: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={wK}
        alt={"wK"}
      />
    ),
    wQ: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={wQ}
        alt={"wQ"}
      />
    ),
    wB: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={wB}
        alt={"wB"}
      />
    ),
    wR: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={wR}
        alt={"wR"}
      />
    ),
    wN: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={wN}
        alt={"wN"}
      />
    ),
    wP: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={wP}
        alt={"wP"}
      />
    ),

    bK: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={bK}
        alt={"bK"}
      />
    ),
    bQ: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={bQ}
        alt={"bQ"}
      />
    ),
    bB: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={bB}
        alt={"bB"}
      />
    ),
    bR: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={bR}
        alt={"bR"}
      />
    ),
    bN: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={bN}
        alt={"bN"}
      />
    ),
    bP: ({ squareWidth, isDragging }: ICustomPieceProps) => (
      <img
        style={{
          width: squareWidth,
          height: squareWidth,
        }}
        src={bP}
        alt={"bP"}
      />
    ),
  };
  return (
    <>
      {/* <Chessground
        width={dimension || 900}
        height={dimension || 900}
        config={config}
      /> */}
      <NativeChessboard
        position={fen}
        getPosition={setBoardPosition}
        lightSquareStyle={{ backgroundColor: "#E8EDF9" }}
        darkSquareStyle={{ backgroundColor: "#B7C0D8" }}
        pieces={customPieces}
        boardStyle={{
          width: dimension,
          height: dimension,
          position: "relative",
        }}
        width={dimension}
        onDrop={onDrop}
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare}
        squareStyles={squareStyles}
        onDragOverSquare={onDragOverSquare}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
        // sparePieces={true}
      />
    </>
  );
};

export default Chessboard;
