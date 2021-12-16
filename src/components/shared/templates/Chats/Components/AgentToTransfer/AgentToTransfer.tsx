import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledBadgeChatTransfer,
  StyledContainerTagAgents,
} from './AgentToTransfer.styled';
import { IAgentToTransferProps } from './AgentToTransfer.interface';
import { ContainerWithOutTags } from '../../../../molecules/ContainerWithOutTags/ContainerWithOutTags';

export const AgentToTransfer: FC<IAgentToTransferProps> = ({
  name,
  time,
  change,
  minuts,
  tag,
  message,
}) => {
  return (
    <>
      <span>
        <SVGIcon iconFile="/icons/unknown_user.svg" />
      </span>
      <Text>{name}</Text>
      <StyledBadgeChatTransfer>
        <BadgeMolecule
          bgColor="#3AA4FF"
          rightIcon={() => <SVGIcon iconFile="/icons/small_icon_watch.svg" />}>
          <Text>{message}</Text>
        </BadgeMolecule>
        <BadgeMolecule
          bgColor="#24C3A7"
          rightIcon={() => <SVGIcon iconFile="/icons/small_message.svg" />}>
          <Text>{time}</Text>
        </BadgeMolecule>
        <BadgeMolecule
          bgColor="#B2B2B2"
          rightIcon={() => <SVGIcon iconFile="/icons/exchange_alt.svg" />}>
          <Text>{change}</Text>
        </BadgeMolecule>
      </StyledBadgeChatTransfer>
      <BadgeMolecule
        bgColor="#8769FF"
        leftIcon={() => <SVGIcon iconFile="/icons/icon_watch.svg" />}>
        <Text>{minuts}</Text>
      </BadgeMolecule>
      <Text>Etiquetas</Text>
      <div>
        {tag && tag.length < 1 ? (
          <ContainerWithOutTags firstName={name} />
        ) : (
          tag?.map((element, index) => (
            <StyledContainerTagAgents
              key={index.toString()}
              color={element.color}>
              {element.name}
            </StyledContainerTagAgents>
          ))
        )}
      </div>
    </>
  );
};
