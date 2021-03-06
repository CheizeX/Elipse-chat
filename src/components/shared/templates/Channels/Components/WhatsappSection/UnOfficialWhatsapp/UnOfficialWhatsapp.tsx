/* eslint-disable sonarjs/cognitive-complexity */
// eslint-disable-next-line sonarjs/cognitive-complexity
import { FC, useState } from 'react';
import { ConfirmationQR } from '../Components/ConfirmationQR/ConfirmationQR';

import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { ViewQR } from '../Components/ViewQR/ViewQR';
import { IPropsChannelAdd } from './UnOfficialWhatsApp.interface';
import {
  StyledAddWhatsApp,
  StyledHeaderChannelAdd,
  StyledBodyAddChannel,
  StyledFooterAddChannel,
} from './UnOfficialWhatsApp.styled';
// import { getInstanceQR } from '../../../../../../../api/channels';
// import { setIntegrationQRWhatsApp } from '../../../../../../../redux/slices/channels/integration-with-qr';
// import { useAppDispatch } from '../../../../../../../redux/hook/hooks';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { WhatsappExists } from '../Components/WhatsappExists/WhatsappExists';
import { AddDivice } from '../Components/AddDivice/AddDivice';
import {
  getDevicedStatusWassenger,
  readWhatsappDevice,
  resetWassenger,
} from '../../../../../../../api/channels';
import { OfficialWhatsAppSuccess } from '../Components/OfficialWhatsappSuccess/OfficialWhatsappSuccess';
import { OfficialWhatsappRejected } from '../Components/OfficialWhatsappRejected/OfficialWhatsappRejected';
import { useAppSelector } from '../../../../../../../redux/hook/hooks';
import { RejectSaveImage } from '../../RejectSaveImage/RejectSaveImage';

const dataUnOfficialWhatsApp = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Creando dispositivo',
  },
  {
    num: 3,
    message: 'Vincula tu número de teléfono móvil',
  },
  {
    num: 4,
    message: '¡Listo!',
  },
];

export const UnOfficialWhatsAppComponent: FC<IPropsChannelAdd> = ({
  selectedByComponentUnOfficialWhatsapp,
  setSelectedByComponentUnOfficialWhatsapp,
  setIsSectionWebChat,
  handleClickQR,
  getChannelList,
  whatsappUnOfficial,
  handleDiveceCreate,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [unLink, setUnLink] = useState<boolean>(false);
  const [isLoanding, setIsLoanding] = useState<boolean>(false);
  const showAlert = useToastContext();
  const { imageQR } = useAppSelector(
    (state) => state.channel.chatIntegrationQRState,
  );

  const handlePrev = () => {
    setSelectedByComponentUnOfficialWhatsapp(
      selectedByComponentUnOfficialWhatsapp - 1,
    );
  };
  const handleNext = () => {
    setSelectedByComponentUnOfficialWhatsapp(
      selectedByComponentUnOfficialWhatsapp + 1,
    );
  };

  const handleClickRejectSaveImage = async () => {
    try {
      setIsLoanding(true);
      const response = await readWhatsappDevice();
      if (response.success === false) {
        setIsLoanding(false);
        setSelectedByComponentUnOfficialWhatsapp(6);
      } else {
        setIsLoanding(false);
        setSelectedByComponentUnOfficialWhatsapp(4);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (selectedByComponentUnOfficialWhatsapp === 3) {
        setIsLoanding(true);
        setTimeout(async () => {
          const response = await readWhatsappDevice();
          if (response === 'SAVED') {
            await getChannelList();
            setIsLoanding(false);
            handleNext();
            // setIsSectionWebChat(false);
          } else {
            setSelectedByComponentUnOfficialWhatsapp(6);
          }
        }, 10000);
      } else if (
        selectedByComponentUnOfficialWhatsapp === 4 ||
        selectedByComponentUnOfficialWhatsapp === 5
      ) {
        setIsLoanding(true);
        const response = await readWhatsappDevice();
        if (response === 'SAVED') {
          await getChannelList();
          setIsLoanding(false);
          // setIsSectionWebChat(false);
        }
        setSelectedByComponentUnOfficialWhatsapp(1);
        setIsSectionWebChat(false);
      } else {
        handleNext();
        // authorize
        // const result = await getInstanceQR();
        // if (result.success === false) {
        //   showAlert?.addToast({
        //     alert: Toast.ERROR,
        //     title: 'ERROR',
        //     message:
        //       'Ops algo salio mal intentelo nuevamente o comuníquese con su proveedor de servicios.',
        //   });
        // } else {
        //   dispatch(setIntegrationQRWhatsApp(result));
        // getChannelList();
        // }
        handleDiveceCreate();
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleReset = async () => {
    try {
      // enpoit para disvincular el dispositivo.
      handleNext();
      const response = await resetWassenger();
      if (response.success === false) {
        const isAutorize = await getDevicedStatusWassenger();
        if (isAutorize.success === false) {
          setSelectedByComponentUnOfficialWhatsapp(5);
        } else {
          setSelectedByComponentUnOfficialWhatsapp(3);
        }
      } else {
        await handleClickQR();
        setSelectedByComponentUnOfficialWhatsapp(3);
      }
    } catch (err) {
      setSelectedByComponentUnOfficialWhatsapp(3);
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleOnClose = () => {
    setSelectedByComponentUnOfficialWhatsapp(1);
    setIsSectionWebChat(false);
  };
  return (
    <StyledAddWhatsApp>
      <StyledHeaderChannelAdd>
        <Text>Añadiendo canal de WhatsApp No Oficial</Text>
        <button onClick={handleOnClose} type="button">
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderChannelAdd>
      <StyledBodyAddChannel
        selectedByComponent={selectedByComponentUnOfficialWhatsapp}>
        <div>
          <div>
            {dataUnOfficialWhatsApp.map((item) => (
              <div key={item.num}>
                <div>
                  <div>{item.num}</div>
                  <Text>{item.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          {!whatsappUnOfficial &&
          selectedByComponentUnOfficialWhatsapp === 1 ? (
            <ConfirmationQR isChecked={isChecked} setIsChecked={setIsChecked} />
          ) : null}
          {whatsappUnOfficial && selectedByComponentUnOfficialWhatsapp === 1 ? (
            <WhatsappExists setUnLink={setUnLink} unLink={unLink} />
          ) : null}
          {selectedByComponentUnOfficialWhatsapp === 2 ? (
            <AddDivice whatsappUnOfficial={whatsappUnOfficial} />
          ) : null}
          {selectedByComponentUnOfficialWhatsapp === 3 ? (
            <ViewQR whatsappUnOfficial={false} handleClickQR={handleClickQR} />
          ) : null}
          {selectedByComponentUnOfficialWhatsapp === 4 ? (
            <OfficialWhatsAppSuccess />
          ) : null}
          {selectedByComponentUnOfficialWhatsapp === 5 ? (
            <OfficialWhatsappRejected />
          ) : null}
          {selectedByComponentUnOfficialWhatsapp === 6 ? (
            <RejectSaveImage
              isLoanding={isLoanding}
              handleRejectSaveImage={handleClickRejectSaveImage}
            />
          ) : null}
        </div>
      </StyledBodyAddChannel>
      <StyledFooterAddChannel>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={handlePrev}
          state={
            selectedByComponentUnOfficialWhatsapp <= 1 ||
            selectedByComponentUnOfficialWhatsapp > 4
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
        {whatsappUnOfficial ? (
          <ButtonMolecule
            text={
              selectedByComponentUnOfficialWhatsapp > 3
                ? 'Finalizar'
                : 'Siguiente'
            }
            size={Size.MEDIUM}
            onClick={
              selectedByComponentUnOfficialWhatsapp === 1
                ? handleReset
                : handleSubmit
            }
            state={
              // eslint-disable-next-line no-nested-ternary
              !unLink ||
              (selectedByComponentUnOfficialWhatsapp === 3 && !imageQR) ||
              selectedByComponentUnOfficialWhatsapp === 2
                ? ButtonState.DISABLED
                : isLoanding
                ? ButtonState.LOADING
                : ButtonState.NORMAL
            }
          />
        ) : (
          <ButtonMolecule
            text={
              selectedByComponentUnOfficialWhatsapp > 3
                ? 'Finalizar'
                : 'Siguiente'
            }
            size={Size.MEDIUM}
            onClick={handleSubmit}
            state={
              // eslint-disable-next-line no-nested-ternary
              !isChecked ||
              (selectedByComponentUnOfficialWhatsapp === 3 && !imageQR)
                ? ButtonState.DISABLED
                : isLoanding
                ? ButtonState.LOADING
                : ButtonState.NORMAL
            }
          />
        )}
      </StyledFooterAddChannel>
    </StyledAddWhatsApp>
  );
};
