import { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import {
  StyledWebChat,
  StyledHeaderSectionWebChat,
  StyledBodyWebChat,
  StyledFooterWebChat,
} from './SectionWebChat.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IPropsWebChat } from './SectionWebChat.interface';
import { WrapperNameAndDescription } from '../WrapperNameAndDescription/WrapperNameAndDescription';
import { ColorPaletteWrap } from '../ColorPaletteWrap/ColorPaletteWrap';
import { AvatarContainer } from '../AvatarContainer/AvatarContainer';
import { CustomWebChat } from '../CustomWebChat/CustomWebChat';

const data = [
  {
    num: 1,
    message: 'Ingresa un nombre',
  },
  {
    num: 2,
    message: 'Seleciona un color',
  },
  {
    num: 3,
    message: 'Selecciona un avatar',
  },
  {
    num: 4,
    message: '¡Listo!',
  },
];

export const SectionWebChat: FC<IPropsWebChat> = ({ setIsSectionWebChat }) => {
  const [isSection, setIsSection] = useState<number>(1);
  const [customColor, setCustomColor] = useState<string>('#8520D0');
  const [customTitle, setCustomTitle] = useState<string>('Elipse Chat');
  const [customDescription, setCustomDescription] =
    useState<string>('Asistente Virtual');
  const [customAvatar, setCustomAvatar] = useState<string>('Robot 1.svg');

  const handleToggle = () => {
    setIsSection(isSection + 1);
  };
  const prevToggle = () => {
    setIsSection(isSection - 1);
  };
  const onCloseModal = () => {
    setIsSectionWebChat(false);
    setIsSection(1);
  };

  return (
    <StyledWebChat>
      <StyledHeaderSectionWebChat>
        <Text>Añadir nuevo Web Chat</Text>
        <button type="button" onClick={onCloseModal}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderSectionWebChat>
      <StyledBodyWebChat isSection={isSection}>
        <div>
          <div>
            {data.map((item) => (
              <div key={item.num}>
                <div>
                  <div>{item.num}</div>
                  <Text>{item.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          {isSection === 1 ? (
            <WrapperNameAndDescription
              setCustomDescription={setCustomDescription}
              setCustomTitle={setCustomTitle}
            />
          ) : null}
          {isSection === 2 ? (
            <ColorPaletteWrap
              setCustomColor={setCustomColor}
              handleToggle={handleToggle}
              color={customColor}
            />
          ) : null}
          {isSection === 3 || isSection === 4 ? (
            <>
              <Text>Selecciona un ávatar</Text>
              <AvatarContainer
                setCustomAvatar={setCustomAvatar}
                setIsSection={setIsSection}
              />
            </>
          ) : null}
        </div>
        <div>
          <div>
            <CustomWebChat
              avatar={customAvatar}
              color={customColor}
              title={customTitle}
              description={customDescription}
            />
          </div>
        </div>
      </StyledBodyWebChat>
      <StyledFooterWebChat>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={prevToggle}
          state={isSection <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL}
        />
        {isSection === 4 ? (
          <ButtonMolecule text="Confirmar" size={Size.MEDIUM} />
        ) : (
          <ButtonMolecule
            text="Siguiente"
            onClick={handleToggle}
            size={Size.MEDIUM}
          />
        )}
      </StyledFooterWebChat>
    </StyledWebChat>
  );
};
