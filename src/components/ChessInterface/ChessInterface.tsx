import React, { useEffect, useState } from "react";
import useAgora from "../../hooks/useAgora";
import Chessboard from "../Chessboard/Chessboard";
import { ScChessInterface } from "../_StyledComponent/StyledComponent";

interface Props {}

const ChessInterface = (props: Props) => {
  // const Agora = useAgora();
  // const AgoraChannel: RtmChannel | undefined | null = Agora.channel;
  // const Multiplayer = useChessMultiplayer({
  //   Agora: Agora,
  // });
  const [dimension, setDimension] = useState<number>();

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setDimension(
      window.document.getElementById("board-container")?.clientWidth
    );
  };

  return (
    <>
      <ScChessInterface>
        <div id="board-container" className="board-container">
          <Chessboard
            dimension={dimension}
            // Agora={Agora}
            // Multiplayer={Multiplayer}
          />
        </div>
        <div className="side-panel"></div>
      </ScChessInterface>
    </>
  );
};

export default ChessInterface;
