import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledChatsListHeader,
  StyledChatsListHeaderLeft,
  StyledUsersCounter,
} from './ChatsListHeader.styles';
import {
  SortUsers,
  ChatsListHeaderProps,
} from '../../ChatsSection/ChatsSection.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { ChatFilter } from '../ChatsFilter/ChatFilter/ChatFilter';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../ChatsFilter/ChatFilter/ChatFilter.interface';

export const ChatsListHeader: FC<
  SortUsers & ChatsListHeaderProps & FilterChannelsProps & FilterChannel
> = ({
  setSortedChats,
  sortedChats,
  isPendings,
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
    <StyledChatsListHeader>
      <StyledChatsListHeaderLeft>
        <Text color="black">Total</Text>
        <StyledUsersCounter>
          {isPendings
            ? chatsPendings?.length || 0
            : chatsOnConversation?.length || 0}
        </StyledUsersCounter>
      </StyledChatsListHeaderLeft>
      <span>
        <button type="button" onClick={() => setSortedChats(!sortedChats)}>
          <SVGIcon iconFile="/icons/watch.svg" />
          {sortedChats ? (
            <SVGIcon iconFile="/icons/upArrow.svg" />
          ) : (
            <SVGIcon iconFile="/icons/downArrow.svg" />
          )}
        </button>
        <ChatFilter
          checkedTags={checkedTags}
          setCheckedTags={setCheckedTags}
          handleCleanChannels={handleCleanChannels}
          channel={channel}
        />
      </span>
    </StyledChatsListHeader>
  );
};
