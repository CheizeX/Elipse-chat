import styled from 'styled-components';

export const StyledChannelEmpty = styled.div`
  width: 61.5rem;
  height: 34rem;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  margin: 20px auto;
  & > div {
    padding: 8.8rem;
    & > :first-child {
      width: 9.8rem;
      height: 7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      & > :first-child {
        display: flex;
        & > div {
          width: 1.6rem;
          height: 1.6rem;
        }
        & * {
          & > svg {
            width: 1.6rem;
            height: 1.6rem;
          }
        }
        & > :nth-child(1) {
          display: flex;
          top: 62px;
          right: 9px;
        }
        & > :nth-child(2) {
          display: flex;
          top: 1.1rem;
          right: 1.3rem;
        }
        & > :nth-child(3) {
          display: flex;
          top: 0px;
          right: 0px;
        }
        & > :nth-child(4) {
          display: flex;
          top: 1.25rem;
          left: 1.3rem;
        }
        & > :nth-child(5) {
          display: flex;
          top: 3.8rem;
          left: 0.5rem;
        }
      }
      & > :nth-child(2) {
        & > div {
          width: 3.5rem;
          height: 3.5rem;
          margin: 1.1rem 0 1rem 0;
          & * {
            & > svg {
              width: 3.5rem;
              height: 3.5rem;
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[3]};
              }
            }
          }
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      & > :nth-child(1) {
        color: ${({ theme }) => theme.Colors.grays[6]};
        font-size: ${({ theme }) => theme.fontSize[18]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        line-height: 1.3rem;
        margin-bottom: 0.4rem;
      }
      & > :nth-child(2) {
        color: ${({ theme }) => theme.Colors.grays[6]};
        font-size: ${({ theme }) => theme.fontSize[14]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        line-height: 1rem;
        width: 27rem;
        text-align: center;
      }
      margin-bottom: 1.8rem;
    }
    & > :nth-child(3) {
      margin: auto;
    }
  }
`;
