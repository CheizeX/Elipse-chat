/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';
import { BusinessHours } from '../Components/BusinessHours/BusinesHours';
import { ListedRestrictionsLeft } from '../Components/ListedRestrictions/ListedRestrictions';
import {
  StyledConfigurationSection,
  StyledRightSideTimeRestrictions,
} from './ConfigurationSection.styled';

export const ConfigurationSection: FC = () => {
  const [sortedRestrictions, setSortedRestrictions] = useState<boolean>(false);

  return (
    <>
      <StyledConfigurationSection>
        <ListedRestrictionsLeft
          sortedRestrictions={sortedRestrictions}
          setSortedRestrictions={setSortedRestrictions}
        />
        <StyledRightSideTimeRestrictions>
          <BusinessHours />
        </StyledRightSideTimeRestrictions>
      </StyledConfigurationSection>
    </>
  );
};
