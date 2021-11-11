import React, { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  IconButtonMolecule,
  IconButtonState,
} from '../../../../atoms/IconButton/IconButton';
import {
  ChatInputDialogueProps,
  SelectedUserProps,
  TabProps,
  ILiveChatModalProps,
  DropZoneDisplayedProps,
  Emojis,
  PredefinidedTextsInterface,
  FindDialogueInChatInterface,
} from '../../ChatsSection/ChatsSection.interface';
import { DialoguesBox } from '../DiaolguesBox/DialoguesBox';
import {
  StyledChatsViewConversation,
  StyledFooterButtonsSelectedToConfirm,
  StyledFooterToChat,
  StyledChatsViewSelectedToConfirm,
  StyledHeaderChatsViewSelectedToConfirm,
  StyledPredefinidedTexts,
} from './ChatsViewSelectedToConfirm.styles';
import { UploadFiles } from '../UploadFiles/UploadFiles';
import { UploadableFile } from '../UploadFiles/UploadFiles.interface';
import { Message } from '../../../../../../models/chat/chat';
import { baseRestApi } from '../../../../../../api/base';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { preDefinedTextsObject } from '../../ChatsSection/ChatsSection.shared';
import { StyledEmojisContainer } from '../Emojis/Emojis.styled';
import { emojisDisplayedObject } from '../Emojis/Emojis.shared';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { setChatsToSendId } from '../../../../../../redux/slices/live-chat/chat-selected-to-send-id';
import { setChatToTransferById } from '../../../../../../redux/slices/live-chat/chat-selected-to-transfer-by-id';

export const ChatsViewSelectedToConfirm: FC<
  SelectedUserProps &
    TabProps &
    ILiveChatModalProps &
    ChatInputDialogueProps &
    UploadableFile &
    DropZoneDisplayedProps &
    Emojis &
    PredefinidedTextsInterface &
    FindDialogueInChatInterface
> = ({
  userSelected,
  setUserSelected,
  setActiveByDefaultTab,
  setLiveChatModal,
  setLiveChatPage,
  chatInputDialogue,
  setChatInputDialogue,
  dropZoneDisplayed,
  setDropZoneDisplayed,
  id,
  file,
  errors,
  emojisDisplayed,
  setEmojisDisplayed,
  showPredefinedTexts,
  setShowPredefinedTexts,
  // setFindDialogueInChat,

  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const showAlert = useToastContext();

  const dispatch = useAppDispatch();
  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );

  const [sendingMessage, setSendingMessage] = React.useState<boolean>(false);

  const [accessToken] = useLocalStorage('AccessToken', '');

  const chatToSetInConversation = chatsPendings?.find(
    (chat) => chat.client.clientId === userSelected,
  );
  const chatToSetInConversationId = chatToSetInConversation?._id;
  const chatToTalkWithUser = chatsOnConversation?.find(
    (chat) => chat.client.clientId === userSelected,
  );

  const chatToTalkWithUserId = chatToTalkWithUser?._id;
  const chatToTalkWithUserNumber = chatToTalkWithUser?.client.clientId;

  const handleSetUserToOnConversation = async () => {
    try {
      await baseRestApi.patch(
        `/chats/initConversation/${chatToSetInConversationId}`,
        {
          accessToken,
        },
      );

      setActiveByDefaultTab(1);
      setUserSelected(userSelected || '');
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }
  };

  const handleEnterToSendMessage = async (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      setChatInputDialogue('');
      const bodyObject: Message = {
        from: userDataInState.role,
        content: chatInputDialogue || '',
        contentType: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      try {
        if (chatToTalkWithUser?.channel === 'WhatsApp') {
          await baseRestApi.patch(
            `/whatsapp360/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
            bodyObject,
          );
        }
        if (chatToTalkWithUser?.channel === 'Messenger') {
          await baseRestApi.patch(
            `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
            bodyObject,
          );
        }
        if (chatToTalkWithUser?.channel === 'Instagram') {
          await baseRestApi.patch(
            `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
            bodyObject,
          );
        }
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `INIT-CONVERSATION-ERROR ${error}`,
        });
      }
    }
  };

  const handleClickToSendMessage = async () => {
    setChatInputDialogue('');
    const bodyObject: Message = {
      from: userDataInState.role,
      content: chatInputDialogue || '',
      contentType: 'TEXT',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      setSendingMessage(true);
      if (chatToTalkWithUser?.channel === 'WhatsApp') {
        await baseRestApi.patch(
          `/whatsapp360/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Messenger') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Instagram') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      setSendingMessage(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }
  };

  const handleClickToSendPredefinidedTexts = async (message: string) => {
    const bodyObject: Message = {
      from: userDataInState.role,
      content: message || '',
      contentType: 'TEXT',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      setShowPredefinedTexts(false);
      if (chatToTalkWithUser?.channel === 'WhatsApp') {
        await baseRestApi.patch(
          `/whatsapp360/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Messenger') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Instagram') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }
  };

  const handleFinishConversation = () => {
    setLiveChatModal(true);
    setLiveChatPage('EndChat');
    dispatch(setChatsToSendId(chatToTalkWithUserId || ''));
    setUserSelected('');
  };

  const handleTransferConversation = (modal: string, open: boolean) => {
    if (chatToTalkWithUserId) {
      setLiveChatPage(modal);
      setLiveChatModal(open);
      dispatch(setChatToTransferById(chatToTalkWithUserId || ''));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInputDialogue(e.target.value);
  };

  const handleClickHistoryChat = (open: boolean, pages: string) => {
    setLiveChatModal(open);
    setLiveChatPage(pages);
  };

  // const handleSowEmojisButtton = () => {
  //   setShowPredefinedTexts(false);
  //   setEmojisDisplayed(!emojisDisplayed);
  // };
  const handlePredefinedTexts = () => {
    setEmojisDisplayed(false);
    setShowPredefinedTexts(!showPredefinedTexts);
  };
  const handleDropZoneDisplayed = () => {
    setDropZoneDisplayed(true);
    setEmojisDisplayed(false);
    setShowPredefinedTexts(false);
  };

  // const handleFindDialogueInChat = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFindDialogueInChat(e.target.value);
  // };

  return (
    <StyledChatsViewSelectedToConfirm>
      <StyledHeaderChatsViewSelectedToConfirm>
        <div>
          {chatsOnConversation?.find(
            (chat) => chat.client.clientId === userSelected?.toString(),
          )?.client.profilePic ? (
            <img
              src={
                chatsOnConversation?.find(
                  (chat) => chat.client.clientId === userSelected?.toString(),
                )?.client.profilePic
              }
              alt="profile"
            />
          ) : (
            <SVGIcon iconFile="/icons/user.svg" />
          )}

          <span>
            <Text>Cliente</Text>
            {chatsOnConversation?.find(
              (chat) => chat.client.clientId === userSelected?.toString(),
            ) && (
              <Text>
                {chatsOnConversation?.find(
                  (chat) => chat.client.clientId === userSelected,
                )?.client.name || userSelected}
              </Text>
            )}
            {chatsPendings?.find(
              (chat) => chat.client.clientId === userSelected?.toString(),
            ) && (
              <Text>
                {chatsPendings?.find(
                  (chat) => chat.client.clientId === userSelected,
                )?.client.name || userSelected}
              </Text>
            )}
          </span>
          <button
            type="button"
            onClick={() => handleClickHistoryChat(true, 'HistoryChat')}>
            {/* <SVGIcon iconFile="/icons/list_icons.svg" /> */}
          </button>
        </div>
        {chatsOnConversation &&
          chatsOnConversation.find(
            (user) => user.client.clientId === userSelected?.toString(),
          ) && (
            <span>
              {/* este span es para que no se rompa cuando le saco el buscar mensaje */}
              <span />

              {/* <ContainerInput
                placeHolder="Buscar mensaje..."
                onChange={handleFindDialogueInChat}
                setFocus={() => null}
                LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
              /> */}
              <ButtonMolecule
                text="Transferir"
                onClick={() => handleTransferConversation('ChatTransfer', true)}
              />
              <ButtonMolecule
                text="Finalizar"
                onClick={handleFinishConversation}
              />
            </span>
          )}
      </StyledHeaderChatsViewSelectedToConfirm>
      {chatsOnConversation &&
        chatsOnConversation?.find(
          (user) => user.client.clientId === userSelected?.toString(),
        ) && (
          <StyledChatsViewConversation>
            <DialoguesBox
              userSelected={userSelected}
              setUserSelected={setUserSelected}
            />
            {dropZoneDisplayed ? (
              <UploadFiles
                id={id}
                file={file}
                errors={errors}
                setDropZoneDisplayed={setDropZoneDisplayed}
                dropZoneDisplayed={dropZoneDisplayed}
                setUserSelected={setUserSelected}
                userSelected={userSelected}
              />
            ) : null}
          </StyledChatsViewConversation>
        )}
      {chatsPendings &&
        chatsPendings?.find(
          (user) =>
            user.client.clientId.toString() === userSelected?.toString(),
        ) && (
          <StyledChatsViewConversation>
            <DialoguesBox
              userSelected={userSelected}
              setUserSelected={setUserSelected}
            />
          </StyledChatsViewConversation>
        )}
      {chatsPendings &&
      chatsPendings?.find(
        (user) => user.client.clientId.toString() === userSelected?.toString(),
      ) ? (
        <StyledFooterButtonsSelectedToConfirm>
          <ButtonMolecule
            text="Iniciar conversación"
            onClick={handleSetUserToOnConversation}
          />
          {/* <EmojisContainer
            setEmojisDisplayed={setEmojisDisplayed}
            emojisDisplayed={emojisDisplayed}
          /> */}
        </StyledFooterButtonsSelectedToConfirm>
      ) : (
        <StyledFooterToChat
          setEmojisDisplayed={setEmojisDisplayed}
          emojisDisplayed={emojisDisplayed}
          showPredefinedTexts={showPredefinedTexts}
          setShowPredefinedTexts={setShowPredefinedTexts}>
          <span>
            <StyledEmojisContainer
              setEmojisDisplayed={setEmojisDisplayed}
              emojisDisplayed={emojisDisplayed}>
              {emojisDisplayedObject &&
                emojisDisplayedObject.map((emoji) => (
                  <button
                    type="button"
                    key={emoji.id}
                    // onClick={() => handleEmojiClick(emoji.id)}
                  >
                    <span role="img" aria-label={emoji.id.toString()}>
                      {emoji.emoji}
                    </span>
                  </button>
                ))}
            </StyledEmojisContainer>
            <StyledPredefinidedTexts
              showPredefinedTexts={showPredefinedTexts}
              setShowPredefinedTexts={setShowPredefinedTexts}>
              {preDefinedTextsObject &&
                preDefinedTextsObject?.map((text) => (
                  <button
                    key={text.id}
                    type="button"
                    onClick={() => {
                      handleClickToSendPredefinidedTexts(text.text);
                    }}>
                    <SVGIcon iconFile="/icons/ray.svg" />
                    <Text color="gray" size="12px" key={text.text}>
                      {text.text}
                    </Text>
                  </button>
                ))}
            </StyledPredefinidedTexts>
            <button type="button" onClick={handleDropZoneDisplayed}>
              <SVGIcon iconFile="/icons/clipper.svg" />
            </button>
            {/* <button type="button" onClick={handleSowEmojisButtton}>
              <SVGIcon iconFile="/icons/emojis.svg" />
            </button> */}
            <button type="button" onClick={handlePredefinedTexts}>
              <SVGIcon iconFile="/icons/ray.svg" />
            </button>
          </span>
          <ContainerInput
            value={chatInputDialogue}
            onChange={handleInputChange}
            placeHolder="Enviar mensaje.."
            setFocus={() => null}
            LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleEnterToSendMessage(e)
            }
          />
          <IconButtonMolecule
            onClick={handleClickToSendMessage}
            state={
              // eslint-disable-next-line no-nested-ternary
              chatInputDialogue === ''
                ? IconButtonState.DISABLED
                : sendingMessage === true
                ? IconButtonState.LOADING
                : IconButtonState.NORMAL
            }
            Icon={() => <SVGIcon iconFile="/icons/paper_plane.svg" />}
          />
        </StyledFooterToChat>
      )}
    </StyledChatsViewSelectedToConfirm>
  );
};
