import AgoraRTM, {
  RtmChannel,
  RtmClient,
  RtmMessage,
  RtmTextMessage,
} from "agora-rtm-sdk";
import axios from "axios";
import { useEffect, useState } from "react";
import { parseJSON } from "../utils/utils";
import agoraUtils from "../utils/agoraUtils";

const useAgora = () => {
  const [channel, setChannel] = useState<RtmChannel | null>(null);
  const appId = "f4b36b6c897e41bfaa3904d75da40777";
  const client: RtmClient | null = AgoraRTM.createInstance(appId);
  let playerMeta = {
    uid: (Math.floor(Math.random() * 90000) + 10000).toString(),
    token: "",
  };

  useEffect(() => {
    const playerLogin = async () => {
      axios
        .get(
          `https://agoratokenserver-demo.herokuapp.com/access_token?channel=test&uid=${playerMeta.uid}`
        )
        .then((res: any) => {
          console.log(res);
          playerMeta.token = res.data?.token || "";
          // console.log("LOGIN OPTIONS: ", playerMeta);
          client.login(playerMeta).then(() => {
            console.log("Login successful");
            const newChannel = client.createChannel("test");
            newChannel.join();
            setChannel(newChannel);
          });
        });
    };

    playerLogin().then(() => {
      console.log("integrations successful");
    });
  }, []);

  useEffect(() => {
    if (channel) {
      // channel?.on("ChannelMessage", (message: any) => {
      //   const data = parseJSON(message.text);
      //   console.log("MESSAGE DATA: ", data);
      // });

      channel?.on("MemberJoined", (memberId) => {
        console.log("New member joined: ", memberId);
      });
      channel?.on("MemberLeft", (memberId) => {
        console.log("Member left: ", memberId);
      });
    }
  }, [channel]);

  const sendChannelMessage = (data: any, type: string) => {
    const message = {
      uid: playerMeta.uid,
      json: data,
      type: type,
    };
    console.log(agoraUtils.messageParser(message));
    channel?.sendMessage(agoraUtils.messageParser(message)).then(() => {});
  };

  return { channel, playerMeta, sendChannelMessage };
};

export default useAgora;
