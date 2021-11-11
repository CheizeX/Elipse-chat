import React, { FC } from 'react';
import { Text } from '../../../atoms/Text/Text';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  StyledNavBarBackOffice,
  Wraper,
  TriggerElement,
  StyledAvatar,
  ArrowIcon,
  BackofficeDropdownContainer,
} from './NavBarBackOffice.styled';
import { IBackOfficeProps } from './NavBarBackOffice.interface';
import { BadgeMolecule } from '../../../molecules/Badge/Badge';
import { useAuth } from '../../../../../hooks/auth/main-auth.hook';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { setUserDataInState } from '../../../../../redux/slices/auth/user-credentials';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { DecodedToken } from '../../../../../models/users/user';
import { MyAccountSidebarOrganism } from '../../MyAccountSidebar/MyAccountSidebar';
import useDisplayElementOrNot from '../../../../../hooks/use-display-element-or-not';

export const BackOffice: FC<IBackOfficeProps> = ({ text }) => {
  const { signOut } = useAuth();

  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);
  const [myAccount, setMyAccount] = React.useState<number>(0);

  const handleNavUserDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const handleMyAccount = (number: number) => {
    setMyAccount(number);
    setIsComponentVisible(false);
  };

  // Manejo de Logout
  const handleCloseSession = async () => {
    try {
      await signOut();
      setIsComponentVisible(false);
      dispatch(setUserDataInState({} as DecodedToken));
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `signout ${error}`,
      });
    }
  };

  return (
    <>
      <StyledNavBarBackOffice>
        <Text color="#2A2A2A" size="18px" weight="600">
          {text}
        </Text>
        <Wraper>
          {/* <MessageIcon onClick={onClick ?? (() => {})}>
          {messageIcon && messageIcon()}
        </MessageIcon> */}
          {/* <BellIcon onClick={onClick ?? (() => {})}>
          {bellIcon && bellIcon()}
        </BellIcon>
        <StyledNotificationBackOffice /> */}
          <TriggerElement>
            <StyledAvatar>
              <SVGIcon iconFile="/icons/unknown_user.svg" />
            </StyledAvatar>
            <ArrowIcon onClick={handleNavUserDropdown}>
              {isComponentVisible ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </ArrowIcon>
          </TriggerElement>
          {isComponentVisible && (
            <BackofficeDropdownContainer ref={ref}>
              <button type="button" onClick={() => handleMyAccount(1)}>
                <BadgeMolecule>
                  <SVGIcon iconFile="/icons/mi-cuenta.svg" />
                  <Text size="12px" weight="600">
                    Mi cuenta
                  </Text>
                </BadgeMolecule>
              </button>
              <button type="button" onClick={handleCloseSession}>
                <BadgeMolecule>
                  <SVGIcon iconFile="/icons/cerrar-sesion.svg" />
                  <Text size="12px" weight="600">
                    Cerrar sesión
                  </Text>
                </BadgeMolecule>
              </button>
            </BackofficeDropdownContainer>
          )}
        </Wraper>
      </StyledNavBarBackOffice>
      <MyAccountSidebarOrganism
        setMyAccount={setMyAccount}
        myAccount={myAccount}
      />
    </>
  );
};
