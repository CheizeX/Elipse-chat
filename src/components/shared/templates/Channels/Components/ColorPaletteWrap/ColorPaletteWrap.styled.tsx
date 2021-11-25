import styled, { css } from 'styled-components';
import { IPropsColorWrap } from './ColorPaletteWrap.interface';
import { myColorSelector } from './ColorPaletteWrap.shared';

export const StyledColorPaletteWrap = styled.div`
  width: 16.2rem;
  height: 18rem;
  margin: auto;
  padding: 8px 12px 0 12px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: 100%;
    margin: 6px 0 16px 4px;
    height: 10rem;
  }
  & > button {
    margin: auto;
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
    margin-bottom: 10px;
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
      padding: 6px;
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
    }
  }
`;

export const StyledWrapperColor = styled.div<IPropsColorWrap>`
  background-color: ${({ name, theme, color }) =>
    myColorSelector(name === '0', theme.Colors.blue[1], null) ||
    myColorSelector(name === '1', theme.Colors.green[2], null) ||
    myColorSelector(name === '2', theme.Colors.orange[3], null) ||
    myColorSelector(name === '3', theme.Colors.blue[2], null) ||
    myColorSelector(name === '4', theme.Colors.orange[4], null) ||
    myColorSelector(name === '5', theme.Colors.green[5], null) ||
    myColorSelector(name === '6', theme.Colors.purples[1], null) ||
    myColorSelector(name === '7', theme.Colors.purples[5], null) ||
    myColorSelector(name === '8', theme.Colors.grays[4], null) ||
    myColorSelector(name === '9', color, theme.Colors.grays[10])};
  border-radius: 3px;
  margin: 8px 8px 8px 0;
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
