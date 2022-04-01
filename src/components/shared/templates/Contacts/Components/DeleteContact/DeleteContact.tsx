import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledDeleteContact,
  StyledIcon,
  StyledInformationContact,
  StyledFooterContact,
} from './DeleteContact.styled';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { IPropsDeleteContact } from './DeleteContact.interface';

export const DeleteContact: FC<IPropsDeleteContact> = ({ setIsOpenModal }) => {
  return (
    <StyledDeleteContact>
      <StyledIcon>
        <SVGIcon iconFile="/icons/warning.svg" />
      </StyledIcon>
      <StyledInformationContact>
        <Text>¿Estás seguro de querer eliminar este contacto?</Text>
        <Text>
          Toda la información asociada a este contacto dejará de estar
          disponible
        </Text>
      </StyledInformationContact>
      <StyledFooterContact>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setIsOpenModal(false)}
        />
        <ButtonMolecule text="Eliminar" size={Size.MEDIUM} />
      </StyledFooterContact>
    </StyledDeleteContact>
  );
};
