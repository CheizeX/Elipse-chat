import { FC } from 'react';
import {
  StyledEditContacts,
  StyledHeaderEdit,
  StyledBodyEditContacts,
  StyledFooterEditContacts,
} from './EditContact.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { IPropEditContact } from './EditContact.interface';

export const EditContact: FC<IPropEditContact> = ({
  setIsOpenModal,
  // setContactData,
  // contactData,
  // dataContacts,
}) => {
  // useEffect(() => {
  //   setContactData([
  //     ...contactData,
  //     name: dataContacts.name,
  //   ])
  // })
  return (
    <StyledEditContacts>
      <StyledHeaderEdit>
        <Text> Editar contactos</Text>
        <button type="button" onClick={() => setIsOpenModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderEdit>
      <StyledBodyEditContacts>
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
      </StyledBodyEditContacts>
      <StyledFooterEditContacts>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule text="Editar" size={Size.MEDIUM} />
      </StyledFooterEditContacts>
    </StyledEditContacts>
  );
};
