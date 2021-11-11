import { storiesOf } from '@storybook/react';
import { InConversationChatItem } from './InConversationChatItem';

storiesOf('Ailalia/Templates/Chats/Components', module).add(
  'InConversationChatItem',
  () => {
    return (
      <InConversationChatItem
        setChatInputDialogue={() => {}}
        setUserSelected={() => null}
        setSortedChats={() => null}
        setActiveByDefaultTab={() => null}
        setDropZoneDisplayed={() => null}
      />
    );
  },
);
