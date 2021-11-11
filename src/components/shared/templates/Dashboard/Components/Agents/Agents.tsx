import { FC, useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Dropdown } from '../../../../atoms/Dropdown/Dropdown';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import {
  StyledWrapperAgent,
  StyledHeaderAgent,
  StyledAgent,
} from './Agents.styled';
import { IPropsAgents } from './Agents.interface';
import { FilterDateDashboard } from '../FilterDate/FilterDate';
import { FIlterByPeriod } from '../FIlterByPeriod/FIlterByPeriod';
import { Chat, ChatStatus } from '../../../../../../models/chat/chat';
import { setDataUser } from '../../../../../../redux/slices/users/user-management';
import { readingUsers } from '../../../../../../api/users';
import { UserStatus } from '../../../../../../models/users/status';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const Agents: FC<IPropsAgents> = ({
  setDatePicker,
  datePicker,
  setClose,
  close,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const { chatsByPeriod } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );
  const { usersData } = useAppSelector((state) => state.users.useQueryState);
  const { dateName } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );

  const dataApi = async () => {
    try {
      const currentDta = await readingUsers(UserStatus.ALL);
      if (currentDta.success === false) {
        dispatch(setDataUser([]));
      } else {
        dispatch(setDataUser(currentDta));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleClick = () => {
    setClose(false);
  };

  useEffect(() => {
    dataApi();
  }, []);

  return (
    <StyledWrapperAgent>
      <StyledHeaderAgent close={close}>
        <Text>Chats finalizados</Text>
        <Dropdown
          onClick={() => handleClick()}
          triggerElement={() => (
            <BadgeMolecule
              leftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}
              rightIcon={() =>
                close ? (
                  <SVGIcon iconFile="/icons/chevron-square-down.svg" />
                ) : (
                  <SVGIcon iconFile="/icons/chevron-square-up.svg" />
                )
              }>
              <Text>{dateName}</Text>
            </BadgeMolecule>
          )}>
          {datePicker === 0 && (
            <FilterDateDashboard
              key="tres"
              setDatePicker={setDatePicker}
              datePicker={datePicker}
              setClose={setClose}
            />
          )}
          {datePicker === 1 && (
            <FIlterByPeriod
              key="uno"
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setDatePicker={setDatePicker}
              datePicker={datePicker}
              setClose={setClose}
              close={close}
            />
          )}
          {datePicker === 2 && (
            <FIlterByPeriod
              key="dos"
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setDatePicker={setDatePicker}
              datePicker={datePicker}
              setClose={setClose}
              close={close}
            />
          )}
        </Dropdown>
      </StyledHeaderAgent>
      <span>
        <Text color="#2A2A2A">Agente</Text>
        <Text color="#2A2A2A">Cantidad</Text>
      </span>
      <div>
        <div>
          {usersData?.length > 0 &&
            usersData.map((user: any, index) => (
              <StyledAgent key={user._id} index={index}>
                <div>
                  <SVGIcon iconFile="/icons/unknown_user.svg" />
                  <span>{user.name}</span>
                </div>
                <div>
                  <span>
                    {chatsByPeriod?.filter(
                      (chat: Chat) =>
                        chat.status === ChatStatus.FINISHED &&
                        chat.assignedAgent &&
                        chat.assignedAgent._id === user._id,
                    ).length ?? 0}
                  </span>
                </div>
                {/* <button type="button">
                  <SVGIcon iconFile="/icons/bars-graphic.svg" />
                </button> */}
              </StyledAgent>
            ))}
        </div>
      </div>
    </StyledWrapperAgent>
  );
};
