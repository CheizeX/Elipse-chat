import { storiesOf } from '@storybook/react';
import { MonitorSecondSection } from './MonitorSecondSection';

storiesOf('Ailalia/Templates/Monitor/MonitorSecondSection', module).add(
  'MonitorSecondSection',
  () => {
    return (
      <MonitorSecondSection
        onChange={() => null}
        dateAgent={[]}
        chats={[]}
        agentNotAvailable={[]}
        stateByAgent={[]}
        filterByState={() => {}}
        filterByAgents={() => {}}
        byAgentAvailable={[]}
        handleChange={() => {}}
        handleClear={() => {}}
        handleStateAgents={() => {}}
      />
    );
  },
);
