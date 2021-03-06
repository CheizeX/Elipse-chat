/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import { BackofficeSection } from '../../../../config/backoffice';
import { useAppSelector } from '../../../../redux/hook/hooks';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import { BadgeMolecule } from '../../molecules/Badge/Badge';
import { CollapseSidebar } from '../BackofficeLayout/BackofficeLayout.interface';
import { StyledSideBarProps } from './SideBar.interface';
import { PlanStatus } from '../../templates/SubscriptionPlans/SubscriptionSection/SubscriptionSection.interface';
import {
  StyledSideBar,
  SideBarTopContainer,
  SideBarBodyContainer,
  StyledWrapperButton,
} from './SideBar.styled';

export const SideBarOrganism: FC<StyledSideBarProps & CollapseSidebar> = ({
  backofficeSections,
  collapseArrow,
  setCollapseArrow,
  setSelectedSection,
}) => {
  const { planStatus } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const [focusedSection, setFcusedSection] = React.useState<string>(
    planStatus === PlanStatus.ACTIVE ? 'Monitor' : 'Suscripciones',
  );

  const handleClick = (section: BackofficeSection) => {
    setSelectedSection(section.name);
    setFcusedSection(section.name);
  };

  return (
    <StyledSideBar collapseArrow={collapseArrow}>
      <SideBarTopContainer collapseArrow={collapseArrow}>
        <span>
          <div>
            <img src="/images/elipse-chat-blanco.png" alt="sidebar-1" />
          </div>
        </span>
        <button onClick={() => setCollapseArrow(!collapseArrow)}>
          {collapseArrow ? (
            <SVGIcon iconFile="/icons/collapse-right.svg" />
          ) : (
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          )}
        </button>
      </SideBarTopContainer>
      <SideBarBodyContainer collapseArrow={collapseArrow}>
        {backofficeSections.map((section, index) => (
          <StyledWrapperButton
            focused={section.name === focusedSection}
            key={index.toString()}
            onClick={() => handleClick(section)}>
            <BadgeMolecule
              leftIcon={() => <SVGIcon iconFile={section.icon} />}
              rightIcon={
                planStatus === PlanStatus.WARNING &&
                section.name === 'Suscripciones'
                  ? () => <SVGIcon iconFile="/icons/small_watch.svg" />
                  : undefined
              }>
              <Text>{section.name}</Text>
            </BadgeMolecule>
          </StyledWrapperButton>
        ))}
      </SideBarBodyContainer>
    </StyledSideBar>
  );
};
