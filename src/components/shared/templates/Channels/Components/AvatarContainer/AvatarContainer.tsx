import { FC, useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { StyledAvtarContainer, WrapperAvatar } from './AvatarContainer.styled';
import { ICustomAvatar } from './AvatarContainer.interface';

const data = [
  {
    id: '1',
    name: 'Robot 1.svg',
  },
  { id: '2', name: 'Robot 2.svg' },
  { id: '3', name: 'Robot 3.svg' },
  {
    id: '4',
    name: 'Mujer.svg',
  },
  {
    id: '5',
    name: 'Mujer 2.svg',
  },
  { id: '6', name: 'Mujer 3.svg' },
  { id: '7', name: 'Hombre 1.svg' },
  { id: '8', name: 'Hombre 2.svg' },
  { id: '9', name: 'Hombre 3.svg' },
  { id: '10', name: 'Mascota 1.svg' },
  { id: '11', name: 'Mascota 2.svg' },
  { id: '12', name: 'Mascota 3.svg' },
];

export const AvatarContainer: FC<ICustomAvatar> = ({
  setCustomAvatar,
  setIsSection,
}) => {
  const [active, setActive] = useState<string>('');
  const handleToggle = (id: string, name: string) => {
    setActive(id);
    setCustomAvatar(name);
    setIsSection(4);
  };
  return (
    <StyledAvtarContainer>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <WrapperAvatar
              focused={item.id === active}
              onClick={() => handleToggle(item.id, item.name)}>
              <SVGIcon iconFile={`/avatars/${item.name}`} />
            </WrapperAvatar>
          </div>
        ))}
      </div>
    </StyledAvtarContainer>
  );
};
