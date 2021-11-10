import Styled, { css } from "styled-components";

const chessboardEditorSidePanelStyle = css`
  background-color: #2b2b34;
  width: 386px;
  border-radius: 0px 16px 16px 0px;
`;

export const ScChessSidePanel = Styled.div<{
  editorMode: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ editorMode }) => editorMode && chessboardEditorSidePanelStyle}
`;

export const GamePlayPanel1 = Styled.div`
  div {
    padding: 14px;
    cursor: pointer;
  }
`;
export const GamePlayPanel2 = Styled.div`
  div {
      padding: 14px;
      cursor: pointer;
    }
`;

export const EditorSidePanel = Styled.div`
  padding: 26px;
  height: 100%;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
  }
  .divider {
    width: 100%;
    height: 0.5px;
    background: #FFFFFF;
    opacity: 0.1;
    margin: 13.5px 0;
  }
  .slider {
    width: 100%;
    height: 32px;
    background: #E8EDF9;
    border-radius: 10px;
    display: flex;
    margin-bottom: 156px;
    div {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .input-fen {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
    input {
      width: 80%;
      height: 32px;
      border-radius: 8px;
    }
  }
  .output-fen {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    border-radius: 8px;
    background: #ffffff;
    padding: 0px 8px;
  }
`;

const chessboardEditorModeStyle = css`
  div[class$="-spare-pieces"] {
    position: absolute;
    width: 340px;
    display: flex;
    justify-content: space-between;
    div[data-testid^="spare-"]:nth-child(odd) {
      background: #b7c0d8;
    }
    div[data-testid^="spare-"]:nth-child(even) {
      background: #e8edf9;
    }
    div {
      /* width: 100%; */
      margin: 2px;
      border-radius: 12px;
      div {
        img {
          padding: 8px 10px;
          width: 26px !important;
          height: 28px !important;
        }
      }
    }
  }
`;

export const ScChessInterface = Styled.div<{
  dimension: number | undefined;
  editorMode?: boolean;
}>`
  display: flex;
  /* width: 1000px; */
  /* height: fit-content; */
  max-width: 1440px;
  background: black;
  grid-template-columns: 66% 37%;
  grid-template-areas: "board sidePanel";
  .board-container {
    position:relative;
    min-width: 500px;
    min-height: 500px;
    grid-area: board;
    border: 10px solid rgba(255, 255, 255);
    div {
      ${({ editorMode }) => editorMode && chessboardEditorModeStyle}
      .black-spare-pieces {
        left: ${(props) =>
          props.dimension ? `${props.dimension + 32}px` : "0px"};
        bottom: ${(props) =>
          props.dimension ? `${props.dimension - 180}px` : "0px"};

        /* background:grey; */
      }
      .white-spare-pieces {
        left: ${(props) =>
          props.dimension ? `${props.dimension + 32}px` : "0px"};
        bottom: ${(props) =>
          props.dimension ? `${props.dimension - 240}px` : "0px"};
        /* background:grey; */
      }
    }  
  }
  
  ${ScChessSidePanel} {
    grid-area: sidePanel;
    /* width: 100%; */
    /* height: 100%; */
  ${GamePlayPanel1}, ${GamePlayPanel2} {
    background: #2b2b34;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 8px 8px 0;
  }
}
`;

export const ScChessPgn = Styled.div`
  color: white;
`;
