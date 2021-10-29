import { stringifyJSON } from "./utils";
import { RtmTextMessage } from "agora-rtm-sdk";

const messageParser = (json: any): RtmTextMessage => ({
  text: stringifyJSON(json),
  messageType: "TEXT",
});

const agoraUtils = {
  messageParser,
};

export default agoraUtils;
