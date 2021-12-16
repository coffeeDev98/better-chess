import React, { ChangeEvent, useEffect, useState } from "react";
import NativeChessboard from "chessboardjsx";
import useChess from "../../hooks/useChess";
import useAgora from "../../hooks/useAgora";
import useChessMultiplayer from "../../hooks/useChessMultiplayer";
import useBoardEditor from "../../hooks/useBoardEditor";
import { IChessboardProps } from "../../types/chessboardTypes";
import {
  // ScChessPgn,
  ScChessInterface,
  ScChessSidePanel,
  GamePlayPanel1,
  GamePlayPanel2,
  EditorSidePanel,
  ScChessHistoryPanel,
  ScSidePanelNav,
  ScPromotionModal,
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
import arrowLeft from "../../assets/images/arrowLeft.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import PGNViewer from "../PGNViewer/PGNViewer";

interface Props {}

interface ICustomPieceProps {
  squareWidth: number;
  isDragging: boolean;
}

const SidePanelMenu = ({
  undoMove,
  redoMove,
  flip,
  reset,
  setSidePanelSection,
}: {
  undoMove: any;
  redoMove: any;
  flip: any;
  reset: any;
  setSidePanelSection: any;
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
        <img
          src={historyIcon}
          alt="History"
          onClick={() => {
            setSidePanelSection("history");
          }}
        />
      </div>
      <div>
        <img src={resetIcon} alt="Reset" onClick={reset} />
      </div>
      <div>
        <img src={flipIcon} alt="Flip" onClick={flip} />
      </div>
    </GamePlayPanel1>
    <GamePlayPanel2>
      <div>
        <img src={loadIcon} alt="Load" />
      </div>
    </GamePlayPanel2>
  </>
);

const ChessInterface = (props: Props) => {
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
  // const [overlay, setOverlay] = useState(new ChessboardArrows("board-0"));

  const Agora = useAgora();
  const Multiplayer = useChessMultiplayer({
    Agora,
  });
  const boardEditor = useBoardEditor();
  const {
    turn,
    setBoardPosition,
    reset,
    flip,
    orientation,
    pendingMove,
    fen,
    pgn,
    history,
    promotionModal,
    onDrop,
    onMouseOverSquare,
    onMouseOutSquare,
    squareStyles,
    onDragOverSquare,
    onSquareClick,
    onSquareRightClick,
    undoMove,
    redoMove,
    promotion,
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
  // useEffect(() => {
  //   console.log("HISTORY: ", history);
  // }, [history]);
  // useEffect(() => {

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
    orientation: editorMode ? boardEditor.orientation : orientation || "white",
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

  const renderHistoryPanel = () => (
    <ScChessHistoryPanel>
      <div className="title">
        <img src={historyIcon} alt="" />
        History
      </div>

      {/* <table className="pgn">
          {pgn?.split(/\d\./)?.map?.(
            (move: string, index: number) =>
              index !== 0 && (
                <tr>
                  <td>{index}</td>
                  {move
                    .split(" ")
                    .filter((item: string) => item !== "")
                    .map((singleMove: string, i: number) => (
                      <td>{singleMove}</td>
                    ))}
                </tr>
              )
          )}
        </table> */}
      <div className="pgn-section">
        {pgn && <PGNViewer pgn={pgn} mode="edit"></PGNViewer>}
      </div>
      <ScSidePanelNav>
        <img
          src={arrowLeft}
          alt=""
          onClick={() => {
            setSidePanelSection("menu");
          }}
        />
        <img src={arrowRight} alt="" />
      </ScSidePanelNav>
    </ScChessHistoryPanel>
  );
  const renderSidePanel = () => {
    switch (sidePanelSection) {
      case "menu":
        return (
          <SidePanelMenu
            undoMove={undoMove}
            redoMove={redoMove}
            reset={reset}
            flip={flip}
            setSidePanelSection={setSidePanelSection}
          />
        );
      case "history":
        return renderHistoryPanel();

      default:
        return (
          <SidePanelMenu
            undoMove={undoMove}
            redoMove={redoMove}
            reset={reset}
            flip={flip}
            setSidePanelSection={setSidePanelSection}
          />
        );
    }
  };
  const renderPromotionModal = (
    <ScPromotionModal>
      <div>
        <img
          src={turn === "w" ? wQ : bQ}
          alt=""
          width={dimension && dimension / 8}
          height={dimension && dimension / 8}
          onClick={() => {
            pendingMove &&
              promotion(
                pendingMove.sourceSquare,
                pendingMove.targetSquare,
                "q"
              );
          }}
        />
      </div>
      <div>
        <img
          src={turn === "w" ? wB : bB}
          alt=""
          width={dimension && dimension / 8}
          height={dimension && dimension / 8}
          onClick={() => {
            pendingMove &&
              promotion(
                pendingMove.sourceSquare,
                pendingMove.targetSquare,
                "b"
              );
          }}
        />
      </div>
      <div>
        <img
          src={turn === "w" ? wR : bR}
          alt=""
          width={dimension && dimension / 8}
          height={dimension && dimension / 8}
          onClick={() => {
            pendingMove &&
              promotion(
                pendingMove.sourceSquare,
                pendingMove.targetSquare,
                "r"
              );
          }}
        />
      </div>
      <div>
        <img
          src={turn === "w" ? wN : bN}
          alt=""
          width={dimension && dimension / 8}
          height={dimension && dimension / 8}
          onClick={() => {
            pendingMove &&
              promotion(
                pendingMove.sourceSquare,
                pendingMove.targetSquare,
                "n"
              );
          }}
        />
      </div>
    </ScPromotionModal>
  );

  return (
    <ScChessInterface dimension={dimension} editorMode={editorMode}>
      <div id="board-container" className="board-container">
        {promotionModal && renderPromotionModal}
        <NativeChessboard {...chessboardConfig} />
        {/* <PGNViewer pgn={pgn} mode="edit" /> */}
      </div>
      {/* {!editorMode && ( */}
      <ScChessSidePanel editorMode={editorMode}>
        {editorMode ? (
          <EditorSidePanel>
            <div className="title">Board Settings</div>
            <div className="divider"></div>
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
            <div className="btn-panel">
              <button onClick={boardEditor.reset}>Reset</button>
              <button onClick={boardEditor.clear}>Clear</button>
              <button onClick={boardEditor?.flip}>Flip</button>
            </div>
          </EditorSidePanel>
        ) : (
          <>{renderSidePanel()}</>
        )}
      </ScChessSidePanel>
      {/* )} */}
    </ScChessInterface>
  );
};

export default ChessInterface;
