import styled from 'styled-components';

export const StyledChannelEmpty = styled.div`
  width: 984px;
  height: 544px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  margin: 20px auto;
  & > div {
    padding: 142px;
    & > :first-child {
      width: 158px;
      height: 112px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      & > :first-child {
        display: flex;
        & > div {
          width: 27px;
          height: 27px;
        }
        & * {
          & > svg {
            width: 27px;
            height: 27px;
          }
        }
        & > :nth-child(1) {
          display: flex;
          top: 62px;
          right: 9px;
        }
        & > :nth-child(2) {
          display: flex;
          top: 18px;
          right: 22px;
        }
        & > :nth-child(3) {
          display: flex;
          top: 0px;
          right: 0px;
        }
        & > :nth-child(4) {
          display: flex;
          top: 20px;
          left: 22px;
        }
        & > :nth-child(5) {
          display: flex;
          top: 62px;
          left: 9px;
        }
      }
      & > :nth-child(2) {
        & > div {
          width: 56px;
          height: 56px;
          margin: 18px 0 16px 0;
          & * {
            & > svg {
              width: 56px;
              height: 56px;
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
        line-height: 21px;
        margin-bottom: 7px;
      }
      & > :nth-child(2) {
        color: ${({ theme }) => theme.Colors.grays[6]};
        font-size: ${({ theme }) => theme.fontSize[14]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        line-height: 17px;
        width: 432px;
        text-align: center;
      }
      margin-bottom: 30px;
    }
    & > :nth-child(3) {
      margin: auto;
    }
  }
`;
