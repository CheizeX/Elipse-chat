import { FC } from 'react';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  StyledWrapperLinkInstagram,
  StyledHeaderLinkInstagram,
  StyledBodyLinkInstagram,
  WrapperSelectorInstagramAccount,
} from './LinkInstagramAccount.styled';
import { ILinkInstagramAccount } from './LinkInstagramAccount.interface';
import { Checkbox } from '../../../../../../atoms/Checkbox/Checkbox';

export const LinkInstagramAccount: FC<ILinkInstagramAccount> = ({
  dataInfoIntagram,
  isActiveCheckbox,
  setIsActiveCheckbox,
}) => {
  const handleToggle = () => {
    setIsActiveCheckbox(!isActiveCheckbox);
  };
  return (
    <StyledWrapperLinkInstagram>
      <StyledHeaderLinkInstagram>
        <Text>Seleciona tu cuenta de Instagram</Text>
      </StyledHeaderLinkInstagram>
      <StyledBodyLinkInstagram>
        <div>
          <WrapperSelectorInstagramAccount isActiveCheckbox={isActiveCheckbox}>
            <div>
              <img
                src={`${dataInfoIntagram && dataInfoIntagram.image}`}
                alt="No se encontro la imagen"
              />
            </div>
            <div>
              <Text>{dataInfoIntagram && dataInfoIntagram.name}</Text>
              <Text>{dataInfoIntagram && dataInfoIntagram.username}</Text>
            </div>
            <div>
              <div>
                <Checkbox checked={isActiveCheckbox} onClick={handleToggle} />
                <Text>Vincular cuenta de instagram</Text>
              </div>
            </div>
          </WrapperSelectorInstagramAccount>
        </div>
      </StyledBodyLinkInstagram>
    </StyledWrapperLinkInstagram>
  );
};
