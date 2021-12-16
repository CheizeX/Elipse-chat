import { FC } from 'react';

import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { LinkToMolecule } from '../../../../molecules/LinkTo/LinkTo';
import { IPropsChannelAdd } from './SectionWhatsApp.interface';
import {
  StyledAddWhatsApp,
  StyledLink,
  StyledHeaderChannelAdd,
  StyledBodyAddChannel,
  StyledFooterAddChannel,
  StyledQR,
} from './SectionWhatsApp.styled';

const dataWhatsApp = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Vincula tu número de teléfono móvil',
  },
  {
    num: 3,
    message: 'Asigna tus agentes',
  },
  {
    num: 4,
    message: '¡Listo!',
  },
];

export const SectionWhatsAppComponent: FC<IPropsChannelAdd> = ({
  setIsSectionWebChat,
}) => {
  return (
    <StyledAddWhatsApp>
      <StyledHeaderChannelAdd>
        <Text>Añadiendo canal de WhatsApp</Text>
        <button onClick={() => setIsSectionWebChat(false)} type="button">
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderChannelAdd>
      <StyledBodyAddChannel>
        <div>
          <div>
            {dataWhatsApp.map((item) => (
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
          <div>
            <div>
              <Text>
                Escanea este código QR desde tu aplicación de Whatsapp.
              </Text>
              <Text>
                Al escanear este código QR estás aceptando nuestros terminos y
                condiciones.
              </Text>
            </div>
            <StyledQR>
              {/* <img
                src="https://api.chat-api.com/instance376860/qr_code?token=qwm88u1n60clkvu9"
                alt="qr"
              /> */}
            </StyledQR>
            <div>
              <StyledLink>
                <div>
                  <p>Asegúrate de seguir</p>
                  <LinkToMolecule color="#2477ff" text="esta guia" />
                  <p>para asegurar</p>
                </div>
                <p>una correcta integración de whatsapp.</p>
              </StyledLink>
            </div>
          </div>
        </div>
      </StyledBodyAddChannel>
      <StyledFooterAddChannel>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
        />
        <ButtonMolecule text="Siguiente" size={Size.MEDIUM} />
      </StyledFooterAddChannel>
    </StyledAddWhatsApp>
  );
};
