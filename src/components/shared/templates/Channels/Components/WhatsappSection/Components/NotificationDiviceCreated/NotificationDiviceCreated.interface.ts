export type INotificationProps = {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDivice: React.Dispatch<React.SetStateAction<boolean>>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
  handleClickQR: () => Promise<void>;
  setSelectedByComponentUnOfficialWhatsapp: React.Dispatch<
    React.SetStateAction<number>
  >;
};
