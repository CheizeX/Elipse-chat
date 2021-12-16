import styled from 'styled-components';
import { IPropsComponentReview } from './ReviewChart.interface';

export const StyledReviewChart = styled.section`
  width: 548px;
  height: 401px;
  border-radius: 10px;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 17px;
  }
`;
export const StyledReviewChatsHeader = styled.div<IPropsComponentReview>`
  width: 100%;
  height: 75px;
  display: flex;
  padding-left: 28px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-bottom: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
  & > button {
    margin-right: 23px;
    cursor: pointer;
    & > div {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
    }
    &:disabled {
      cursor: not-allowed;
    }
    & > div {
      height: 33px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      & span {
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        margin-right: 3px;
      }
      & > :first-child {
        & > div {
          padding-top: 2px;
          padding-left: 4px;
          & > div {
            & > svg {
              width: 15px;
              height: 17px;
              & > :first-child {
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[6]};
                }
              }
            }
          }
        }
      }
      & > :last-child {
        & > div {
          width: 10px;
          margin-left: 6px;
          margin-top: 1px;
          & > div {
            & > svg {
              width: 8px;
              height: 4px;
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[3]};
              }
            }
          }
        }
      }
    }
  }
  & > div {
    z-index: 1;
    & > :nth-child(1) {
      display: ${({ close }) => (close && close === true ? 'none' : null)};
    }
  }
`;
export const StyledChart = styled.div`
  width: 531px;
  height: 258px;
`;
