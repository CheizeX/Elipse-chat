import { Contacts } from '../../../../../../models/contacts/contacts';

export interface IContactsProps {
  dataContacts: Contacts[];
  setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
