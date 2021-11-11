export interface IContainerAgentProps {
  index?: number;
  close?: boolean;
}
export interface IPropsAgents {
  setDatePicker: React.Dispatch<React.SetStateAction<number>>;
  datePicker?: number;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close?: boolean;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  reviewByUser?: string;
  setReviewByUser?: React.Dispatch<React.SetStateAction<string>>;
}
