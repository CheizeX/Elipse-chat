export interface IPropsByPeriod {
  setDatePicker: React.Dispatch<React.SetStateAction<number>>;
  datePicker?: number;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close?: boolean;
}
