/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../atoms/Button/Button';
import { Text } from '../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../api/base';
import {
  StyledInputTypeNumber,
  StyledMaxConversations,
  StyledMaxConversationsBody,
  StyledMaxConversationsHeader,
} from './MaxConversations.styled';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { useAppSelector } from '../../../../../../../redux/hook/hooks';

export const MaxConversations: FC = () => {
  const showAlert = useToastContext();

  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const [maxChats, setMaxChats] = useState(
    String(userDataInState.maxChatsOnConversation),
  );
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    if (maxChats !== String(userDataInState.maxChatsOnConversation)) {
      try {
        await baseRestApi.patch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/setMaxChatsOnConversation`,
          {
            newMax: maxChats,
          },
        );
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'MÁXIMO ACTUALIZADO',
          message: `Se ha seteado el máximo de chats a ${maxChats}`,
        });
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR AL ACTUALIZAR',
          message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
        });
      }
    }
    setLoading(false);
  };

  return (
    <StyledMaxConversations>
      <StyledMaxConversationsHeader>
        <Text>Máximo de conversaciones por agente</Text>
      </StyledMaxConversationsHeader>
      <StyledMaxConversationsBody>
        <StyledInputTypeNumber
          type="number"
          name="max-conve"
          min="0"
          value={maxChats}
          onChange={(ev) => setMaxChats(ev.target.value)}
        />
        <ButtonMolecule
          type="button"
          onClick={handleClick}
          text="Establecer nuevo máximo"
          state={
            loading
              ? ButtonState.LOADING
              : maxChats === String(userDataInState.maxChatsOnConversation)
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledMaxConversationsBody>
    </StyledMaxConversations>
  );
};
