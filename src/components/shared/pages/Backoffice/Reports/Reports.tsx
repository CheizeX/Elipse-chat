import React, { FC } from 'react';
import { BackofficeLayout } from '../../../organisms/BackofficeLayout/BackofficeLayout';
import { ReportsSection } from '../../../templates/Reports/ReportsSection/ReportsSection';

export const Reports: FC = () => {
  return (
    <BackofficeLayout
      setCollapseArrow={() => null}
      startDate={null}
      setCheckedTags={() => null}
      checkedTags={[]}
      endDate={null}
      setStartDate={() => null}
      setDatePicker={() => null}
      setEndDate={() => null}
      setMyAccount={() => {}}
      setClose={() => null}
      setSelectedSection={() => {}}>
      <ReportsSection />
    </BackofficeLayout>
  );
};
