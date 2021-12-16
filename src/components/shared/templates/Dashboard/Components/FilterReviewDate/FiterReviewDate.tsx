import React, { useState } from 'react';
import {
  StyledWrapper,
  WrapperReview,
  StyledLabelReview,
  StyledTabsHeadersReview,
  StyledContainerRadioReview,
  StyledRadioReview,
} from './FilterReviewDate.styled';
import { Text } from '../../../../atoms/Text/Text';
import {
  IPropsComponent,
  IPropsFilterReviewButton,
} from './FilterReviewDate.interface';
import { readReviewChats } from '../../../../../../api/chat';
import { setReviewChatsFinished } from '../../../../../../redux/slices/dashboard/dashboard-review';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const FilterReviewDate = ({
  children,
  setChartDatePicker,
  setClose,
}: IPropsFilterReviewButton & IPropsComponent) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(0);

  const childrenList = React.Children.toArray(children);

  const tabs = childrenList.map((child, index) => {
    const title = (child as React.ReactElement).props.title ?? index.toString();

    const handleDatePicker = async (id: number) => {
      setActive(id);
      try {
        if (id === 0) {
          const currentDts = await readReviewChats('0', 'currentWeek');
          dispatch(setReviewChatsFinished(currentDts));
          setClose(true);
        } else if (id === 1) {
          const currentMonth = await readReviewChats('0', 'currentMonth');
          dispatch(setReviewChatsFinished(currentMonth));
          setClose(true);
        } else if (id === 2) {
          const lastMonth = await readReviewChats('0', 'lastMonth');
          dispatch(setReviewChatsFinished(lastMonth));
          setClose(true);
        } else {
          setChartDatePicker(1);
        }
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `${err}`,
        });
      }
    };
    return (
      <WrapperReview key={index.toString()}>
        <StyledContainerRadioReview focusRadio={active === index}>
          <StyledRadioReview
            focusRadio={active === index}
            key={title + index.toString()}
            onClick={() => handleDatePicker(index)}
          />
        </StyledContainerRadioReview>
        <StyledLabelReview focusRadio={active === index}>
          <Text>{title}</Text>
        </StyledLabelReview>
      </WrapperReview>
    );
  });

  return (
    <StyledWrapper>
      <StyledTabsHeadersReview>{tabs}</StyledTabsHeadersReview>
    </StyledWrapper>
  );
};
