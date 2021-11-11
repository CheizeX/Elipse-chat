import { FC } from 'react';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import {
  ContainerFilterByAgent,
  StyledWrapperFilterByAgents,
  FilterByAgents,
} from './FilterByAgentsAvailable.styled';
import { IFilterByAgent } from './FilterByAgentsAvailable.interface';

export const FilterAgentsAvailable: FC<IFilterByAgent> = ({
  onChange,
  dateAgent,
  handleFilterAgents,
  byAgents,
}) => {
  return (
    <ContainerFilterByAgent>
      <ContainerInput
        setFocus={() => null}
        placeHolder="Buscar agente..."
        LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
        onChange={onChange}
      />
      <StyledWrapperFilterByAgents>
        {dateAgent?.map(({ _id, name }) => (
          <FilterByAgents
            onChange={onChange}
            key={_id}
            checkedAgent={byAgents.indexOf(_id) !== -1}>
            <Checkbox
              isTransparent
              checked={byAgents.indexOf(_id) !== -1}
              onClick={() => handleFilterAgents(_id)}
            />
            <SVGIcon iconFile="/icons/unknown_user.svg" />
            <Text color="black">{name}</Text>
          </FilterByAgents>
        )) ?? []}
      </StyledWrapperFilterByAgents>
    </ContainerFilterByAgent>
  );
};
