export interface IPropsConfirmationQR {
  checkedConfirmation: boolean;
}

export interface IPropsComponentQR {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedByComponent: React.Dispatch<React.SetStateAction<number>>;
  isChecked: boolean;
}
