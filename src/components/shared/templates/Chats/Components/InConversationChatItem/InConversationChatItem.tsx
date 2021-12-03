/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Channels, Chat } from '../../../../../../models/chat/chat';
import {
  StyledLabel,
  StyledClientAndAgentAvatars,
  StyledNameAndDialog,
  StyledLabelsContainer,
} from '../PendingsChatItem/PendingsChatItem.styles';
import {
  TabProps,
  StyledLabelProps,
  SelectedUserProps,
  SortingProps,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
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
import { Tag } from '../../../../../../models/tags/tag';

export const InConversationChatItem: FC<
  StyledLabelProps &
    SelectedUserProps &
    SortingProps &
    TabProps &
    DropZoneDisplayedProps &
    ChatInputDialogueProps
> = ({ setUserSelected, userSelected, setActiveByDefaultTab, sortedChats }) => {
  const dispatch = useAppDispatch();

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { tagsToFilter, channelsToFilter } = useAppSelector(
    (state) => state.optionsToFilterChats,
  );

  const [timeLapse, setTimeLapse] = React.useState(Date.now());
  // const [fatherActiveTab, setFatherActiveTab] =
  //   React.useState<string>('Pendientes');

  const handleSendMessageToUser = async (arg: string) => {
    setUserSelected(arg);
    setActiveByDefaultTab(1);
  };

  React.useEffect(() => {
    const intervalToGetActualTime = setInterval(() => {
      setTimeLapse(Date.now());
    }, 10000);
    return () => clearInterval(intervalToGetActualTime);
  }, []);

  if (sortedChats) {
    dispatch(setSortedByLastDate());
  } else {
    dispatch(setSortedByFirstDate());
  }

  // const { activeTabInState } = useAppSelector((state) => state.activeTab);
  // const { tagsToFilter, channelsToFilter } = useAppSelector(
  //   (state) => state.optionsToFilterChats,
  // );

  // React.useEffect(() => {
  //   if (activeTabInState === 'Pendientes') {
  //     setFatherActiveTab('Pendientes');
  //   }
  //   if (activeTabInState === 'En conversación') {
  //     setFatherActiveTab('En conversación');
  //   }
  // }, [activeTabInState]);

  // console.log('PADRE-TAB', fatherActiveTab);
  return (
    <StyledInConversationContainer>
      {chatsOnConversation &&
        chatsOnConversation
          .filter(
            (user) =>
              (tagsToFilter.length > 0 &&
                channelsToFilter.length > 0 &&
                channelsToFilter?.includes(user.channel) &&
                user.tags.filter((tag: Tag) => tagsToFilter?.includes(tag.name))
                  .length > 0) ||
              (tagsToFilter.length === 0 &&
                channelsToFilter.length > 0 &&
                channelsToFilter?.includes(user.channel)) ||
              (tagsToFilter.length > 0 &&
                channelsToFilter.length === 0 &&
                user.tags?.some((tag: Tag) =>
                  tagsToFilter.includes(tag.name),
                )) ||
              (tagsToFilter.length === 0 &&
                channelsToFilter.length === 0 &&
                chatsOnConversation),
          )
          .map((chat: Chat) => (
            <StyledInConversationWrapper
              focusedItem={chat.client.clientId === userSelected}
              key={chat.createdAt.toString()}
              onClick={() => handleSendMessageToUser(chat.client.clientId)}>
              <StyledInConversationChatItem>
                <StyledClientAndAgentAvatars>
                  {chat.client.profilePic ? (
                    <img src={chat.client.profilePic} alt={chat.client.name} />
                  ) : (
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
                    {chat.client.name.substr(0, 16) ||
                      chat.client.clientId.substr(0, 16)}
                  </Text>
                  <Text>
                    {chat.messages &&
                      chat.messages[chat.messages.length - 1].content.substr(
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
                      <SVGIcon iconFile="/icons/exchange_alt.svg" />
                    )}
                    {/* <div>{user.number}</div> */}
                  </div>
                </StyledTimeAndState>
              </StyledInConversationChatItem>
              {chat.tags && (
                <StyledLabelsContainer>
                  {chat.tags.map((tag: Tag, index: number) => (
                    <StyledLabel color={tag.color} key={index.toString()}>
                      <Text>{tag.name}</Text>
                    </StyledLabel>
                  ))}
                </StyledLabelsContainer>
              )}
            </StyledInConversationWrapper>
          ))}
    </StyledInConversationContainer>
  );
};
