export interface IHistoryChatStyled {
  focusedChats?: boolean;
}
export interface IChatHistoryProps {
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
}
