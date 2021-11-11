import { FC } from 'react';
import { Tabs } from '../../../../organisms/Tabs/Tabs';
import { PendingsChatItem } from '../PendingsChatItem/PendingsChatItem';
import { ChatsListHeader } from '../ChatsListHeader/ChatsListHeader';
import { InConversationChatItem } from '../InConversationChatItem/InConversationChatItem';
import {
  StyledChatsList,
  StyledIndicator,
  StyledPendingsRender,
  StyledPendings,
  StyledInConversation,
  StyledInConversationRender,
} from './ChatsList.styles';
import {
  TabProps,
  SelectedUserProps,
  SortUsers,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
} from '../../ChatsSection/ChatsSection.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../ChatsFilter/ChatFilter/ChatFilter.interface';

export const ChatsList: FC<
  SelectedUserProps &
    SortUsers &
    TabProps &
    DropZoneDisplayedProps &
    ChatInputDialogueProps &
    FilterChannelsProps &
    FilterChannel
> = ({
  setUserSelected,
  userSelected,
  sortedChats,
  setSortedChats,
  activeByDefaultTab,
  setActiveByDefaultTab,
  setDropZoneDisplayed,
  setChatInputDialogue,
  channel,
  handleCleanChannels,
  checkedTags,
  setCheckedTags,
}) => {
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );

  return (
    <StyledChatsList>
      {chatsOnConversation?.length > 0 && <StyledIndicator />}
      {activeByDefaultTab === 1 && (
        <Tabs largeTabs activeByDefault={1}>
          <StyledPendings title="Pendientes">
            <StyledPendingsRender>
              <ChatsListHeader
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                isPendings
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
              />
              <PendingsChatItem
                chatsPendings={chatsPendings}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
              />
            </StyledPendingsRender>
          </StyledPendings>
          <StyledInConversation title="En conversación">
            <StyledInConversationRender>
              <ChatsListHeader
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
              />
              <InConversationChatItem
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                setDropZoneDisplayed={setDropZoneDisplayed}
                setChatInputDialogue={setChatInputDialogue}
              />
            </StyledInConversationRender>
          </StyledInConversation>
        </Tabs>
      )}
      {activeByDefaultTab === 0 && (
        <Tabs largeTabs activeByDefault={0}>
          <StyledPendings title="Pendientes">
            <StyledPendingsRender>
              <ChatsListHeader
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                isPendings
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
              />
              <PendingsChatItem
                chatsPendings={chatsPendings}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
              />
            </StyledPendingsRender>
          </StyledPendings>
          <StyledInConversation title="En conversación">
            <StyledInConversationRender>
              <ChatsListHeader
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
              />
              <InConversationChatItem
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                setDropZoneDisplayed={setDropZoneDisplayed}
                setChatInputDialogue={setChatInputDialogue}
              />
            </StyledInConversationRender>
          </StyledInConversation>
        </Tabs>
      )}
    </StyledChatsList>
  );
};
