/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Channels } from '../../../../../../models/chat/chat';
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
          .map((user) => (
            <StyledInConversationWrapper
              focusedItem={user.client.clientId === userSelected}
              key={user.createdAt.toString()}
              onClick={() => handleSendMessageToUser(user.client.clientId)}>
              <StyledInConversationChatItem>
                <StyledClientAndAgentAvatars>
                  {user.client.profilePic ? (
                    <img src={user.client.profilePic} alt={user.client.name} />
                  ) : (
                    <SVGIcon iconFile="/icons/user.svg" />
                  )}
                  {user.channel === Channels.WHATSAPP && (
                    <SVGIcon iconFile="/icons/whatsapp.svg" />
                  )}
                  {user.channel === Channels.MESSENGER && (
                    <SVGIcon iconFile="/icons/messenger.svg" />
                  )}
                  {user.channel === Channels.INSTAGRAM && (
                    <SVGIcon iconFile="/icons/Instagram.svg" />
                  )}
                </StyledClientAndAgentAvatars>
                <StyledNameAndDialog>
                  <Text>
                    {user.client.name.substr(0, 16) ||
                      user.client.clientId.substr(0, 16)}
                  </Text>
                  <Text>
                    {user.messages &&
                      user.messages[user.messages.length - 1].content.substr(
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
                      (timeLapse - new Date(user.createdAt).getTime()) /
                        (1000 * 60),
                    ) > 59 &&
                      (Math.floor(
                        (timeLapse - new Date(user.createdAt).getTime()) /
                          (1000 * 60),
                      ) > 119 ? (
                        <Text>
                          Hace +
                          {Math.floor(
                            (timeLapse - new Date(user.createdAt).getTime()) /
                              (1000 * 60) /
                              60,
                          )}{' '}
                          hs.
                        </Text>
                      ) : (
                        <Text>
                          Hace +
                          {Math.floor(
                            (timeLapse - new Date(user.createdAt).getTime()) /
                              (1000 * 60) /
                              60,
                          )}{' '}
                          h.
                        </Text>
                      ))}
                    {Math.floor(
                      (Date.now() - new Date(user.createdAt).getTime()) /
                        (1000 * 60),
                    ) <= 59 && (
                      <Text>
                        Hace{' '}
                        {Math.floor(
                          (timeLapse - new Date(user.createdAt).getTime()) /
                            (1000 * 60),
                        )}{' '}
                        min.
                      </Text>
                    )}
                  </div>
                  <div>
                    {user.isTransfer === true && (
                      <SVGIcon iconFile="/icons/exchange_alt.svg" />
                    )}
                    {/* <div>{user.number}</div> */}
                  </div>
                </StyledTimeAndState>
              </StyledInConversationChatItem>
              {user.tags && (
                <StyledLabelsContainer>
                  {user.tags.map((tag: Tag, index: number) => (
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
