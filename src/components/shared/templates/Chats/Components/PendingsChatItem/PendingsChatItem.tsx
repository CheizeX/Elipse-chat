/* eslint-disable sonarjs/no-identical-functions */
import React, { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledPendingChatsContainer,
  StyledPendingWrapper,
  StyledPendingChatItem,
  StyledClientAndAgentAvatars,
  StyledNameAndDialog,
  StyledTimeAndState,
  StyledLabel,
  StyledLabelsContainer,
} from './PendingsChatItem.styles';
import {
  SelectedUserProps,
  SortingProps,
  TabProps,
} from '../../ChatsSection/ChatsSection.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import {
  LiveChatSliceInterface,
  setSortedByFirstDate,
  setSortedByLastDate,
} from '../../../../../../redux/slices/live-chat/pending-chats';
import { Channels } from '../../../../../../models/chat/chat';
import { Tag } from '../../../../../../models/tags/tag';

export const PendingsChatItem: FC<
  SelectedUserProps & SortingProps & TabProps & LiveChatSliceInterface
> = ({ setUserSelected, userSelected, setActiveByDefaultTab, sortedChats }) => {
  const dispatch = useAppDispatch();
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );
  const { tagsToFilter, channelsToFilter } = useAppSelector(
    (state) => state.optionsToFilterChats,
  );

  const [timeLapse, setTimeLapse] = React.useState(Date.now());

  const handleClick = (arg: string) => {
    setUserSelected(arg);
    setActiveByDefaultTab(0);
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

  // <<<--- LOGICA PARA FILTRAR DIFERENTE --->>>>>>>>>>>>>>>>>>

  // const { activeTabInState } = useAppSelector((state) => state.activeTab);
  // const [fatherActiveTab, setFatherActiveTab] =
  //   React.useState<string>('Pendientes');

  // React.useEffect(() => {
  //   if (activeTabInState === 'Pendientes') {
  //     setFatherActiveTab('Pendientes');
  //   }
  //   if (activeTabInState === 'En conversación') {
  //     setFatherActiveTab('En conversación');
  //   }
  // }, [activeTabInState]);

  return (
    <StyledPendingChatsContainer>
      {chatsPendings &&
        chatsPendings
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
                chatsPendings),
          )
          .map((user: any) => (
            <StyledPendingWrapper
              focusedItem={user.client.clientId === userSelected}
              key={user.createdAt.toString()}
              onClick={() => handleClick(user.client.clientId)}>
              <StyledPendingChatItem>
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
                    {(user.client.name.substr(0, 16) ||
                      (user.client.clientId &&
                        user.client.clientId.substr(0, 16))) ??
                      ''}
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
                    ) > 59 ? (
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
                      Math.floor(
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
                      )
                    )}
                  </div>
                  <div>
                    <div />
                    <div>{user.messages.length}</div>
                  </div>
                </StyledTimeAndState>
              </StyledPendingChatItem>
              {user.tags && (
                <StyledLabelsContainer>
                  {user.tags.map((tag: Tag, index: number) => (
                    <StyledLabel color={tag.color} key={index.toString()}>
                      <Text>{tag.name}</Text>
                    </StyledLabel>
                  ))}
                </StyledLabelsContainer>
              )}
            </StyledPendingWrapper>
          ))}
    </StyledPendingChatsContainer>
  );
};
