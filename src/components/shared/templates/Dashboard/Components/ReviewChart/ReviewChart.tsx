import { FC, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';

import { Text } from '../../../../atoms/Text/Text';
import {
  StyledReviewChart,
  StyledReviewChatsHeader,
  StyledChart,
} from './ReviewChart.styled';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { readReviewChats } from '../../../../../../api/chat';
import { setReviewChatsFinished } from '../../../../../../redux/slices/dashboard/dashboard-review';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { IPropsReview } from './ReviewChart.interface';

export const ReviewChart: FC<IPropsReview> = ({
  isDisableReview,
  setIsDisableReview,
}) => {
  const { reviewChats, reviewByAgent } = useAppSelector(
    (state) => state.review.chatContainerReviewState,
  );

  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const readReview = async () => {
    try {
      const currentDts = await readReviewChats();
      if (currentDts.success === false) {
        dispatch(setReviewChatsFinished([]));
      } else {
        dispatch(setReviewChatsFinished(currentDts));
      }
      setIsDisableReview(true);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleResetAll = () => {
    readReview();
  };
  useEffect(() => {
    readReview();
  }, []);

  const weekdays = [
    { id: 2, day: 'Lunes' },
    { id: 3, day: 'Martes' },
    { id: 4, day: 'Miercoles' },
    { id: 5, day: 'Jueves' },
    { id: 6, day: 'Viernes' },
    { id: 7, day: 'Sabado' },
  ];
  const dataReview = reviewChats?.map((item, index) => {
    return {
      id: item._id,
      day: weekdays[index]?.day,
      Satisfactorio: item.satisfactory,
      Insatisfactorio: item.unsatisfactory,
    };
  });

  return (
    <StyledReviewChart>
      <StyledReviewChatsHeader>
        <Text>
          {!isDisableReview
            ? `Chats finalizados de ${reviewByAgent}`
            : 'Chats finalizados por semana'}
        </Text>
        <button
          type="button"
          onClick={handleResetAll}
          disabled={isDisableReview}>
          <BadgeMolecule
            leftIcon={() => <SVGIcon iconFile="/icons/bars-graphic.svg" />}>
            <Text>Todos</Text>
          </BadgeMolecule>
        </button>
      </StyledReviewChatsHeader>
      <StyledChart>
        <ResponsiveBar
          data={dataReview}
          keys={['Satisfactorio', 'Insatisfactorio']}
          indexBy="day"
          margin={{ top: 30, right: 130, bottom: 45, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          enableGridX
          enableLabel={false}
          colors={{ scheme: 'purpleRed_green' }}
          defs={[
            {
              id: '1',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: '2',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'fries',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'sandwich',
              },
              id: 'lines',
            },
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={14}
          labelSkipHeight={14}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          // barAriaLabel={function (e) {
          //   return `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`;
          // }}
        />
      </StyledChart>
    </StyledReviewChart>
  );
};
