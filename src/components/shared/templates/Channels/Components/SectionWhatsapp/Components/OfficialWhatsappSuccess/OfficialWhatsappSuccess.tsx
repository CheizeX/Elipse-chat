import { FC } from 'react';
import { StyledWrapperOfficialWhatsappSuccesss } from './OfficialWhatsappSuccess.styled';
import { Text } from '../../../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';

export const OfficialWhatsAppSuccess: FC = () => {
  return (
    <StyledWrapperOfficialWhatsappSuccesss>
      <div>
        <SVGIcon iconFile="/icons/success.svg" />
      </div>
      <div>
        <Text>Se ha añadido tu canal de whatsApp satisfactoriamente.</Text>

        <Text>
          Ya puedes disfrutar de todos los beneficios que ofrece la mensajería
          de whatsapp.
        </Text>
      </div>
    </StyledWrapperOfficialWhatsappSuccesss>
  );
};
