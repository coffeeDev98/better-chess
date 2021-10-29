import Styled from "styled-components";

export const ScChessInterface = Styled.div`
  display: grid;
  width: 100%;
  max-width: 1440px;
  background: black;
  grid-template-columns: 66% 37%;
  grid-template-areas: "board sidePanel";
  .board-container {
    grid-area: board;
    border: 10px solid rgba(255, 255, 255);
  }
  }
  .side-panel {
    grid-area: sidePanel;
    width: 100%;
    height: 100%;
    background: #2b2b34;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 24px 24px 0;
  }
`;
