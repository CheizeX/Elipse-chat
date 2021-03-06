import styled, { css } from 'styled-components';
import { IPropsFilterDate } from './FilterDate.interface';

export const StyledRangeDate = styled.div<IPropsFilterDate>`
  width: 215px;
  height: 250px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  box-shadow: 0px 0px 7px 0px #0000004a;
  position: absolute;
  top: 64px;
  right: 20px;
  ${({ datePicker }) =>
    datePicker &&
    css<IPropsFilterDate>`
      height: 320px;
    `}
`;

export const StyledHeaderRageDate = styled.div`
  width: 215px;
  height: 43px;
  padding: 14px 13px 12px 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    line-height: 17px;
  }
  & > button {
    width: 14px;
    & > div {
      & > div {
        & > div {
          & > svg {
            width: 10px;
            height: 10px;
            cursor: pointer;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
        }
      }
    }
  }
`;

export const StyledBodyRageDate = styled.div`
  width: 215px;
  height: 100%;
  margin: 10px 0;
  max-height: 166px;
`;
