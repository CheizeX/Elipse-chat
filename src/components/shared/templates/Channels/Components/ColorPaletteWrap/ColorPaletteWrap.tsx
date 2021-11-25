import { FC, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { ButtonMolecule, ButtonVariant } from '../../../../atoms/Button/Button';
import { Text } from '../../../../atoms/Text/Text';
import { ICustomColor } from './ColorPaletteWrap.interface';
import {
  StyledColorPaletteWrap,
  StyledWrapperColor,
  StyledTagColor,
  StyledCustomColor,
} from './ColorPaletteWrap.styled';

export const ColorPaletteWrap: FC<ICustomColor> = ({
  setCustomColor,
  color,
}) => {
  const [isOpenSectionColor, setIsSectionColor] = useState<boolean>(false);
  const [customIsColor, setCustomIsColor] = useState<boolean>(false);

  const ColorPaletteArrays = [
    { name: '0', color: '#3AA4FF' },
    { name: '1', color: '#8BDFD0' },
    { name: '2', color: '#F78F28' },
    { name: '3', color: '#4D5ECA' },
    { name: '4', color: '#FA5F5F' },
    { name: '5', color: '#439152' },
    { name: '6', color: '#8520D0' },
    { name: '7', color: '#D03AC9' },
    { name: '8', color: '#707070' },
    { name: '9', color: customIsColor ? `${color}` : '#fff' },
  ];
  const handleSelectTagColor = (tag: string, id: string) => {
    setCustomColor(tag);
    if (id !== '9') {
      setCustomIsColor(false);
    }
  };
  const seletedColor = () => {
    setIsSectionColor(!isOpenSectionColor);
    setCustomColor(color);
    setCustomIsColor(true);
  };
  const handleClickColor = () => {
    setIsSectionColor(!isOpenSectionColor);
    setCustomColor(color);
  };
  return (
    <>
      <Text>Selecciona un color</Text>
      <StyledColorPaletteWrap>
        {!isOpenSectionColor ? (
          <>
            <div>
              {ColorPaletteArrays?.map((item) => (
                <StyledWrapperColor
                  key={item.name}
                  name={item.name}
                  checked={color === item.color}
                  color={!customIsColor ? '#fff' : color}
                  customIsColor={customIsColor}
                  onClick={() => handleSelectTagColor(item.color, item.name)}>
                  <StyledTagColor color={color} viewBox="-4 -4 32 32">
                    <polyline points="20 6 9 17 4 12" />
                  </StyledTagColor>
                </StyledWrapperColor>
              ))}
            </div>
            <ButtonMolecule text="Personalizar" onClick={handleClickColor} />
          </>
        ) : null}
        {isOpenSectionColor ? (
          <StyledCustomColor color={color}>
            <HexColorPicker color={color} onChange={setCustomColor} />
            <div>
              <Text>Hex</Text>
              <div>
                <HexColorInput
                  color={color}
                  prefixed
                  onChange={setCustomColor}
                />
              </div>
            </div>
            <div>
              <ButtonMolecule
                text="Atras"
                variant={ButtonVariant.OUTLINED}
                onClick={handleClickColor}
              />
              <ButtonMolecule text="Confirmar" onClick={seletedColor} />
            </div>
          </StyledCustomColor>
        ) : null}
      </StyledColorPaletteWrap>
    </>
  );
};
