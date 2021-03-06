import { FC, useState, useCallback, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ChannelsListHeader } from '../Components/ChannelsListHeader/ChannelsListHeader';
import { StyledChannelSection } from './ChannelsSection.styled';
import { ChannelsEmpty } from '../Components/ChannelsEmpty/ChannelsEmpty';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { AddChannel } from '../Components/AddChannel/AddChannel';
import { WebChatSection } from '../Components/WebChatSection/WebChatSection';
import { FacebookComponent } from '../Components/FacebookSection/FacebookSection';
import { ConfirmationAuth } from '../Components/FacebookSection/Components/ConfirmationAuth/ConfirmationAuth';
import { InstagramSection } from '../Components/InstagramSection/InstagramSection/InstagramSection';
import { ChannelList } from '../Components/ChannelList/ChannelList';
import {
  getAllChannel,
  getDevicedStatusWassenger,
  getNewDevicedIDWassenger,
  getWassengerQR,
} from '../../../../../api/channels';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import {
  setlistChannel,
  setScript,
} from '../../../../../redux/slices/channels/list-channel';
import { RootState } from '../../../../../redux';
import { DeleteChannel } from '../Components/DeleteChannel/DeleteChannel';
import { UnOfficialWhatsAppComponent } from '../Components/WhatsappSection/UnOfficialWhatsapp/UnOfficialWhatsapp';
import { OfficialWhatsappComponent } from '../Components/WhatsappSection/OfficialWhatsapp/OfficialWhatsapp';
import { NotificationDiviceCreated } from '../Components/WhatsappSection/Components/NotificationDiviceCreated/NotificationDiviceCreated';
import { setImageQR } from '../../../../../redux/slices/channels/integration-with-qr';
import {
  IPropsScripts,
  ListChannel,
} from '../../../../../models/channels/channel';
import { websocketContext } from '../../../../../chat';
import { ScriptBuilder } from '../Components/WebChatSection/Components/ScriptBuilder/ScriptBuilder';

export const ChannelsSection: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSectionWebChat, setIsSectionWebChat] = useState<boolean>(false);
  const [seletedComponent, setSeletedComponent] = useState<string>('');
  const [showDivice, setShowDivice] = useState<boolean>(false);

  const [
    selectedByComponentUnOfficialWhatsapp,
    setSelectedByComponentUnOfficialWhatsapp,
  ] = useState<number>(1);
  const [confirmationAccount, setConfirmationAccounth] =
    useState<boolean>(false);

  const showAlert = useToastContext();
  const socket: any = useContext(websocketContext);
  const { listChannel } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );

  const dispatch = useAppDispatch();
  let timer: NodeJS.Timeout;
  const handleDiveceCreate = async () => {
    try {
      const response = await getNewDevicedIDWassenger();
      if (response === 'Device created') {
        timer = setInterval(async () => {
          const result = await getDevicedStatusWassenger();
          if (result.success === false) {
            setIsSectionWebChat(false);
          } else {
            setShowDivice(true);
            setIsSectionWebChat(false);
            clearInterval(timer);
          }
        }, 30000);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  const handleClickQR = async () => {
    try {
      const response = await getWassengerQR();
      if (response.success !== false) {
        dispatch(setImageQR(response));
      } else {
        dispatch(setImageQR(''));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const getChannelList = useCallback(async () => {
    try {
      const response = await getAllChannel();
      if (response.success === false) {
        dispatch(setlistChannel({} as ListChannel));
      } else {
        dispatch(setlistChannel(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  // socket.on("webchatScriptDone", { scriptJS, scriptCSS, div })
  useEffect(() => {
    getChannelList();
  }, [getChannelList]);

  useEffect(() => {
    socket.on('webchatScriptDone', (script: IPropsScripts) => {
      dispatch(setScript(script));
      getChannelList();
    });
  }, [dispatch, getChannelList, socket]);

  return (
    <StyledChannelSection>
      {showDivice === true ? (
        <NotificationDiviceCreated
          setIsSectionWebChat={setIsSectionWebChat}
          setShowDivice={setShowDivice}
          handleClickQR={handleClickQR}
          setSelectedByComponentUnOfficialWhatsapp={
            setSelectedByComponentUnOfficialWhatsapp
          }
          setSeletedComponent={setSeletedComponent}
        />
      ) : null}

      <ChannelsListHeader setIsOpenModal={setIsOpenModal} />
      <ModalMolecule isModal={isOpenModal}>
        <AddChannel
          setIsOpenModal={setIsOpenModal}
          setIsSectionWebChat={setIsSectionWebChat}
          setSeletedComponent={setSeletedComponent}
          listChannel={listChannel}
        />
      </ModalMolecule>
      <ModalMolecule isModal={isSectionWebChat}>
        {seletedComponent === 'webchat' ? (
          <WebChatSection
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
            setSeletedComponent={setSeletedComponent}
          />
        ) : null}
        {seletedComponent === 'unofficialWhatsApp' ? (
          <UnOfficialWhatsAppComponent
            whatsappUnOfficial={!!listChannel.unofficialWhatsApp}
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
            handleDiveceCreate={handleDiveceCreate}
            handleClickQR={handleClickQR}
            selectedByComponentUnOfficialWhatsapp={
              selectedByComponentUnOfficialWhatsapp
            }
            setSelectedByComponentUnOfficialWhatsapp={
              setSelectedByComponentUnOfficialWhatsapp
            }
          />
        ) : null}
        {seletedComponent === 'facebook' ? (
          <FacebookComponent
            setConfirmationAccounth={setConfirmationAccounth}
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'instagram' ? (
          <InstagramSection
            setIsSectionWebChat={setIsSectionWebChat}
            hasMessengerAccount={!!listChannel.facebook}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'DeleteChannel' ? (
          <DeleteChannel setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
        {seletedComponent === 'officialWhatsApp' ? (
          <OfficialWhatsappComponent
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'script' ? (
          <ScriptBuilder setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
      </ModalMolecule>
      <ModalMolecule isModal={confirmationAccount}>
        <ConfirmationAuth setConfirmationAccounth={setConfirmationAccounth} />
      </ModalMolecule>
      {!listChannel?.facebook &&
      !listChannel?.officialWhatsApp &&
      !listChannel?.unofficialWhatsApp ? (
        <ChannelsEmpty setIsOpenModal={setIsOpenModal} />
      ) : (
        <ChannelList
          listChannel={listChannel}
          setSeletedComponent={setSeletedComponent}
          setIsSectionWebChat={setIsSectionWebChat}
        />
      )}
    </StyledChannelSection>
  );
};
