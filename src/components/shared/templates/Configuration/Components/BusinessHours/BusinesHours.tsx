/* eslint-disable no-plusplus */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
import { FC, useCallback, useMemo, useState } from 'react';
import { ButtonMolecule, ButtonVariant } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import {
  setHour,
  setMinute,
  weekdaysForBusinessTimeObject,
} from '../../ConfigurationSection/ConfigurationSection.shared';
import {
  StyledSetBusinessTimeSetDayItem,
  StyledSetBusinessTimeDateAndHoursBody,
  StyledSetBusinessTimeDateAndHoursFooter,
  StyledSetBusinessTimeDateAndHoursHeader,
  StyledSetBusinessTimeDateAndHours,
  StyledBusinessHoursBodyWithoutSet,
  StyledBusinessHours,
  StyledBusinessHoursHeader,
  StyledSetBusinessTimeSetHourStartAndFinish,
  StyledSetSecondBusinessTimeSetHourStartAndFinish,
  StyledTimeControllerStart,
  StyledTimeControllerEnd,
  StyledSecondTimeControllerEnd,
  StyledSecondTimeControllerStart,
  StyledBusinessHoursBodySetted,
  StyledBusinessHoursBodySettedGroupedDays,
} from './BusinesHours.styled';
import { IconButtonMolecule } from '../../../../atoms/IconButton/IconButton';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { TimeController } from '../../../../molecules/TimeController/TimeController';

export const BusinessHours: FC = () => {
  const [modalBusinessTime, setModalBusinessTime] = useState(false);

  const [startTimeController, setStartTimeController] = useState(false);
  const [endTimeController, setEndTimeController] = useState(false);
  const [startSecondTimeController, setStartSecondTimeController] =
    useState(false);
  const [endSecondTimeController, setEndSecondTimeController] = useState(false);
  const [dayActive, setDayActive] = useState('');

  const [timeRestrictions, setTimeRestrictions] = useState({
    ...weekdaysForBusinessTimeObject,
  } as any);

  const businessHoursSetted = !Object.keys(timeRestrictions).every(
    (key) => timeRestrictions[key].isActive === false,
  );

  // --- LOGICA DE LOS HORARIOS ----------------------------------------------------------------------------------
  // Filtro los dias con horarios activos
  const filteredActiveDays = Object.keys(timeRestrictions)
    .filter((key) => timeRestrictions[key].isActive === true)
    .map((day) => timeRestrictions[day]);

  // Filtro los horarios activos consecutivos
  const filteredActiveDaysConsecutive = filteredActiveDays.filter(
    (day) =>
      ((day.id + 1 ===
        filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.id ||
        day.id - 1 ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.id) &&
        day.start.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.start.hour &&
        day.start.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.start
            .minute &&
        day.end.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.end.hour &&
        day.end.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.end.minute &&
        day.reStart.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.reStart
            .hour &&
        day.reStart.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.reStart
            .minute &&
        day.reEnd.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.reEnd.hour &&
        day.reEnd.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.reEnd
            .minute &&
        day.secondTime ===
          filteredActiveDays[filteredActiveDays.indexOf(day) + 1]
            ?.secondTime) ||
      (day.start.hour ===
        filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.start.hour &&
        day.start.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.start
            .minute &&
        day.end.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.end.hour &&
        day.end.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.end.minute &&
        day.reStart.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.reStart
            .hour &&
        day.reStart.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.reStart
            .minute &&
        day.reEnd.hour ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.reEnd.hour &&
        day.reEnd.minute ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.reEnd
            .minute &&
        day.secondTime ===
          filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.secondTime),
  );

  // Filtro los horarios activos No consecutivos
  const filteredActiveDaysNoConsecutive = filteredActiveDays.filter(
    (day) =>
      day.id + 1 !==
        filteredActiveDays[filteredActiveDays.indexOf(day) + 1]?.id &&
      day.id - 1 !==
        filteredActiveDays[filteredActiveDays.indexOf(day) - 1]?.id,
  );

  // Seteo la propiedad group para dividirlos segun los dias consecutivos
  const groupedDays = useMemo(() => {
    let idAnterior = 0;
    let groupDay = 0;
    return filteredActiveDaysConsecutive.map((day) => {
      if (idAnterior === 0) {
        idAnterior = day.id;
        return { ...day, group: ++groupDay };
      }
      if (idAnterior + 1 === day.id) {
        idAnterior = day.id;
        return { ...day, group: groupDay };
      }
      idAnterior = day.id;
      return { ...day, group: ++groupDay };
    });
  }, [filteredActiveDaysConsecutive]);

  // Divido el objeto en grupos de dias consecutivos
  const groupedDaysDivided = useMemo(
    () =>
      groupedDays.reduce((acc, day) => {
        if (!acc[day.group]) {
          acc[day.group] = [];
        }
        acc[day.group].push(day);
        return acc;
      }, {} as any),
    [groupedDays],
  );

  // separo en subgrupos dentro de cada grupo, los dias que comparten los mismos horarios
  const groupedDaysDividedConsecutive = useMemo(
    () =>
      Object.keys(groupedDaysDivided).map((key) => {
        return groupedDaysDivided[key].filter(
          (day: any) =>
            groupedDaysDivided[key][0].start.hour === day.start.hour &&
            groupedDaysDivided[key][0].end.hour === day.end.hour &&
            groupedDaysDivided[key][0].reStart.hour === day.reStart.hour &&
            groupedDaysDivided[key][0].reEnd.hour === day.reEnd.hour &&
            groupedDaysDivided[key][0].start.minute === day.start.minute &&
            groupedDaysDivided[key][0].end.minute === day.end.minute &&
            groupedDaysDivided[key][0].reStart.minute === day.reStart.minute &&
            groupedDaysDivided[key][0].reEnd.minute === day.reEnd.minute &&
            groupedDaysDivided[key][0].secondTime === day.secondTime &&
            (day.id + 1 ===
              groupedDaysDivided[key][groupedDaysDivided[key].indexOf(day) + 1]
                ?.id ||
              day.id - 1 ===
                groupedDaysDivided[key][
                  groupedDaysDivided[key].indexOf(day) - 1
                ]?.id),
        );
      }),
    [groupedDaysDivided],
  );
  // FIN LOGICA HORARIOS ------------------------------------------------------------

  console.log('TIME RESTRICTINOS', timeRestrictions);
  console.log('filteredActiveDays', filteredActiveDays);

  console.log('groupedDays', groupedDays);
  console.log('groupedDaysMemo', groupedDaysDivided);

  console.log(
    'filteredActiveDaysNoConsecutive',
    filteredActiveDaysNoConsecutive,
  );
  console.log('groupedDaysDividedConsecutive', groupedDaysDividedConsecutive);

  const handleStartTimeController = useCallback(
    (startDay: string) => {
      setEndTimeController(false);
      setStartSecondTimeController(false);
      setEndSecondTimeController(false);
      setStartTimeController(!startTimeController);
      setDayActive(startDay);
    },
    [
      startTimeController,
      setEndTimeController,
      setStartTimeController,
      setEndSecondTimeController,
      setStartSecondTimeController,
    ],
  );

  const handleEndTimeController = useCallback(
    (endDay: string) => {
      setStartTimeController(false);
      setStartSecondTimeController(false);
      setEndSecondTimeController(false);
      setEndTimeController(!endTimeController);
      setDayActive(endDay);
    },
    [
      endTimeController,
      setEndTimeController,
      setStartTimeController,
      setEndSecondTimeController,
      setStartSecondTimeController,
    ],
  );

  const handleStartSecondTimeController = useCallback(
    (startDay: string) => {
      setEndTimeController(false);
      setStartTimeController(false);
      setEndSecondTimeController(false);
      setStartSecondTimeController(!startSecondTimeController);
      setDayActive(startDay);
    },
    [
      startSecondTimeController,
      setEndTimeController,
      setStartTimeController,
      setEndSecondTimeController,
      setStartSecondTimeController,
    ],
  );

  const handleEndSecondTimeController = useCallback(
    (endDay: string) => {
      setEndTimeController(false);
      setStartTimeController(false);
      setStartSecondTimeController(false);
      setEndSecondTimeController(!endSecondTimeController);
      setDayActive(endDay);
    },
    [
      endSecondTimeController,
      setEndTimeController,
      setStartTimeController,
      setStartSecondTimeController,
    ],
  );

  const onChangeHour = useCallback(
    (newTime: { hour: string; minute: string }, startOrFinish: string) => {
      if (startOrFinish === 'Start') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            start: setHour(newTime),
          },
        });
      }

      if (startOrFinish === 'End') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            end: setHour(newTime),
          },
        });
      }
      if (startOrFinish === 'Start' && startSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reStart: setHour(newTime),
          },
        });
      }

      if (startOrFinish === 'End' && endSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reEnd: setHour(newTime),
          },
        });
      }
    },
    [
      timeRestrictions,
      dayActive,
      endSecondTimeController,
      startSecondTimeController,
    ],
  );

  const onChangeMinute = useCallback(
    (
      newTime: {
        hour: string;
        minute: string;
      },
      indicator: string,
    ) => {
      if (indicator === 'Start') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            start: setMinute(newTime),
          },
        });
      }
      if (indicator === 'End') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            end: setMinute(newTime),
          },
        });
      }
      if (indicator === 'Start' && startSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reStart: setMinute(newTime),
          },
        });
      }
      if (indicator === 'End' && endSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reEnd: setMinute(newTime),
          },
        });
      }
    },
    [
      timeRestrictions,
      dayActive,
      startSecondTimeController,
      endSecondTimeController,
    ],
  );

  return (
    <>
      <StyledBusinessHours>
        <StyledBusinessHoursHeader>
          <Text>Horario de atención</Text>
          {businessHoursSetted && (
            <button type="button" onClick={() => setModalBusinessTime(true)}>
              <SVGIcon iconFile="/icons/pen.svg" />
            </button>
          )}
        </StyledBusinessHoursHeader>
        {!businessHoursSetted ? (
          <StyledBusinessHoursBodyWithoutSet>
            <SVGIcon iconFile="/icons/business-time-not.svg" />
            <Text color="#B2B2B2">
              No has establecido un Horario de atención.
            </Text>
          </StyledBusinessHoursBodyWithoutSet>
        ) : (
          <StyledBusinessHoursBodySetted>
            <StyledBusinessHoursBodySettedGroupedDays>
              {groupedDaysDividedConsecutive.map((day) => (
                <Text color="red" key={day}>
                  {day.length === 2 && `${day[0].name} y ${day[1].name}`}
                  {day.length > 2 &&
                    `${day[0].name} a ${day[day.length - 1].name}`}
                </Text>
                // <div>

                // </div>
              ))}
            </StyledBusinessHoursBodySettedGroupedDays>
          </StyledBusinessHoursBodySetted>
        )}

        {!businessHoursSetted && (
          <ButtonMolecule
            text="Establecer"
            onClick={() => setModalBusinessTime(true)}
          />
        )}
      </StyledBusinessHours>

      {modalBusinessTime && (
        <ModalMolecule
          isModal={modalBusinessTime}
          setModal={setModalBusinessTime}>
          <StyledSetBusinessTimeDateAndHours>
            <StyledSetBusinessTimeDateAndHoursHeader>
              <Text>Establecer horario de atención</Text>
              <button type="button" onClick={() => setModalBusinessTime(false)}>
                <SVGIcon iconFile="/icons/close.svg" />
              </button>
            </StyledSetBusinessTimeDateAndHoursHeader>
            <StyledSetBusinessTimeDateAndHoursBody>
              {Object.keys(weekdaysForBusinessTimeObject).map((day) => (
                <StyledSetBusinessTimeSetDayItem key={day}>
                  <div>
                    <Checkbox
                      checked={timeRestrictions[day].isActive}
                      onClick={() => {
                        setTimeRestrictions({
                          ...timeRestrictions,
                          [day]: {
                            ...timeRestrictions[day],
                            isActive: !timeRestrictions[day].isActive,
                          },
                        });
                      }}
                    />
                    <Text color="#b2b2b2">{day}</Text>
                  </div>

                  <StyledSetBusinessTimeSetHourStartAndFinish
                    selected={day}
                    dayActive={dayActive}
                    startTimeController={startTimeController}
                    endTimeController={endTimeController}>
                    <div>
                      <Text color="#2A2A2A">
                        Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                      </Text>
                      <ContainerInput
                        onClick={() => handleStartTimeController(day)}
                        onChange={() => null}
                        value={
                          timeRestrictions[day]?.start?.hour &&
                          `${timeRestrictions[day].start.hour}:${timeRestrictions[day].start.minute}`
                        }
                        LeftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}
                      />
                    </div>

                    {startTimeController && dayActive === day && (
                      <StyledTimeControllerStart>
                        <TimeController
                          onChangeHour={onChangeHour}
                          onChangeMinute={onChangeMinute}
                          selectedRestrictionStartTime={
                            timeRestrictions[day]?.start || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          selectedRestrictionEndTime={
                            timeRestrictions[day]?.end || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          startTimeController={startTimeController}
                          endTimeController={endTimeController}
                        />
                      </StyledTimeControllerStart>
                    )}

                    <div>
                      <Text color="#2A2A2A">
                        Hora fin
                        <Text color="#B2B2B2">(hh:mm)</Text>
                      </Text>
                      <ContainerInput
                        onClick={() => handleEndTimeController(day)}
                        onChange={() => {}}
                        value={
                          timeRestrictions[day]?.end?.hour &&
                          `${timeRestrictions[day].end.hour}:${timeRestrictions[day].end.minute}`
                        }
                        LeftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}
                      />
                    </div>

                    {endTimeController && dayActive === day && (
                      <StyledTimeControllerEnd>
                        <TimeController
                          onChangeHour={onChangeHour}
                          onChangeMinute={onChangeMinute}
                          selectedRestrictionStartTime={
                            timeRestrictions[day]?.start || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          selectedRestrictionEndTime={
                            timeRestrictions[day]?.end || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          startTimeController={startTimeController}
                          endTimeController={endTimeController}
                        />
                      </StyledTimeControllerEnd>
                    )}

                    <IconButtonMolecule
                      Icon={() => (
                        <SVGIcon iconFile="/icons/create-tag-button.svg" />
                      )}
                      color="#fafafa"
                      bgColor="transparent"
                      onClick={() =>
                        setTimeRestrictions({
                          ...timeRestrictions,
                          [day]: {
                            ...timeRestrictions[day],
                            secondTime: true,
                          },
                        })
                      }
                    />
                  </StyledSetBusinessTimeSetHourStartAndFinish>

                  {timeRestrictions[day].secondTime && (
                    <StyledSetSecondBusinessTimeSetHourStartAndFinish
                      selected={day}
                      dayActive={dayActive}
                      startSecondTimeController={startSecondTimeController}
                      endSecondTimeController={endSecondTimeController}>
                      <div>
                        <Text color="#2A2A2A">
                          Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                        </Text>
                        <ContainerInput
                          required
                          onClick={() => handleStartSecondTimeController(day)}
                          onChange={() => {}}
                          value={
                            timeRestrictions[day]?.reStart?.hour &&
                            `${timeRestrictions[day].reStart.hour}:${timeRestrictions[day].reStart.minute}`
                          }
                          LeftIcon={() => (
                            <SVGIcon iconFile="/icons/watch.svg" />
                          )}
                        />
                      </div>

                      <div>
                        <Text color="#2A2A2A">
                          Hora fin <Text color="#B2B2B2">(hh:mm)</Text>
                        </Text>
                        <ContainerInput
                          required
                          onClick={() => handleEndSecondTimeController(day)}
                          onChange={() => {}}
                          value={
                            timeRestrictions[day]?.reEnd?.hour &&
                            `${timeRestrictions[day].reEnd.hour}:${timeRestrictions[day].reEnd.minute}`
                          }
                          LeftIcon={() => (
                            <SVGIcon iconFile="/icons/watch.svg" />
                          )}
                        />

                        <SVGIcon color="red" iconFile="/icons/times.svg" />
                      </div>

                      <IconButtonMolecule
                        Icon={() => <SVGIcon iconFile="/icons/delete.svg" />}
                        color="#fafafa"
                        bgColor="transparent"
                        onClick={() =>
                          setTimeRestrictions({
                            ...timeRestrictions,
                            [day]: {
                              ...timeRestrictions[day],
                              secondTime: false,
                            },
                          })
                        }
                      />
                      {startSecondTimeController && dayActive === day && (
                        <StyledSecondTimeControllerStart>
                          <TimeController
                            onChangeHour={onChangeHour}
                            onChangeMinute={onChangeMinute}
                            selectedRestrictionStartTime={
                              timeRestrictions[day]?.reStart || {
                                hour: '00',
                                minute: '00',
                              }
                            }
                            selectedRestrictionEndTime={
                              timeRestrictions[day]?.reEnd || {
                                hour: '00',
                                minute: '00',
                              }
                            }
                            startTimeController={startSecondTimeController}
                            endTimeController={endSecondTimeController}
                          />
                        </StyledSecondTimeControllerStart>
                      )}
                      {endSecondTimeController && dayActive === day && (
                        <StyledSecondTimeControllerEnd>
                          <TimeController
                            onChangeHour={onChangeHour}
                            onChangeMinute={onChangeMinute}
                            selectedRestrictionStartTime={
                              timeRestrictions[day]?.reStart || {
                                hour: '00',
                                minute: '00',
                              }
                            }
                            selectedRestrictionEndTime={
                              timeRestrictions[day]?.reEnd || {
                                hour: '00',
                                minute: '00',
                              }
                            }
                            startTimeController={startSecondTimeController}
                            endTimeController={endSecondTimeController}
                          />
                        </StyledSecondTimeControllerEnd>
                      )}
                    </StyledSetSecondBusinessTimeSetHourStartAndFinish>
                  )}
                </StyledSetBusinessTimeSetDayItem>
              ))}
            </StyledSetBusinessTimeDateAndHoursBody>

            <StyledSetBusinessTimeDateAndHoursFooter>
              <ButtonMolecule
                text="Cancelar"
                variant={ButtonVariant.OUTLINED}
                onClick={() => setModalBusinessTime(false)}
              />
              <ButtonMolecule text="Establecer" />
            </StyledSetBusinessTimeDateAndHoursFooter>
          </StyledSetBusinessTimeDateAndHours>
        </ModalMolecule>
      )}
    </>
  );
};

// get server side props to get the restrictions of the business
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { businessId } = context.query;
//   const { data } = await getBusinessRestrictions({
//     businessId: businessId as string,
//   });

//   return {
//     props: {
//       timeRestrictions: data.businessRestrictions,
//     },
//   };
// };
