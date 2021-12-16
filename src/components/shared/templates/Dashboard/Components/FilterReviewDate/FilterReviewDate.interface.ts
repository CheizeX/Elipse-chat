export interface IPropsFilterReviewButton {
  children?: React.ReactNode;
  focusRadio?: boolean;
}
export interface IPropsComponent {
  chartDatePicker: number;
  setChartDatePicker: React.Dispatch<React.SetStateAction<number>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export enum DatePicker {
  CURRENT_WEEK = 'currentWeek',
  CURRENT_MONTH = 'currentMonth',
  LAST_MONTH = 'lastMonth',
}
