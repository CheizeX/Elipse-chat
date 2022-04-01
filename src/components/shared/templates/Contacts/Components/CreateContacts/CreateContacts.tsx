import { FC } from 'react';
import {
  StyledCreateContacts,
  StyledHeaderCreateContact,
  StyledBodyCreateContacts,
  StyledFooterCreateContacts,
} from './CreateContacts.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IPropsCreateContacts } from './CreateContacts.interface';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';

export const CreateContacts: FC<IPropsCreateContacts> = ({
  setIsOpenModal,
}) => {
  return (
    <StyledCreateContacts>
      <StyledHeaderCreateContact>
        <Text>Crear Contacto</Text>
        <button type="button" onClick={() => setIsOpenModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderCreateContact>
      <StyledBodyCreateContacts>
        <div>
          <Text>Nombre</Text>
          <ContainerInput setFocus={() => null} />
          <Text>Teléfono</Text>
          <ContainerInput setFocus={() => null} />
          <Text>Teléfono (otro)</Text>
          <ContainerInput setFocus={() => null} />
          <Text>Email</Text>
          <ContainerInput setFocus={() => null} />
          <Text>Empresa</Text>
          <ContainerInput setFocus={() => null} />
          <Text>Propietario</Text>
          <ContainerInput setFocus={() => null} />
        </div>
      </StyledBodyCreateContacts>
      <StyledFooterCreateContacts>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule text="Guardar" size={Size.MEDIUM} />
      </StyledFooterCreateContacts>
    </StyledCreateContacts>
  );
};
