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
import { IPropsChannelAdd } from './SectionUnOfficialWhatsApp.interface';
import {
  StyledAddWhatsApp,
  StyledHeaderChannelAdd,
  StyledBodyAddChannel,
  StyledFooterAddChannel,
} from './SectionUnOfficialWhatsApp.styled';
import { getInstanceQR } from '../../../../../../../api/channels';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { setIntegrationQRWhatsApp } from '../../../../../../../redux/slices/channels/integration-with-qr';
import { useAppDispatch } from '../../../../../../../redux/hook/hooks';

const dataUnOfficialWhatsApp = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Continuar con el proceso',
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

export const SectionUnOfficialWhatsAppComponent: FC<IPropsChannelAdd> = ({
  setIsSectionWebChat,
  getChannelList,
}) => {
  const [selectedByComponent, setSelectedByComponent] = useState<number>(1);
  const [isChecked, setIsChecked] = useState(false);
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const handlePrev = () => {
    setSelectedByComponent(selectedByComponent - 1);
  };

  const handleSubmit = async () => {
    try {
      const result = await getInstanceQR();
      if (result.success === false) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message:
            'Ops algo salio mal intentelo nuevamente o comuníquese con su proveedor de servicios.',
        });
      } else {
        setSelectedByComponent(selectedByComponent + 1);
        dispatch(setIntegrationQRWhatsApp(result));
        getChannelList();
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  return (
    <StyledAddWhatsApp>
      <StyledHeaderChannelAdd>
        <Text>Añadiendo canal de WhatsApp No Official</Text>
        <button onClick={() => setIsSectionWebChat(false)} type="button">
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderChannelAdd>
      <StyledBodyAddChannel selectedByComponent={selectedByComponent}>
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
          {selectedByComponent === 1 ? (
            <ConfirmationQR isChecked={isChecked} setIsChecked={setIsChecked} />
          ) : null}
          {selectedByComponent === 2 ? <ViewQR /> : null}
        </div>
      </StyledBodyAddChannel>
      <StyledFooterAddChannel>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={handlePrev}
          state={
            selectedByComponent <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL
          }
        />
        <ButtonMolecule
          text="Siguiente"
          size={Size.MEDIUM}
          onClick={handleSubmit}
          state={!isChecked ? ButtonState.DISABLED : ButtonState.NORMAL}
        />
      </StyledFooterAddChannel>
    </StyledAddWhatsApp>
  );
};
