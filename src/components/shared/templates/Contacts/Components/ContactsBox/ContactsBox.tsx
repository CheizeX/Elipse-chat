import { FC } from 'react';
import { StyledContactBox, StyledListContacts } from './ContactsBox.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IContactsProps } from './ContactsBox.interface';

export const ContactsBox: FC<IContactsProps> = ({
  dataContacts,
  setSelectedContact,
  setIsOpenModal,
}) => {
  const handleOpenSection = (arg: string) => {
    if (arg === 'edit') {
      setSelectedContact('edit');
    } else {
      setSelectedContact('delete');
    }
    setIsOpenModal(true);
  };
  const handleLimitEmail = (email: string) => {
    if (email.length > 20) {
      return `${email.slice(0, 20)}...`;
    }
    return email;
  };

  return (
    <StyledContactBox>
      <StyledListContacts>
        <div>
          <Text>Nombre</Text>
          <Text>Teléfono</Text>
          <Text>Teléfono</Text>
          <Text>Email</Text>
          <Text>Empresa</Text>
          <Text>Propietario</Text>
          <Text>Canal</Text>
          <Text>Opciones</Text>
        </div>
        <section>
          {dataContacts.map((item) => (
            <div key={item._id}>
              <Text color="black">
                <div>{item.name.slice(0, 1).toLocaleUpperCase()}</div>
                {item.name}
              </Text>
              <Text>{item.phone}</Text>
              <Text>{item.secundaryPhone}</Text>
              <Text>{handleLimitEmail(item.email)}</Text>
              <Text>{item.businness}</Text>
              <Text>{item.owner}</Text>
              <span>
                <SVGIcon iconFile={`/icons/${item.channel}.svg`} />
              </span>
              <span>
                <button type="button" onClick={() => handleOpenSection('edit')}>
                  <SVGIcon iconFile="/icons/pen.svg" />
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenSection('delete')}>
                  <SVGIcon iconFile="/icons/delete.svg" />
                </button>
              </span>
            </div>
          ))}
        </section>
      </StyledListContacts>
    </StyledContactBox>
  );
};
