import { RtmChannel } from "agora-rtm-sdk";

export interface IMultiplayerProps {
  channel: RtmChannel | undefined | null;
  playerMeta: {
    uid: string;
    token: string;
  };
  sendChannelMessage: any;
}
