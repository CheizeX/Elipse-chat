import { FC } from 'react';
import {
  StyledCustomWebChat,
  StyledHeaderCustomWebChat,
  WrapperWebChat,
  StyledAvatar,
  StyledBodyWebChat,
} from './CustomWebAvatar.styled';
import { ICustomWebChat } from './CustomWebChat.interface';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

export const CustomWebChat: FC<ICustomWebChat> = ({
  title,
  color,
  description,
  avatar,
  customizeMyAvatar,
}) => {
  return (
    <StyledCustomWebChat>
      <div>
        <WrapperWebChat color={color}>
          <div>
            <SVGIcon iconFile="/icons/chevron-square-down.svg" />
          </div>
          <StyledHeaderCustomWebChat>
            <StyledAvatar>
              {!customizeMyAvatar ? (
                <SVGIcon iconFile={`/avatars/${avatar}`} />
              ) : (
                <img src={avatar} alt={avatar} />
              )}
            </StyledAvatar>
            <div>
              <Text>{title}</Text>
              <Text>{description}</Text>
            </div>
          </StyledHeaderCustomWebChat>
          <StyledBodyWebChat color={color}>
            <div>
              {!customizeMyAvatar ? (
                <SVGIcon iconFile={`/avatars/${avatar}`} />
              ) : (
                <img src={avatar} alt={avatar} />
              )}
              <div>
                <Text>
                  Hola mi nombre es Elipse mi función es responder preguntas ¿En
                  qué puedo ayudarte?
                </Text>
              </div>
            </div>
            <div>
              <div>
                <Text>Hola Buen día! Me gustaria hablar con un agente.</Text>
              </div>
            </div>
            <div>
              <div>
                <Text>Enviar un mensaje...</Text>
              </div>
              <div>
                <SVGIcon iconFile="/icons/paper_plane.svg" />
              </div>
            </div>
          </StyledBodyWebChat>
          <Text>Powered by Elipse</Text>
        </WrapperWebChat>
      </div>
    </StyledCustomWebChat>
  );
};
