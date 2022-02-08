export interface IPropsChannelAdd {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  getChannelList: () => Promise<void>;
}
export interface IContainerWhatsApp {
  selectedByComponent: number;
}
