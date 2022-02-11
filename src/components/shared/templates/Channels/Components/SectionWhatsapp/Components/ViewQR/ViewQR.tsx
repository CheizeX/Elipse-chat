import { FC } from 'react';
// import { useAppSelector } from '../../../../../../../../redux/hook/hooks';
import { Text } from '../../../../../../atoms/Text/Text';
import { LinkToMolecule } from '../../../../../../molecules/LinkTo/LinkTo';
import { StyledQR, StyledLink, StyledViewQr } from './ViewQR.styled';
import { IViewQR } from './ViewOR.interface';

export const ViewQR: FC<IViewQR> = () => {
  // const { dataInfoQR } = useAppSelector(
  //   (state) => state.channel.chatIntegrationQRState,
  // );
  return (
    <StyledViewQr>
      <div>
        <StyledLink>
          <Text>Escanea este código QR desde tu aplicación de Whatsapp.</Text>
          <Text>Al escanear este código QR estás aceptando</Text>
          <div>
            <p>nuestros</p>
            <LinkToMolecule
              href="https://elipse.ai/politicas-de-privacidad/"
              color="#2477ff"
              text="terminos y condiciones"
            />
          </div>
        </StyledLink>
        <StyledQR>
          {/* {whatsappUnOfficial ? (
            <img
              src={`https://api.wassenger.com/v1/devices/${dataInfoQR[0].instanceId}/scan?force=true&Token=${dataInfoQR[0].instanceToken}`}
              alt="qr"
            />
          ) : (
            <img
              src={`https://api.wassenger.com/v1/devices/${dataInfoQR[0].instanceId}/scan?Token=${dataInfoQR[0].instanceToken}`}
              alt="qr"
            />
          )} */}
        </StyledQR>
        <div>
          <StyledLink>
            <div>
              <p>Asegúrate de seguir</p>
              <LinkToMolecule
                href="https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=es"
                color="#2477ff"
                text="esta guia"
              />
              <p>para asegurar</p>
            </div>
            <p>una correcta integración de whatsapp.</p>
          </StyledLink>
        </div>
      </div>
    </StyledViewQr>
  );
};
