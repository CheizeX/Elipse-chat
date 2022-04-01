export interface IPropsContactsHeader {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
