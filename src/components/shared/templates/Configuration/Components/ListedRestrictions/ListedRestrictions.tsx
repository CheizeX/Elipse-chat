/* eslint-disable no-nested-ternary */
import { FC, useState, useCallback } from 'react';
import {
  StyledLeftSideTimeRestrictions,
  StyledLeftSideTimeRestrictionsHeader,
  StyledLeftSideTimeRestrictionsHeaderChip,
  StyledLeftSideTimeRestrictionsBodyWithoutRestrictions,
  StyledCreateNewRestriction,
  StyledCreateNewRestrictionHeader,
  StyledCreateNewRestrictionFooter,
  StyledCreateNewRestrictionBody,
  StyledCreateNewRestrictionBodyAttention,
  StyledCreateNewRestrictionBodyInputs,
  StyledCreateNewRestrictionBodyButtonContainer,
  StyledDatePickerDateContainer,
  StyledLeftSideTimeRestrictionsBodyRestrictions,
  StyledLeftSideTimeRestrictionsHeaderChipMapped,
} from './ListedRestrictions.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ButtonMolecule, ButtonVariant } from '../../../../atoms/Button/Button';
import { ConfigSectionInterface } from '../../ConfigurationSection/ConfigurationSection.interface';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import {
  ToogleComponentForActivateRestriction,
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from '../../ConfigurationSection/ConfigurationSection.styled';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { SingleDatepicker } from '../../../../organisms/Datepicker/SingleDatepicker';
import { TimeController } from '../../../../molecules/TimeController/TimeController';
import {
  restrictinosFromTheBackend,
  setHour,
  setMinute,
} from '../../ConfigurationSection/ConfigurationSection.shared';
import {
  StyledEndTimeController,
  StyledStartTimeController,
} from '../../../../molecules/TimeController/TimeController.styled';

export const ListedRestrictionsLeft: FC<ConfigSectionInterface> = () => {
  const [sortedRestrictions, setSortedRestrictions] = useState<boolean>(false);
  const [modalNewRestriction, setModalNewRestriction] = useState(false);
  const [activeRestrictionWhenCreate, setActiveRestrictionWhenCreate] =
    useState(false);
  const [datePickerDate, setDatePickerDate] = useState(false);
  const [startTimeController, setStartTimeController] = useState(false);
  const [endTimeController, setEndTimeController] = useState(false);
  const [dateToEdit, setDateToEdit] = useState<Date | null>(null);

  const [selectedRestrictionDate, setSelectedRestrictionDate] =
    useState<Date | null>(null);

  // const [restrictionOnOff, setRestrictionOnOff] = useState<any[]>([]);
  const numberOfRestrictions = restrictinosFromTheBackend.length;
  console.log('RESTRICTIONS', restrictinosFromTheBackend);
  // console.log('ON/OFF', restrictionOnOff);
  const [selectedRestrictionStartTime, setSelectedRestrictionStartTime] =
    useState({
      hour: '00',
      minute: '00',
    });

  const [selectedRestrictionEndTime, setSelectedRestrictionEndTime] = useState({
    hour: '00',
    minute: '00',
  });

  const onChangeDate = (newDate: Date | null) => {
    setSelectedRestrictionDate(newDate);
  };

  const onChangeHour = (
    newTime: { hour: string; minute: string },
    startOrFinish: string,
  ) => {
    if (startOrFinish === 'Start') {
      setSelectedRestrictionStartTime(setHour(newTime));
      setSelectedRestrictionEndTime(setHour(newTime));
    }
    if (startOrFinish === 'End') {
      setSelectedRestrictionEndTime(setHour(newTime));
    }
  };

  const onChangeMinute = (
    newTime: {
      hour: string;
      minute: string;
    },
    indicator: string,
  ) => {
    if (indicator === 'Start') {
      setSelectedRestrictionStartTime(setMinute(newTime));
    }
    if (indicator === 'End') {
      setSelectedRestrictionEndTime(setMinute(newTime));
    }
  };

  const handleEditRestriction = useCallback(
    (
      restriction: Date,
      startTime: {
        hour: string;
        minute: string;
      },
      endTime: {
        hour: string;
        minute: string;
      },
      isActive: boolean,
    ) => {
      setDateToEdit(restriction);
      setSelectedRestrictionDate(restriction);
      setSelectedRestrictionStartTime(
        setHour({
          hour: startTime.hour,
          minute: startTime.minute,
        }),
      );
      setSelectedRestrictionEndTime(
        setHour({
          hour: endTime.hour,
          minute: endTime.minute,
        }),
      );
      setActiveRestrictionWhenCreate(isActive);
      setModalNewRestriction(true);
    },
    [],
  );

  const handleCloseModalNewOrEditRestriction = useCallback(() => {
    setModalNewRestriction(false);
    setDateToEdit(null);
    setSelectedRestrictionDate(null);
    setSelectedRestrictionStartTime({
      hour: '00',
      minute: '00',
    });
    setSelectedRestrictionEndTime({
      hour: '00',
      minute: '00',
    });
    setActiveRestrictionWhenCreate(false);
  }, []);

  const handleShowDatePicker = useCallback(() => {
    setDatePickerDate(!datePickerDate);
    setEndTimeController(false);
    setStartTimeController(false);
  }, [datePickerDate]);

  const handleStartTimeController = useCallback(() => {
    setStartTimeController(!startTimeController);
    setEndTimeController(false);
    setDatePickerDate(false);
  }, [startTimeController]);

  const handleEndTimeController = useCallback(() => {
    setEndTimeController(!endTimeController);
    setStartTimeController(false);
    setDatePickerDate(false);
  }, [endTimeController]);

  return (
    <StyledLeftSideTimeRestrictions>
      <StyledLeftSideTimeRestrictionsHeader>
        <span>
          <span>
            <Text color="#2A2A2A">Restricciones Horarias</Text>
            {numberOfRestrictions > 0 ? (
              <StyledLeftSideTimeRestrictionsHeaderChipMapped>
                <Text>{numberOfRestrictions}</Text>
              </StyledLeftSideTimeRestrictionsHeaderChipMapped>
            ) : (
              <StyledLeftSideTimeRestrictionsHeaderChip>
                <Text>{numberOfRestrictions}</Text>
              </StyledLeftSideTimeRestrictionsHeaderChip>
            )}
          </span>
          <div>
            <button
              type="button"
              onClick={() => setSortedRestrictions(!sortedRestrictions)}>
              <SVGIcon iconFile="/icons/sidebar_disponibilidad.svg" />
              {sortedRestrictions ? (
                <SVGIcon iconFile="/icons/upArrow.svg" />
              ) : (
                <SVGIcon iconFile="/icons/downArrow.svg" />
              )}
            </button>
            <button type="button">
              {/* <SVGIcon iconFile="/icons/filter.svg" /> */}
            </button>
          </div>
        </span>
        <span>
          <ButtonMolecule
            bgColor="#878787"
            type="button"
            text="Nueva restricción"
            onClick={() => setModalNewRestriction(true)}
          />
        </span>
      </StyledLeftSideTimeRestrictionsHeader>

      {numberOfRestrictions === 0 ? (
        <StyledLeftSideTimeRestrictionsBodyWithoutRestrictions>
          <div>
            <SVGIcon iconFile="/icons/icon_expired_invitation.svg" />
            <Text color="#B2B2B2">
              No has creado restricciones horarias todavía.
            </Text>
          </div>
        </StyledLeftSideTimeRestrictionsBodyWithoutRestrictions>
      ) : (
        <StyledLeftSideTimeRestrictionsBodyRestrictions>
          <div>
            <Text>Estado</Text>
            <Text>Fecha</Text>
            <Text>Hora Inicio</Text>
            <Text>Hora Fin</Text>
            <Text>Opciones</Text>
          </div>
          <section>
            {restrictinosFromTheBackend
              .sort((a, b) => {
                if (sortedRestrictions) {
                  return a.date > b.date ? 1 : -1;
                }
                return a.date < b.date ? 1 : -1;
              })
              .map((restriction) => (
                <div key={restriction.id}>
                  {Number(restriction.date) >= Date.now() ? (
                    <div>Vigente</div>
                  ) : (
                    <span>Caducada</span>
                  )}
                  <div>
                    {Number(
                      new Intl.DateTimeFormat('es-ES', {
                        day: 'numeric',
                      }).format(restriction.date),
                    ) > 9
                      ? new Intl.DateTimeFormat('es-ES', {
                          day: 'numeric',
                        }).format(restriction.date)
                      : `0${new Intl.DateTimeFormat('es-ES', {
                          day: 'numeric',
                        }).format(restriction.date)}`}{' '}
                    {`${
                      new Intl.DateTimeFormat('es-ES', {
                        month: 'long',
                      })
                        .format(restriction.date)
                        // make upper case first letter
                        .charAt(0)
                        .toUpperCase() +
                      new Intl.DateTimeFormat('es-ES', {
                        month: 'long',
                      })
                        .format(restriction.date)
                        .slice(1)
                    }`}{' '}
                    {new Intl.DateTimeFormat('es-ES', {
                      year: 'numeric',
                    }).format(restriction.date)}
                  </div>

                  <div>
                    {restriction.start.hour}:{restriction.start.minute}
                  </div>
                  <div>
                    {restriction.end.hour}:{restriction.end.minute}
                  </div>
                  <div>
                    {Number(restriction.date) >= Date.now() && (
                      <>
                        <span>
                          {restriction.isActive ? (
                            <ToogleComponentForMappedRestrictions
                              onClick={() => {}}>
                              <div />
                            </ToogleComponentForMappedRestrictions>
                          ) : (
                            <ToogleComponentForMappedRestrictionsNoSel
                              onClick={() => {}}>
                              <div />
                            </ToogleComponentForMappedRestrictionsNoSel>
                          )}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleEditRestriction(
                              restriction.date,
                              {
                                hour: restriction.start.hour,
                                minute: restriction.start.minute,
                              },
                              {
                                hour: restriction.end.hour,
                                minute: restriction.end.minute,
                              },
                              restriction.isActive,
                            )
                          }>
                          <SVGIcon iconFile="/icons/pen.svg" />
                        </button>
                      </>
                    )}
                    <button type="button">
                      <SVGIcon iconFile="/icons/delete.svg" />
                    </button>
                  </div>
                </div>
              ))}
          </section>
        </StyledLeftSideTimeRestrictionsBodyRestrictions>
      )}

      {modalNewRestriction && (
        <ModalMolecule
          isModal={modalNewRestriction}
          setModal={setModalNewRestriction}>
          <StyledCreateNewRestriction>
            <StyledCreateNewRestrictionHeader>
              {dateToEdit ? (
                <Text>Editar restricción</Text>
              ) : (
                <Text>Crear nueva restricción</Text>
              )}
              <button
                type="button"
                onClick={() => handleCloseModalNewOrEditRestriction()}>
                <SVGIcon iconFile="/icons/close.svg" />
              </button>
            </StyledCreateNewRestrictionHeader>
            <StyledCreateNewRestrictionBody>
              <StyledCreateNewRestrictionBodyAttention>
                <div>
                  <SVGIcon iconFile="/icons/warning.svg" />
                  <Text>Importante</Text>
                </div>
                <Text color="#999999">
                  Las horas de inicio y de fin de la restricción deben
                  considerar los valores mínimos y máximos definidos en tu
                  horario de atención.
                </Text>
              </StyledCreateNewRestrictionBodyAttention>
              <StyledCreateNewRestrictionBodyInputs
                datePickerDate={datePickerDate}
                selectedRestrictionDate={selectedRestrictionDate}
                startTimeController={startTimeController}
                endTimeController={endTimeController}>
                <div>
                  <Text color="#2A2A2A">
                    Fecha <Text color="#B2B2B2">(dd/mm/yyyy)</Text>
                  </Text>
                  <ContainerInput
                    required
                    onClick={handleShowDatePicker}
                    onChange={() => onChangeDate}
                    value={
                      selectedRestrictionDate
                        ? selectedRestrictionDate.toLocaleDateString()
                        : ''
                    }
                    LeftIcon={() => (
                      <SVGIcon iconFile="/icons/candelar_alt.svg" />
                    )}
                  />
                </div>

                <div>
                  <Text color="#2A2A2A">
                    Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                  </Text>
                  <ContainerInput
                    setFocus={() => false}
                    onClick={handleStartTimeController}
                    onChange={() => onChangeHour}
                    value={
                      `${selectedRestrictionStartTime.hour}:${selectedRestrictionStartTime.minute}` ||
                      ''
                    }
                    LeftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}
                  />
                </div>

                <div>
                  <Text color="#2A2A2A">
                    Hora fin <Text color="#B2B2B2">(hh:mm)</Text>
                  </Text>
                  <ContainerInput
                    setFocus={() => false}
                    onClick={handleEndTimeController}
                    onChange={() => onChangeHour}
                    LeftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}
                    value={`${selectedRestrictionEndTime.hour}:${selectedRestrictionEndTime.minute}`}
                  />
                </div>

                {datePickerDate && (
                  <StyledDatePickerDateContainer>
                    <SingleDatepicker
                      minDate={new Date()}
                      onChange={onChangeDate}
                    />
                    <ButtonMolecule
                      text="Aceptar"
                      onClick={() => setDatePickerDate(false)}
                    />
                  </StyledDatePickerDateContainer>
                )}

                {startTimeController && (
                  <StyledStartTimeController>
                    <TimeController
                      onChangeHour={onChangeHour}
                      onChangeMinute={onChangeMinute}
                      selectedRestrictionStartTime={
                        selectedRestrictionStartTime
                      }
                      selectedRestrictionEndTime={selectedRestrictionEndTime}
                      startTimeController={startTimeController}
                      endTimeController={endTimeController}
                    />
                  </StyledStartTimeController>
                )}

                {endTimeController && (
                  <StyledEndTimeController>
                    <TimeController
                      onChangeHour={onChangeHour}
                      onChangeMinute={onChangeMinute}
                      selectedRestrictionStartTime={
                        selectedRestrictionStartTime
                      }
                      selectedRestrictionEndTime={selectedRestrictionEndTime}
                      startTimeController={startTimeController}
                      endTimeController={endTimeController}
                    />
                  </StyledEndTimeController>
                )}

                <StyledCreateNewRestrictionBodyButtonContainer>
                  <ToogleComponentForActivateRestriction
                    activeRestrictionWhenCreate={activeRestrictionWhenCreate}
                    onClick={() =>
                      setActiveRestrictionWhenCreate(
                        !activeRestrictionWhenCreate,
                      )
                    }>
                    <div />
                  </ToogleComponentForActivateRestriction>
                  <Text color="#2A2A2A" size="14px">
                    {' '}
                    Activar Restricción{' '}
                  </Text>
                </StyledCreateNewRestrictionBodyButtonContainer>
              </StyledCreateNewRestrictionBodyInputs>
            </StyledCreateNewRestrictionBody>
            <StyledCreateNewRestrictionFooter>
              <ButtonMolecule
                text="Cancelar"
                variant={ButtonVariant.OUTLINED}
                onClick={() => handleCloseModalNewOrEditRestriction()}
              />
              {dateToEdit ? (
                <ButtonMolecule text="Editar" />
              ) : (
                <ButtonMolecule text="Crear" />
              )}
            </StyledCreateNewRestrictionFooter>
          </StyledCreateNewRestriction>
        </ModalMolecule>
      )}
    </StyledLeftSideTimeRestrictions>
  );
};
