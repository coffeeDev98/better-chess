import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import NativeChessboard from "chessboardjsx";
import useChess from "../../hooks/useChess";
import useAgora from "../../hooks/useAgora";
import useChessMultiplayer from "../../hooks/useChessMultiplayer";
import useBoardEditor from "../../hooks/useBoardEditor";
import { IChessboardProps } from "../../types/chessboardTypes";
import {
  ScChessPgn,
  ScChessInterface,
  ScChessSidePanel,
  GamePlayPanel1,
  GamePlayPanel2,
  EditorSidePanel,
} from "../_StyledComponent/StyledComponent";
import undoIcon from "../../assets/images/sidePanelIcons/undoMove.svg";
import redoIcon from "../../assets/images/sidePanelIcons/redoMove.svg";
import historyIcon from "../../assets/images/sidePanelIcons/history.svg";
import resetIcon from "../../assets/images/sidePanelIcons/resetBoard.svg";
import flipIcon from "../../assets/images/sidePanelIcons/flipBoard.svg";
import loadIcon from "../../assets/images/sidePanelIcons/loadGame.svg";
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
// import Chessboard from "../Chessboard/Chessboard";

interface Props {}

interface ICustomPieceProps {
  squareWidth: number;
  isDragging: boolean;
}

const SidePanelMenu = ({
  undoMove,
  redoMove,
}: {
  undoMove: any;
  redoMove: any;
}) => (
  <>
    <GamePlayPanel1>
      <div onClick={undoMove}>
        <img src={undoIcon} alt="Undo" />
      </div>
      <div onClick={redoMove}>
        <img src={redoIcon} alt="Redo" />
      </div>
      <div>
        <img src={historyIcon} alt="History" />
      </div>
      <div>
        <img src={resetIcon} alt="Reset" />
      </div>
      <div>
        <img src={flipIcon} alt="Flip" />
      </div>
      {/* <div>
        <ScChessPgn>
          {pgn.map?.(
            (move: string, index: number) =>
              index !== 0 && <ScChessPgn>{`${index}. ${move}`}</ScChessPgn>
          )}
        </ScChessPgn>
      </div> */}
    </GamePlayPanel1>
    <GamePlayPanel2>
      <div>
        <img src={loadIcon} alt="Load" />
      </div>
    </GamePlayPanel2>
  </>
);

const ChessInterface = (props: Props) => {
  // const Agora = useAgora();
  // const AgoraChannel: RtmChannel | undefined | null = Agora.channel;
  // const Multiplayer = useChessMultiplayer({
  //   Agora: Agora,
  // });
  const [dimension, setDimension] = useState<number>();
  // const [undoMove, setUndoMove] = useState<boolean>(false);
  const [editorMode, setEditorMode] = useState<boolean>(
    (Object.fromEntries(new URLSearchParams(window.location.search).entries())
      .editorMode === "true"
      ? true
      : false) || false
  );
  const [sidePanelSection, setSidePanelSection] = useState<string | undefined>(
    "menu"
  );

  const Agora = useAgora();
  const Multiplayer = useChessMultiplayer({
    Agora,
  });
  const boardEditor = useBoardEditor();
  const {
    setBoardPosition,
    fen,
    pgn,
    onDrop,
    onMouseOverSquare,
    onMouseOutSquare,
    squareStyles,
    onDragOverSquare,
    onSquareClick,
    onSquareRightClick,
    undoMove,
    redoMove,
  } = useChess(Agora, Multiplayer);
  let firstChild: Element | null | undefined;
  let lastChild: Element | null | undefined;

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  useEffect(() => {
    const boardContainerDiv = window.document
      .getElementById("board-container")
      ?.querySelector<HTMLElement>("div");
    //   ?.querySelector("div")

    firstChild = boardContainerDiv?.firstElementChild;
    lastChild = boardContainerDiv?.lastElementChild;

    if (firstChild && lastChild) {
      firstChild.classList.add("black-spare-pieces");
      lastChild.classList.add("white-spare-pieces");
      firstChild.setAttribute("style", "");
      lastChild.setAttribute("style", "");
    }
  }, [window.document.getElementById("board-container")]);

  // const toggleUndoMove = () => setUndoMove(!undoMove);

  const updateDimensions = () => {
    setDimension(
      window.document.getElementById("board-container")?.clientWidth
    );
  };

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

  let chessboardConfig: Partial<IChessboardProps> = {
    id: "board-0",
    position: editorMode ? boardEditor.boardPosition : fen,
    dropOffBoard: editorMode ? "trash" : "snapback",
    draggable: true,
    lightSquareStyle: { backgroundColor: "#E8EDF9" },
    darkSquareStyle: { backgroundColor: "#B7C0D8" },
    pieces: customPieces,
    boardStyle: {
      width: dimension,
      height: dimension,
      position: "relative",
    },
    width: dimension,

    getPosition: editorMode ? boardEditor.setBoardPosition : setBoardPosition,
    ...(editorMode ? { onDrop: boardEditor.onDrop } : { onDrop }),
    // onDrop,
    orientation: editorMode ? boardEditor.orientation : "white",
    ...(!editorMode && {
      onMouseOverSquare,
      onMouseOutSquare,
      squareStyles,
      onDragOverSquare,
      onSquareClick,
      onSquareRightClick,
    }),
    sparePieces: editorMode,
  };

  return (
    <ScChessInterface dimension={dimension} editorMode={editorMode}>
      <div id="board-container" className="board-container">
        <NativeChessboard {...chessboardConfig} />
      </div>
      {/* {!editorMode && ( */}
      <ScChessSidePanel editorMode={editorMode}>
        {editorMode ? (
          <EditorSidePanel>
            <div className="title">Board Settings</div>
            <div className="divider"></div>
            {/* <div className="slider">
              <div>Manual</div>
              <div>Upload</div>
            </div> */}
            <label htmlFor="inputFen">Fen</label>
            <div className="input-fen">
              <input
                name="inputFen"
                type="text"
                value={boardEditor?.fen}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  boardEditor.setFenPosition(e.target.value);
                }}
              />
            </div>
            {/* <label htmlFor="inputFen">Output</label>
            <div className="output-fen"></div> */}
            <div className="btn-panel">
              <button onClick={boardEditor.reset}>Reset</button>
              <button onClick={boardEditor.clear}>Clear</button>
              <button onClick={boardEditor?.flip}>Flip</button>
            </div>
          </EditorSidePanel>
        ) : (
          <>
            {sidePanelSection === "menu" && (
              <SidePanelMenu undoMove={undoMove} redoMove={redoMove} />
            )}
          </>
        )}
      </ScChessSidePanel>
      {/* )} */}
    </ScChessInterface>
  );
};

export default ChessInterface;
