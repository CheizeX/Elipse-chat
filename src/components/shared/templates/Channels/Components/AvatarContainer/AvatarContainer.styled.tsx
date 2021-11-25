import styled from 'styled-components';
import { IAvatarProps } from './AvatarContainer.interface';

export const StyledAvtarContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  width: 304px;
  margin-top: 10px;
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    position: relative;
    border-radius: 10px;
    width: 262px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 15rem;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    & > button {
      /* margin: 30px auto 20px auto;
      display: flex; */
      /* justify-content: flex-end; */
      /* align-items: flex-end; */
    }
    & > div {
      margin: 10px 6px;
      justify-content: center;
      display: flex;
      padding: 2px 7px 0px 7px;
    }
  }
`;
export const WrapperAvatar = styled.button<IAvatarProps>`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0px 7px
    ${({ theme, focused }) => (focused ? theme.Colors.grays[5] : 'transparent')};
  & > div {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.Colors.grays[10]};
    & * {
      & > svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;
