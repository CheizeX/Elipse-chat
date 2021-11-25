import { FC, useState } from 'react';
import { Agents } from '../Components/Agents/Agents';
import { IPropsAgents } from '../Components/Agents/Agents.interface';
import { DashTotalChatsByState } from '../Components/DashTotalChatsByState/DashTotalChatsByState';
import { ReviewChart } from '../Components/ReviewChart/ReviewChart';
import {
  StyledDashboardSection,
  WrapperSection,
} from './DashboardSection.styled';

export const DashboardSection: FC<IPropsAgents> = () => {
  const [datePicker, setDatePicker] = useState<number>(0);
  const [close, setClose] = useState(false);
  const [onClose, setOnClose] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isDisableReview, setIsDisableReview] = useState<boolean>(false);

  return (
    <StyledDashboardSection>
      <DashTotalChatsByState close={close} setClose={setClose} />
      <WrapperSection>
        <ReviewChart
          isDisableReview={isDisableReview}
          setIsDisableReview={setIsDisableReview}
        />
        <Agents
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          datePicker={datePicker}
          setDatePicker={setDatePicker}
          close={onClose}
          setClose={setOnClose}
          isDisableReview={isDisableReview}
          setIsDisableReview={setIsDisableReview}
        />
      </WrapperSection>
    </StyledDashboardSection>
  );
};
