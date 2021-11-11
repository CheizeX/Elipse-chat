import React, { FC } from 'react';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import {
  StyledBackgroundLogin,
  StyledLoginWrapper,
  StyledLoginHeader,
  StyledLoginFooter,
} from './LoginViewsWrapper.styled';
import { ILoginProps } from './LoginViewWrapper.interface';

export const LoginViewsWrapper: FC<ILoginProps> = ({ children }) => {
  return (
    <StyledBackgroundLogin>
      <StyledLoginWrapper>
        <StyledLoginHeader>
          <SVGIcon iconFile="icons/logo_Icon.svg" />
          <SVGIcon iconFile="icons/Trazado_ailalia.svg" />
        </StyledLoginHeader>
        {children}
        <StyledLoginFooter>
          <span>Elipse &copy; 2021</span>
        </StyledLoginFooter>
      </StyledLoginWrapper>
    </StyledBackgroundLogin>
  );
};
