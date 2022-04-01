import { FC, useMemo, useState } from 'react';
import { ContactsHeader } from '../Components/ContactsHeader/ContactsHeader';
import { WrapperContactsSection } from './ContactsSection.styled';
import { ContactsBox } from '../Components/ContactsBox/ContactsBox';
import { dataContacts } from './Shared';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { DeleteContact } from '../Components/DeleteContact/DeleteContact';
import { CreateContacts } from '../Components/CreateContacts/CreateContacts';
import { EditContact } from '../Components/EditContact/EditContact';
import { Contacts } from '../../../../../models/contacts/contacts';

export const ContactsSetion: FC = () => {
  const [selectedContact, setSelectedContact] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [searchContacts, setSearchContacts] = useState<string>('');
  const [contactData, setContactData] = useState<Array<Contacts>>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContacts(event.target.value);
  };
  const dataAllContacts = useMemo(() => {
    if (!searchContacts) return dataContacts;
    return dataContacts.filter(
      (contacts) =>
        contacts.name.toLowerCase().includes(searchContacts.toLowerCase()) ||
        contacts.phone
          .toLocaleLowerCase()
          .includes(searchContacts.toLowerCase()) ||
        contacts.secundaryPhone
          .toLocaleLowerCase()
          .includes(searchContacts.toLocaleLowerCase()),
    );
  }, [searchContacts]);
  return (
    <WrapperContactsSection>
      <ContactsHeader
        onChange={onChange}
        setSelectedContact={setSelectedContact}
        setIsOpenModal={setIsOpenModal}
      />
      <ContactsBox
        dataContacts={dataAllContacts}
        setSelectedContact={setSelectedContact}
        setIsOpenModal={setIsOpenModal}
      />
      <ModalMolecule isModal={isOpenModal} setModal={setIsOpenModal}>
        {selectedContact && selectedContact === 'create' ? (
          <CreateContacts setIsOpenModal={setIsOpenModal} />
        ) : null}
        {selectedContact && selectedContact === 'edit' ? (
          <EditContact
            setIsOpenModal={setIsOpenModal}
            dataContacts={dataAllContacts}
            setContactData={setContactData}
            contactData={contactData}
          />
        ) : null}
        {selectedContact && selectedContact === 'delete' ? (
          <DeleteContact setIsOpenModal={setIsOpenModal} />
        ) : null}
      </ModalMolecule>
    </WrapperContactsSection>
  );
};
