import { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  ButtonState,
  Size,
} from '../../../../atoms/Button/Button';
import { StyledRejectSaveImage } from './RejectSaveImage.styled';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IRejectSaveImage } from './RejectSaveImage.interface';

export const RejectSaveImage: FC<IRejectSaveImage> = ({
  handleRejectSaveImage,
  isLoanding,
}) => {
  return (
    <StyledRejectSaveImage>
      <div>
        <SVGIcon iconFile="/icons/warning.svg" />
      </div>
      <div>
        <Text>Presentamos un error al guardar los datos</Text>
        <Text>
          En ocasiones el proveedor de servicio puede fallar te recomendamos
          guardar nuevamente los datos y empezar a disfrutar de los servicios de
          mensajería que ofrece Wassenger.
        </Text>
      </div>
      <div>
        <ButtonMolecule
          text="Guardar"
          size={Size.MEDIUM}
          state={isLoanding ? ButtonState.LOADING : ButtonState.NORMAL}
          onClick={handleRejectSaveImage}
        />
      </div>
    </StyledRejectSaveImage>
  );
};
