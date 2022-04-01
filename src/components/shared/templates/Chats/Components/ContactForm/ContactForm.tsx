import { FC, useState } from 'react';
import { FcBusinessContact } from 'react-icons/fc';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  StyledButtonContactForm,
  StyledContactFormContainer,
} from './ContactForm.styled';

export const ContactForm: FC = () => {
  const [showContact, setShowContact] = useState<boolean>(false);
  const [datsContact, setDatsContact] = useState({
    name: '',
    phone: '',
    secundaryPhone: '',
    email: '',
    businness: '',
    owner: '',
    channel: '',
  });
  const handleClick = () => {
    setShowContact(!showContact);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(datsContact, event.target.value, 'contacts');
    setDatsContact({
      ...datsContact,
      [event.target.name]: event.target.value,
    });
  };
  const handleToggle = () => {
    console.log(datsContact);
  };
  return (
    <div>
      <StyledButtonContactForm onClick={handleClick}>
        <FcBusinessContact />
      </StyledButtonContactForm>
      <StyledContactFormContainer
        onSubmit={handleToggle}
        showContact={showContact}>
        <Text>Nombre</Text>
        <ContainerInput
          setFocus={() => null}
          onChange={(e) => handleInputChange(e)}
          placeHolder="Nombre..."
          name="name"
        />
        <Text>Teléfono</Text>
        <ContainerInput
          setFocus={() => null}
          placeHolder="Teléfono..."
          onChange={(e) => handleInputChange(e)}
          name="phone"
        />
        <Text>Teléfono (Otro)</Text>
        <ContainerInput
          name="secundaryPhone"
          placeHolder="Telefóno..."
          onChange={(e) => handleInputChange(e)}
        />
        <Text>Email</Text>
        <ContainerInput
          name="email"
          onChange={(e) => handleInputChange(e)}
          placeHolder="Email..."
        />
        <Text>Empresa</Text>
        <ContainerInput
          name="businness"
          onChange={(e) => handleInputChange(e)}
        />
        <Text>Propietario</Text>
        <ContainerInput name="owner" onChange={(e) => handleInputChange(e)} />
        <Text>Canal</Text>
        <div>
          <button type="button">
            <SVGIcon iconFile="/icons/whatsapp.svg" />
          </button>
          <button type="button">
            <SVGIcon iconFile="/icons/instagram.svg" />
          </button>
          <button type="button">
            <SVGIcon iconFile="/icons/Messenger.svg" />
          </button>
        </div>
        <ButtonMolecule text="Guardar" type="submit" />
      </StyledContactFormContainer>
    </div>
  );
};
