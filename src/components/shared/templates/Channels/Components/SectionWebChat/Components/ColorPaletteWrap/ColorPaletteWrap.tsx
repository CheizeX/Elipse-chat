import { FC, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import {
  ButtonMolecule,
  ButtonVariant,
} from '../../../../../../atoms/Button/Button';
import { Text } from '../../../../../../atoms/Text/Text';
import { ICustomColor } from './ColorPaletteWrap.interface';
import {
  StyledColorPaletteWrap,
  StyledWrapperColor,
  StyledTagColor,
  StyledCustomColor,
  StyledByColor,
} from './ColorPaletteWrap.styled';

export const ColorPaletteWrap: FC<ICustomColor> = ({
  primaryColor,
  secondaryColor,
  customIsColor,
  setSecundaryColor,
  setPrimaryColor,
  setCustomIsColor,
}) => {
  // const [isOpenSectionColor, setIsSectionColor] = useState<boolean>(false);
  const [isOpenSectionColors, setIsSectionColors] = useState<string>('byColor');
  // byColor, customizeColor, gradient

  const ColorPaletteArrays = [
    {
      name: '0',
      color: '#6e28bf',
      secondColor: ' #65edfa',
    },
    {
      name: '1',
      color: '#7c3ab7',
      secondColor: '#ff9aad',
    },
    {
      name: '2',
      color: '#ff5858',
      secondColor: '#f09819',
    },
    {
      name: '3',
      color: '#0a0e88',
      secondColor: '#00b1ce',
    },
    {
      name: '4',
      color: ' #ff4e6f',
      secondColor: '#fb9168',
    },
    {
      name: '5',
      color: '#047c8d',
      secondColor: '#2ff289',
    },
    {
      name: '6',
      color: '#2a27da',
      secondColor: '#00ccff',
    },
    {
      name: '7',
      color: '#31003e',
      secondColor: '#c3286e',
    },
    {
      name: '8',
      color: '#29323c',
      secondColor: '#485563',
    },
    {
      name: '9',
      color: '#4facfe',
      secondColor: '#00f2fe',
    },
    {
      name: '10',
      color: '#8a716d',
      secondColor: '#e8b794',
    },
    {
      name: '11',
      color: '#3aa560',
      secondColor: '#b7e66c',
    },
    {
      name: '12',
      color: '#ff9a9e',
      secondColor: '#facbc4',
    },
    {
      name: '13',
      color: '#98033a',
      secondColor: '#f74f28',
    },
    {
      name: '14',
      color: customIsColor ? `${primaryColor}` : '#fff',
      secondColor: customIsColor ? `${primaryColor}` : '#fff',
    },
  ];
  const handleSelectTagColor = (color1: string, color2: string, id: string) => {
    setPrimaryColor(color1);
    setSecundaryColor(color2);
    if (id !== '14') {
      setCustomIsColor(false);
    }
  };
  const seletedColor = () => {
    setIsSectionColors('customizeColor');
    setPrimaryColor(primaryColor);
  };
  const seletedGradient = () => {
    // setIsSectionColors('gradient');
  };
  const hadleByColor = () => {
    setCustomIsColor(true);
    setIsSectionColors('byColor');
  };
  const handleClickColor = () => {
    setIsSectionColors('byColor');
    setPrimaryColor(primaryColor);
  };
  return (
    <div>
      <Text>Selecciona un color</Text>
      <StyledColorPaletteWrap>
        {isOpenSectionColors === 'byColor' ? (
          <div>
            <StyledByColor>
              {ColorPaletteArrays?.map((item) => (
                <StyledWrapperColor
                  key={item.name}
                  name={item.name}
                  checked={primaryColor === item.color}
                  primaryColor={item.color}
                  secondaryColor={item.secondColor}
                  customIsColor={customIsColor}
                  onClick={() =>
                    handleSelectTagColor(
                      item.color,
                      item.secondColor,
                      item.name,
                    )
                  }>
                  <StyledTagColor
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    customIsColor={customIsColor}
                    viewBox="-4 -4 32 32">
                    <polyline points="20 6 9 17 4 12" />
                  </StyledTagColor>
                </StyledWrapperColor>
              ))}
            </StyledByColor>
            <div>
              <ButtonMolecule
                text="Color"
                onClick={seletedColor}
                variant={ButtonVariant.OUTLINED}
              />
              <ButtonMolecule text="Gradiente" onClick={seletedGradient} />
            </div>
          </div>
        ) : null}
        {isOpenSectionColors === 'customizeColor' ? (
          <StyledCustomColor color={primaryColor}>
            <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
            <div>
              <Text>Hex</Text>
              <div>
                <HexColorInput
                  color={primaryColor}
                  prefixed
                  onChange={setPrimaryColor}
                />
              </div>
            </div>
            <div>
              <ButtonMolecule
                text="Atras"
                variant={ButtonVariant.OUTLINED}
                onClick={handleClickColor}
              />
              <ButtonMolecule text="Confirmar" onClick={hadleByColor} />
            </div>
          </StyledCustomColor>
        ) : null}
      </StyledColorPaletteWrap>
    </div>
  );
};
