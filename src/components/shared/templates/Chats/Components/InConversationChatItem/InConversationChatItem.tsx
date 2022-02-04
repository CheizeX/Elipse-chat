/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-nested-ternary */
import React, { FC, useCallback } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Channels, Chat } from '../../../../../../models/chat/chat';
import {
  // StyledLabel,
  StyledClientAndAgentAvatars,
  StyledNameAndDialog,
  // StyledLabelsContainer,
} from '../PendingsChatItem/PendingsChatItem.styles';
import {
  TabProps,
  StyledLabelProps,
  SelectedUserProps,
  SortingProps,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
  ShowOnlyPaused,
  MessagesViewedOrNot,
  IPropsStringName,
} from '../../ChatsSection/ChatsSection.interface';
import {
  StyledInConversationChatItem,
  StyledInConversationContainer,
  StyledInConversationWrapper,
  StyledTimeAndState,
} from './InConversationChatItem.styles';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import {
  setSortedByLastDate,
  setSortedByFirstDate,
} from '../../../../../../redux/slices/live-chat/on-conversation-chats';
// import { Tag } from '../../../../../../models/tags/tag';
import { readHistoryChat } from '../../../../../../api/chat';
import {
  setChatsHasHistory,
  setChatsIdChannel,
  setChatsIdClient,
} from '../../../../../../redux/slices/live-chat/chat-history';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const InConversationChatItem: FC<
  StyledLabelProps &
    SelectedUserProps &
    SortingProps &
    TabProps &
    DropZoneDisplayedProps &
    ChatInputDialogueProps &
    IPropsStringName &
    ShowOnlyPaused &
    MessagesViewedOrNot
> = ({
  setUserSelected,
  userSelected,
  setActiveByDefaultTab,
  sortedChats,
  showOnlyPausedChats,
  newMessagesInChat,
  // setNewMessagesInChat,
  searchByName,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  // const { tagsToFilter, channelsToFilter } = useAppSelector(
  //   (state) => state.optionsToFilterChats,
  // );

  const [timeLapse, setTimeLapse] = React.useState(Date.now());
  const [
    newOnconversationDialoguesInChat,
    setNewOnconversationDialoguesInChat,
  ] = React.useState({} as any);

  // const setNewDialoguesLengthInLocalStorage = useCallback(
  //   (value: number) => {
  //     if (!localStorage.getItem('newDialoguesLength')) {
  //       localStorage.setItem('newDialoguesLength', JSON.stringify({}));
  //     }
  //     if (localStorage.getItem('newDialoguesLength')) {
  //       const newDialoguesLength = JSON.parse(
  //         localStorage.getItem('newDialoguesLength') || '{}',
  //       );
  //       if (!newDialoguesLength[`${userSelected}`]) {
  //         // set an object with the userSelected as key and 0 as value
  //         newDialoguesLength[`${userSelected}`] = value.toString();

  //         localStorage.setItem(
  //           'newDialoguesLength',
  //           JSON.stringify({ ...newDialoguesLength }),
  //         );
  //       }
  //     }
  //   },
  //   [userSelected],
  // );

  const handleSendMessageToUser = useCallback(
    async (
      clientId: string,
      channel: string,
      chatId: string,
      messagesLength: number,
    ) => {
      // setNewDialoguesLengthInLocalStorage(messagesLength);
      setUserSelected(clientId);
      setActiveByDefaultTab(1);

      setNewOnconversationDialoguesInChat({
        ...newOnconversationDialoguesInChat,
        [chatId]: {
          ...newOnconversationDialoguesInChat[chatId],
          messagesLength,
        },
      });

      try {
        const hasHistory = await readHistoryChat(
          channel,
          clientId,
          'hasHistory',
        );
        dispatch(setChatsHasHistory(hasHistory));
        dispatch(setChatsIdChannel(channel));
        dispatch(setChatsIdClient(clientId));
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `No se puede establecer la conexión con el servidor`,
        });
      }
    },
    [
      dispatch,
      newOnconversationDialoguesInChat,
      setNewOnconversationDialoguesInChat,
      setUserSelected,
      setActiveByDefaultTab,
      showAlert,
    ],
  );

  console.log('CHATS ON CONVERSATION', chatsOnConversation);
  console.log('NEW ARRAY', newOnconversationDialoguesInChat);
  const handleNewMessagesInChat = useCallback(() => {
    // verificar si newMessagesInChat esta dentro de newOnconversationDialoguesInChat y si no esta, agregarlo

    setNewOnconversationDialoguesInChat({
      ...newOnconversationDialoguesInChat,
      ...newMessagesInChat,
    });
  }, [newMessagesInChat, newOnconversationDialoguesInChat]);

  React.useEffect(() => {
    const intervalToGetActualTime = setInterval(() => {
      setTimeLapse(Date.now());
      handleNewMessagesInChat();
    }, 10000);
    return () => clearInterval(intervalToGetActualTime);
  }, [handleNewMessagesInChat]);

  if (sortedChats) {
    dispatch(setSortedByLastDate());
  } else {
    dispatch(setSortedByFirstDate());
  }

  return (
    <StyledInConversationContainer>
      {chatsOnConversation &&
        chatsOnConversation
          .filter(
            (user) =>
              // (tagsToFilter.length > 0 &&
              //   channelsToFilter.length > 0 &&
              //   channelsToFilter?.includes(user.channel) &&
              //   user.tags.filter((tag: Tag) => tagsToFilter?.includes(tag.name))
              //     .length > 0) ||
              // (tagsToFilter.length === 0 &&
              //   channelsToFilter.length > 0 &&
              //   channelsToFilter?.includes(user.channel)) ||
              // (tagsToFilter.length > 0 &&
              //   channelsToFilter.length === 0 &&
              //   user.tags?.some((tag: Tag) =>
              //     tagsToFilter.includes(tag.name),
              //   )) ||
              // (tagsToFilter.length === 0 &&
              //   channelsToFilter.length === 0 &&
              //   chatsOnConversation),
              //-------------------------------------------------------------------
              // validacion si existe el name o clientId en los chats en Conversación
              user.client.name
                .toLowerCase()
                .includes(searchByName.toLowerCase()) ||
              user.client.clientId.replace(/[,-]/g, '').includes(searchByName),
          )
          .filter((user) => (showOnlyPausedChats ? user.isPaused : user))
          .map((chat: Chat) => (
            <StyledInConversationWrapper
              focusedItem={chat.client.clientId === userSelected}
              pausedItem={chat.isPaused}
              key={chat.createdAt.toString()}
              onClick={() =>
                handleSendMessageToUser(
                  chat.client.clientId,
                  chat.channel,
                  chat._id,
                  chat.messages.length,
                )
              }>
              <StyledInConversationChatItem>
                <StyledClientAndAgentAvatars>
                  {chat.isPaused && <SVGIcon iconFile="/icons/pause.svg" />}

                  {chat.isPaused === false && chat.client.profilePic && (
                    <img src={chat.client.profilePic} alt={chat.client.name} />
                  )}

                  {chat.isPaused === false && !chat.client.profilePic && (
                    <SVGIcon iconFile="/icons/user.svg" />
                  )}

                  {chat.channel === Channels.WHATSAPP && (
                    <SVGIcon iconFile="/icons/whatsapp.svg" />
                  )}
                  {chat.channel === Channels.MESSENGER && (
                    <SVGIcon iconFile="/icons/messenger.svg" />
                  )}
                  {chat.channel === Channels.INSTAGRAM && (
                    <SVGIcon iconFile="/icons/Instagram.svg" />
                  )}
                  {chat.channel === Channels.WEBCHAT && (
                    <SVGIcon iconFile="/icons/webchat.svg" />
                  )}
                </StyledClientAndAgentAvatars>
                <StyledNameAndDialog>
                  <Text>
                    {chat.client.name.substring(0, 16) ||
                      chat.client.clientId.substring(0, 16)}
                  </Text>
                  <Text>
                    {chat.messages &&
                      chat.messages[chat.messages.length - 1].content.substring(
                        0,
                        14,
                      )}
                    ...
                  </Text>
                </StyledNameAndDialog>
                <StyledTimeAndState>
                  <div>
                    <SVGIcon iconFile="/icons/watch.svg" />
                    {Math.floor(
                      (timeLapse - new Date(chat.createdAt).getTime()) /
                        (1000 * 60),
                    ) > 59 &&
                      (Math.floor(
                        (timeLapse - new Date(chat.createdAt).getTime()) /
                          (1000 * 60),
                      ) > 119 ? (
                        <Text>
                          Hace +
                          {Math.floor(
                            (timeLapse - new Date(chat.createdAt).getTime()) /
                              (1000 * 60) /
                              60,
                          )}{' '}
                          hs.
                        </Text>
                      ) : (
                        <Text>
                          Hace +
                          {Math.floor(
                            (timeLapse - new Date(chat.createdAt).getTime()) /
                              (1000 * 60) /
                              60,
                          )}{' '}
                          h.
                        </Text>
                      ))}
                    {Math.floor(
                      (Date.now() - new Date(chat.createdAt).getTime()) /
                        (1000 * 60),
                    ) <= 59 && (
                      <Text>
                        Hace{' '}
                        {Math.floor(
                          (timeLapse - new Date(chat.createdAt).getTime()) /
                            (1000 * 60),
                        )}{' '}
                        min.
                      </Text>
                    )}
                  </div>
                  <div>
                    {chat.isTransfer === true && (
                      <div>
                        <SVGIcon iconFile="/icons/exchange_alt.svg" />
                      </div>
                    )}
                    {chat.messages.length > 0 &&
                      chat.messages.length !==
                        newOnconversationDialoguesInChat[chat._id]
                          ?.messagesLength && (
                        <div>
                          {String(
                            chat.messages.length -
                              (Number(
                                newOnconversationDialoguesInChat[chat._id]
                                  ?.messagesLength,
                              ) || 0),
                          )}
                          {
                            (console.log(
                              'chat.messages.length ',
                              chat.messages.length,
                            ),
                            console.log(
                              'newOnconversationDialoguesInChat[chat._id] ',
                              newOnconversationDialoguesInChat[chat._id]
                                ?.messagesLength,
                            ))
                          }
                        </div>
                      )}
                    {console.log(newOnconversationDialoguesInChat, 'este')}
                  </div>
                </StyledTimeAndState>
              </StyledInConversationChatItem>
              {/* {chat.tags && (
                <StyledLabelsContainer>
                  {chat.tags.map((tag: Tag, index: number) => (
                    <StyledLabel color={tag.color} key={index.toString()}>
                      <Text>{tag.name}</Text>
                    </StyledLabel>
                  ))}
                </StyledLabelsContainer>
              )} */}
            </StyledInConversationWrapper>
          ))}
    </StyledInConversationContainer>
  );
};
