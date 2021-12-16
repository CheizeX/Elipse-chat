import { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { AgentToTransfer } from '../AgentToTransfer/AgentToTransfer';
import {
  StyledChatTransfer,
  StyledChatTransferHeader,
  StyledChatTransferBodySection,
  StyledContainerAgents,
  StyledCardAgentAvailable,
  StyledChatTransferFooter,
} from './ChatTransfer.styled';
import { IChatTransfer } from './ChatTransfer.interface';
import { UserStatus } from '../../../../../../models/users/status';
import { readingUsers } from '../../../../../../api/users';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { setUserToTransferById } from '../../../../../../redux/slices/live-chat/user-selected-to-transfer-by-id';
import { setDataUser } from '../../../../../../redux/slices/users/user-management';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const ChatTransfer: FC<IChatTransfer> = ({
  setLiveChatModal,
  setLiveChatPage,
  setAgentTransfer,
}) => {
  const dispatch = useAppDispatch();
  const toasts = useToastContext();
  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  const { usersData } = useAppSelector((state) => state.users.useQueryState);

  const [searchAgent, setSearchAgent] = useState<string>('');
  const [agentToTransfer, setAgentToTransfer] = useState<string>('');

  const getAgentAvailable = useCallback(async () => {
    try {
      const result = await readingUsers(UserStatus.AVAILABLE);
      if (result.success === false) {
        dispatch(setDataUser([]));
      } else {
        dispatch(setDataUser(result));
      }
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'Error!',
        message: `${error}`,
      });
    }
  }, []);

  useEffect(() => {
    getAgentAvailable();
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAgent(event.target.value);
  };

  const dateAgentAvailable = useMemo(() => {
    if (!searchAgent) return usersData;
    return usersData.filter((agent) =>
      agent.name.toLowerCase().includes(searchAgent.toLowerCase()),
    );
  }, [usersData, searchAgent]);

  const handleClick = (name: string, id: string) => {
    setAgentToTransfer(id);
    setAgentTransfer(name);
    dispatch(setUserToTransferById(id));
  };

  return (
    <StyledChatTransfer>
      <StyledChatTransferHeader>
        <Text>Transferir chat</Text>
        <button type="button" onClick={() => setLiveChatModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledChatTransferHeader>
      <StyledChatTransferBodySection>
        <div>
          <ContainerInput
            setFocus={() => null}
            LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
            placeHolder="Buscar agente..."
            onChange={onChange}
          />
          <StyledContainerAgents>
            {dateAgentAvailable
              ?.filter((item) => item._id !== userDataInState._id)
              .map(({ name, _id }) => (
                <StyledCardAgentAvailable
                  key={_id}
                  setAgentTransfer={setAgentTransfer}
                  setLiveChatPage={setLiveChatPage}
                  setLiveChatModal={setLiveChatModal}
                  focusedAgents={_id === agentToTransfer}
                  onClick={() => handleClick(name, _id)}>
                  <span>
                    <SVGIcon iconFile="/icons/unknown_user.svg" />
                  </span>
                  <span>{name}</span>
                </StyledCardAgentAvailable>
              ))}
          </StyledContainerAgents>
        </div>
        <div>
          {dateAgentAvailable
            ?.filter((item) => item._id === agentToTransfer)
            .map(({ name, _id, tags }) => (
              <>
                <AgentToTransfer key={_id} name={name} tag={tags} />
              </>
            ))}
        </div>
      </StyledChatTransferBodySection>
      <StyledChatTransferFooter>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setLiveChatModal(false)}
        />
        <ButtonMolecule
          text="Transferir"
          size={Size.MEDIUM}
          onClick={() => setLiveChatPage('ConfirmationTransfer')}
          state={
            agentToTransfer.length < 1
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledChatTransferFooter>
    </StyledChatTransfer>
  );
};
