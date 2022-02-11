export interface IPropsChannelAdd {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  getChannelList: () => Promise<void>;
  whatsappUnOfficial: boolean;
}
export interface IContainerWhatsApp {
  selectedByComponent: number;
}
