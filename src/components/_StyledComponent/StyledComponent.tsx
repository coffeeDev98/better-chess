import Styled from "styled-components";

export const ScChessInterface = Styled.div`
  display: grid;
  width: 100%;
  max-width: 1440px;
  background: black;
  grid-template-columns: 66% 37%;
  grid-template-areas: "board sidePanel";
  .board-container {
    position:relative;
    grid-area: board;
    border: 10px solid rgba(255, 255, 255);

    div { 
      div[class$="-spare-pieces"]{
        position: absolute;
        width: 536px;
        display: flex;
        justify-content: space-around;
          div{
            width: 100%;
            img {
              width: 45px ;
              height: 47.28px ;
            }
        }
      }
      .black-spare-pieces {
        left: 930px;
        /* background:grey; */
      }
      .white-spare-pieces{
        left: 930px;
        bottom: 697.5px;
        /* background:grey; */
        
      }
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

export const ScChessPgn = Styled.div`
  color: white;
`;
