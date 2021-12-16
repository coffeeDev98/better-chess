import styled, { css } from "styled-components";

const chessboardEditorSidePanelStyle = css`
  background-color: #2b2b34;
  width: 386px;
  border-radius: 0px 16px 16px 0px;
`;

export const ScChessSidePanel = styled.div<{
  editorMode: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ editorMode }) => editorMode && chessboardEditorSidePanelStyle}
`;

export const GamePlayPanel1 = styled.div`
  div {
    padding: 14px;
    cursor: pointer;
  }
`;
export const GamePlayPanel2 = styled.div`
  div {
    padding: 14px;
    cursor: pointer;
  }
`;

export const ScChessHistoryPanel = styled.div`
  position: relative;
  /* width: 176px; */
  /* height: 242px; */
  background: #2b2b34;
  border: 1.46px solid #424242;
  box-sizing: border-box;
  padding: 10px 0px;
  .title {
    display: flex;
    margin-left: 10px;
    img {
      margin-right: 3px;
    }
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 11px;
  }
  .pgn-section {
    width: 100%;
    padding: 10px;
    /* .error {
      display: none;
      height: 0px;
    }
    .outerBoard {
      display: none;
      height: 0px; 
    }*/
    .moves {
      color: white;
      font-size: 10px;
      move-number {}
      move {
        color: white;
      }
    }
    .comment {
      .commentRadio {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 0px;
          margin-right: 12px;
        }
      }
    }
  }
`;

export const ScSidePanelNav = styled.div`
  position: relative;
  /* bottom: -52px; */
  bottom: -1px;
  left: -1.46px;
  /* width: 176px; */
  height: 51px;
  background: #2b2b34;
  border: 1.46px solid #424242;
  /* border-top: 0px; */
  border-bottom: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 13.14px;
  img {
    cursor: pointer;
  }
`;

export const EditorSidePanel = styled.div`
  padding: 26px;
  height: 100%;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
  .divider {
    width: 100%;
    height: 0.5px;
    background: #ffffff;
    opacity: 0.1;
    margin: 13.5px 0;
    margin-bottom: 156px;
  }
  .slider {
    width: 100%;
    height: 32px;
    background: #e8edf9;
    border-radius: 10px;
    display: flex;
    /* margin-bottom: 156px; */
    div {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: #ffffff;
    opacity: 0.4;
  }
  .input-fen {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
    input {
      width: 100%;
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
    overflow: hidden;
    margin-bottom: 24px;
    text-overflow: ellipsis;
  }
  .btn-panel {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      width: 32%;
      height: 40px;
      color: #ffffff;
      font-weight: 600;
      font-size: 17px;
      line-height: 20px;
      background: #5656ff;
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-sizing: border-box;
      border-radius: 10px;
    }
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

export const ScPromotionModal = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2b2b34;
  padding: 10px;
  border-radius: 12px;
  z-index: 6;
  div:nth-child(odd) {
    background: #b7c0d8;
  }
  div:nth-child(even) {
    background: #e8edf9;
  }
  div {
    margin: 2px;
    border-radius: 12px;
    img {
      cursor: pointer;
      padding: 8px 10px;
      width: 26px;
      height: 28px;
    }
  }
`;

export const ScChessInterface = styled.div<{
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
    position: relative;
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
          props.dimension ? `${props.dimension - 130}px` : "0px"};

        /* background:grey; */
      }
      .white-spare-pieces {
        left: ${(props) =>
          props.dimension ? `${props.dimension + 32}px` : "0px"};
        bottom: ${(props) =>
          props.dimension ? `${props.dimension - 190}px` : "0px"};
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

// export const ScChessPgn = styled.div`
//   color: white;
// `;
