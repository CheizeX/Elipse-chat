import { Contacts } from '../../../../../../models/contacts/contacts';

export interface IPropEditContact {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContactData: React.Dispatch<React.SetStateAction<Contacts[]>>;
  contactData: Contacts[];
  dataContacts: Contacts[];
}
