import { FC, useState } from 'react';
import { ChannelsListHeader } from '../Components/ChannelsListHeader/ChannelsListHeader';
import {
  StyledChannelSection,
  StyledComponent,
} from './ChannelsSection.styled';
import { ChannelsEmpty } from '../Components/ChannelsEmpty/ChannelsEmpty';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { AddChannel } from '../Components/AddChannel/AddChannel';
import { SectionWebChat } from '../Components/SectionWebChat/SectionWebChat';

export const ChannelsSection: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSectionWebChat, setIsSectionWebChat] = useState<boolean>(false);
  const [seletedComponent, setSeletedComponent] = useState<string>('');
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
        ) : (
          <StyledComponent>
            {' '}
            <button type="button" onClick={() => setIsSectionWebChat(false)}>
              Esta pagina esta en construcción CERRAR X
            </button>
          </StyledComponent>
        )}
      </ModalMolecule>
      <ChannelsEmpty setIsOpenModal={setIsOpenModal} />
    </StyledChannelSection>
  );
};
