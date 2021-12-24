import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../../../../../../redux/hook/hooks';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  IPropsAuthFacebook,
  IPropsSelector,
} from './FacebookAccountSelector.interface';
import {
  StyledFacebookAccountSelector,
  StyledHeaderAcount,
  StyledWrapperButton,
  StyledBodyWrapperSelector,
  Styledbutton,
  StyledButtonAuth,
  StyledBody,
} from './FacebookAccountSelector.styled';

export const FacebookAccountSelector: FC<IPropsSelector & IPropsAuthFacebook> =
  ({ setDatosAuth, setSelectedComponent }) => {
    const { dataInfoFacebook } = useAppSelector(
      (state) => state.channel.chatContainerAuthFacebookState,
    );
    const [isActive, setIsActive] = useState<number>(0);

    const handleClick = (
      pageId: string,
      accessToken: string,
      index: number,
    ) => {
      setIsActive(index);
      setSelectedComponent(3);
      setDatosAuth({
        pageId,
        accessToken,
      });
    };
    return (
      <StyledFacebookAccountSelector>
        <StyledHeaderAcount>
          <Text>Seleciona una de tus cuentas de facebook</Text>
        </StyledHeaderAcount>
        <StyledBody>
          <div>
            {dataInfoFacebook?.map((item, index) => (
              <div key={item.id}>
                <StyledBodyWrapperSelector>
                  <StyledButtonAuth
                    onClick={() =>
                      handleClick(item.id, item.access_token, index)
                    }>
                    <StyledWrapperButton isFocused={isActive === index}>
                      <Styledbutton isFocused={isActive === index} />
                    </StyledWrapperButton>
                  </StyledButtonAuth>
                  <Text>{item.name}</Text>
                </StyledBodyWrapperSelector>
              </div>
            ))}
          </div>
        </StyledBody>
      </StyledFacebookAccountSelector>
    );
  };
