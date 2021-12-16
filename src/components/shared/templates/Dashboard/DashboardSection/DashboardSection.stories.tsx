import { storiesOf } from '@storybook/react';
import { DashboardSection } from './DashboardSection';

storiesOf('Ailalia/Organisms/Dashboard/DashboardSection', module).add(
  'Default',
  () => {
    return (
      <DashboardSection
        startDate={null}
        endDate={null}
        setStartDate={() => null}
        setEndDate={() => null}
        setClose={() => null}
        setDatePicker={() => null}
        setSelectedComponent={() => null}
      />
    );
  },
);
