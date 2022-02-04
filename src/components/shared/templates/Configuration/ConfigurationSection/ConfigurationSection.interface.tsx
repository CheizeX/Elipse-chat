import { MouseEventHandler } from '@nivo/pie';
import { Dispatch, SetStateAction } from 'react';

export interface ConfigSectionInterface {
  setSortedRestrictions?: Dispatch<SetStateAction<boolean>>;
  sortedRestrictions?: boolean;
  datePickerDate?: boolean;
  selectedRestrictionDate?: Date | null;
  startTimeController?: boolean;
  endTimeController?: boolean;
  startSecondTimeController?: boolean;
  endSecondTimeController?: boolean;
  startTimeDayController?: boolean;
  endTimeDayController?: boolean;
  activeRestrictionWhenCreate?: boolean;
  dayActive?: string;
  selected?: string;
}

export interface TimeControllerInterface {
  onChangeHour: (
    newTime: { hour: string; minute: string },
    startOrFinish: string,
  ) => void;
  onChangeMinute: (
    newTime: { hour: string; minute: string },
    startOrFinish: string,
  ) => void;
  selectedRestrictionStartTime: {
    hour: string;
    minute: string;
  };
  selectedRestrictionEndTime: {
    hour: string;
    minute: string;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
