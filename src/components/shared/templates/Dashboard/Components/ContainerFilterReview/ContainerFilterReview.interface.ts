export interface IContainerPropsReview {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close?: boolean;
  chartDatePicker: number;
  setChartDatePicker: React.Dispatch<React.SetStateAction<number>>;
}
