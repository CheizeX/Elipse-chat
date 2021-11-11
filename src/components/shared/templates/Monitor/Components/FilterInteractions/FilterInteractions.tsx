/* eslint-disable import/no-cycle */
import { FC, useState } from 'react';
import { Dropdown } from '../../../../atoms/Dropdown/Dropdown';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Tabs } from '../../../../organisms/Tabs/Tabs';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { FilterState } from '../FilterState/FilterState';
import { FilterByAgent } from '../FilterByAgent/FilterByAgent';
import {
  StyledFilterInteraction,
  StyledFilterInteractionHeader,
  StyledFilterInteractionBody,
  StyledFilterInteractionFooter,
} from './FilterInteraction.styled';
import { FilterChannels } from '../FilterChannels/FilterChannels';
import { IFilterStatus } from './FilterInteractions.interface';

export const FilterInteractions: FC<IFilterStatus> = ({
  onChange,
  dateAgent,
  filterStatus,
  filterAgents,
  filterChannels,
  statusAgent,
  byChannels,
  IDAgents,
  onHandleToggle,
  resetHandle,
}) => {
  const [filterClose, setFilterClose] = useState<boolean>(false);

  const handleReset = () => {
    const longStatus = statusAgent.length;
    const longAgents = IDAgents.length;
    const longChannels = byChannels.length;
    statusAgent?.splice(0, longStatus);
    IDAgents?.splice(0, longAgents);
    byChannels?.splice(0, longChannels);
    setFilterClose(true);
    resetHandle();
  };
  const handleToggle = () => {
    setFilterClose(true);
    onHandleToggle();
  };

  return (
    <Dropdown
      onClick={() => setFilterClose(false)}
      triggerElement={() => <SVGIcon iconFile="/icons/filter.svg" />}>
      <StyledFilterInteraction onChange={onChange} close={filterClose}>
        <StyledFilterInteractionHeader>
          <Text color="black"> Filtrar Interacciones por:</Text>
          <button type="button" onClick={() => setFilterClose(true)}>
            <SVGIcon iconFile="/icons/times.svg" />
          </button>
        </StyledFilterInteractionHeader>
        <StyledFilterInteractionBody>
          <Tabs>
            <div title="Estado">
              <FilterState
                statusAgent={statusAgent}
                handleFilterStatus={filterStatus}
              />
            </div>
            <div title="Agente">
              <FilterByAgent
                onChange={onChange}
                dateAgent={dateAgent ?? []}
                handleFilterAgents={filterAgents}
                byAgents={IDAgents}
              />
            </div>
            <div title="Canal">
              <FilterChannels
                handleFilterChannels={filterChannels}
                channel={byChannels}
              />
            </div>
          </Tabs>
        </StyledFilterInteractionBody>
        <StyledFilterInteractionFooter>
          <ButtonMolecule
            text="Limpiar"
            size={Size.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            onClick={handleReset}
          />
          <ButtonMolecule
            text="Filtrar"
            size={Size.MEDIUM}
            onClick={handleToggle}
          />
        </StyledFilterInteractionFooter>
      </StyledFilterInteraction>
    </Dropdown>
  );
};
