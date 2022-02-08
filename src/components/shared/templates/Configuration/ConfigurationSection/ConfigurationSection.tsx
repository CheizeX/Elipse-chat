/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react';
import { BusinessHours } from '../Components/BusinessHours/BusinesHours';
import { ListedRestrictionsLeft } from '../Components/ListedRestrictions/ListedRestrictions';
import {
  StyledConfigurationSection,
  StyledRightSideTimeRestrictions,
} from './ConfigurationSection.styled';

export const ConfigurationSection: FC = () => {
  return (
    <>
      <StyledConfigurationSection>
        <ListedRestrictionsLeft />
        <StyledRightSideTimeRestrictions>
          <BusinessHours />
        </StyledRightSideTimeRestrictions>
      </StyledConfigurationSection>
    </>
  );
};
