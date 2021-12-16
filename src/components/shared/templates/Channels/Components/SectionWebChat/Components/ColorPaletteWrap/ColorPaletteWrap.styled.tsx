import styled, { css } from 'styled-components';
import { IPropsColorWrap } from './ColorPaletteWrap.interface';

export const StyledColorPaletteWrap = styled.div`
  width: 16.2rem;
  height: fit-content;
  margin: auto;
  padding: 0.5rem 0.75rem 0 0.75rem;
  margin-top: 0.6rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: 100%;
    // margin: 6px 0 16px 4px;
    // height: 10rem;
    margin: 0.3rem 0 1rem 0.25rem;
    min-height: 14rem;
    & > button {
      display: flex;
      justify-content: center;
      margin: 2.25rem auto;
    }
  }
`;
export const StyledTagColor = styled.svg<IPropsColorWrap>`
  fill: none;
  height: 2.3rem;
  stroke: ${({ theme }) => theme.Colors.grays[10]};
  stroke-width: 3px;
  width: 2.3rem;
`;
export const StyledCustomColor = styled.div`
  & > :first-child {
    margin: auto;
    height: 10.5rem;
    margin-bottom: 0.6rem;
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 0.8rem;
      margin-right: 0.5rem;
    }
    & > div {
      display: flex;
      padding: 0.3rem;
      background: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 20px;
      width: 8.6rem;
      border: 20%;
      justify-content: center;
      align-items: center;
      & > input {
        outline: none;
        background: ${({ theme }) => theme.Colors.grays[9]};
        border: none;
        width: 7rem;
        text-align: center;
      }
    }
  }
  & > :last-child {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
    & > button {
      width: 100px;
      margin-bottom: 1rem;
    }
  }
`;

export const StyledWrapperColor = styled.div<IPropsColorWrap>`
  ${({ secondaryColor, primaryColor }) => `background: linear-gradient(
    115deg,
    ${primaryColor} 0%,
    ${secondaryColor} 100%
  ) `};
  border-radius: 3px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  display: inline-block;
  & :hover {
    cursor: pointer;
  }
  ${({ checked }) =>
    !checked &&
    css`
      & svg {
        & polyline {
          display: none;
        }
      }
    `}
`;
