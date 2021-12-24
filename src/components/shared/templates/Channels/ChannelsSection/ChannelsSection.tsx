import { FC, useState } from 'react';
import { ChannelsListHeader } from '../Components/ChannelsListHeader/ChannelsListHeader';
import { StyledChannelSection } from './ChannelsSection.styled';
import { ChannelsEmpty } from '../Components/ChannelsEmpty/ChannelsEmpty';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { AddChannel } from '../Components/AddChannel/AddChannel';
import { SectionWebChat } from '../Components/SectionWebChat/SectionWebChat';
import { SectionWhatsAppComponent } from '../Components/SectionWhatsapp/SectionWhatsapp';
import { SectionFacebookComponent } from '../Components/SectionFacebook/SectionFacebook';
import { ConfirmationAuth } from '../Components/SectionFacebook/Components/ConfirmationAuth/ConfirmationAuth';
import { SectionComponentInstagram } from '../Components/SectionInstagram/SectionInstagram';

export const ChannelsSection: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSectionWebChat, setIsSectionWebChat] = useState<boolean>(false);
  const [seletedComponent, setSeletedComponent] = useState<string>('');
  const [confirmationAccount, setConfirmationAccounth] =
    useState<boolean>(false);

  return (
    <StyledChannelSection>
      <ChannelsListHeader setIsOpenModal={setIsOpenModal} />
      <ModalMolecule isModal={isOpenModal}>
        <AddChannel
          setIsOpenModal={setIsOpenModal}
          setIsSectionWebChat={setIsSectionWebChat}
          setSeletedComponent={setSeletedComponent}
        />
      </ModalMolecule>
      <ModalMolecule isModal={isSectionWebChat}>
        {seletedComponent === 'Web Chat' ? (
          <SectionWebChat setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
        {seletedComponent === 'Whatsapp' ? (
          <SectionWhatsAppComponent setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
        {seletedComponent === 'Messenger' ? (
          <SectionFacebookComponent
            setConfirmationAccounth={setConfirmationAccounth}
            setIsSectionWebChat={setIsSectionWebChat}
          />
        ) : null}
        {seletedComponent === 'Instagram' ? (
          <SectionComponentInstagram
            setIsSectionWebChat={setIsSectionWebChat}
          />
        ) : null}
      </ModalMolecule>
      <ModalMolecule isModal={confirmationAccount}>
        <ConfirmationAuth setConfirmationAccounth={setConfirmationAccounth} />
      </ModalMolecule>
      <ChannelsEmpty setIsOpenModal={setIsOpenModal} />
    </StyledChannelSection>
  );
};
