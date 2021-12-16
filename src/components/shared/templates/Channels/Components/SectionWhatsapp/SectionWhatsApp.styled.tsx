import styled from 'styled-components';

export const StyledAddWhatsApp = styled.div`
  width: 33.25rem;
  min-width: 592px;
  height: 32rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 1.25rem 0 1.125rem 0;
`;

export const StyledHeaderChannelAdd = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-left: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 1rem;
  }
  & > button {
    width: 2.1rem;
    height: 1rem;
    & > div {
      & * {
        & > svg {
          width: 0.75;
          height: 0.8rem;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
`;

export const StyledBodyAddChannel = styled.div`
  height: 24rem;
  display: flex;
  width: 100%;
  & > :nth-child(1) {
    width: 15rem;
    background-blend-mode: lighten;
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    background-image: url('/images/Background_Modal.svg');
    background-size: 15.9375rem 23.1875rem;
    & > div {
      display: flex;
      flex-direction: column;
      width: 12rem;
      height: fit-content;
      padding: 2rem 0 0 0;
      margin: auto;
      & > div {
        & > :nth-child(1) {
          display: flex;
          max-width: 12rem;
          width: 100%;
          max-height: 1.5rem;
          align-items: center;
          & > div {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 1rem;
            color: ${({ theme }) => theme.Colors.purples[1]};
            font-weight: ${({ theme }) => theme.fontWeight[700]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            line-height: 0.875rem;
            max-height: 1.875rem;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            min-width: 1.5rem;
            min-height: 1.5rem;
            padding-top: 1px;
            background-color: ${({ theme }) => theme.Colors.grays[10]};
          }
          & > span {
            color: ${({ theme }) => theme.Colors.grays[10]};
            font-weight: ${({ theme }) => theme.fontWeight[700]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: start;
            max-height: 1.875rem;
            height: fit-content;
          }
        }
        & > :nth-child(2) {
          width: 0.25rem;
          height: 1.75rem;
          background: ${({ theme }) => theme.Colors.grays[10]};
          margin: 0 0.625rem;
        }
      }
      & > :nth-child(4) {
        & > :nth-child(2) {
          display: none;
        }
      }
    }
  }
  & > :nth-child(2) {
    width: 304px;
    height: 352px;
    margin: auto;
    border-radius: 0.625rem;
    & > :nth-child(1) {
      height: fit-content;
      & > :nth-child(1) {
        margin: 0 0.5rem 0.625rem 0.5rem;
        & > :nth-child(1) {
          height: 30px;
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 0.875rem;
          text-align: start;
          display: flex;
          justify-content: flex-start;
          width: 100%;
          margin-bottom: 0.625rem;
        }
        & > :nth-child(2) {
          height: 1.875rem;
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 0.875rem;
          text-align: start;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }
      }
      & > :nth-child(2) {
        width: 304px;
        height: 232px;
        border-radius: 0.625rem;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        margin-bottom: 10px;
      }
      & > :nth-child(3) {
        margin: 0 0.5rem;
        & > span {
          height: 1.875rem;
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[400]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          text-align: start;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }
      }
    }
  }
`;

export const StyledLink = styled.p`
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  line-height: 0.875rem;
  display: flex;
  flex-direction: column;
  text-align: initial;
  & > div {
    display: flex;
    height: 1rem;
  }
  & span {
    color: ${({ theme }) => theme.Colors.blue[1]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 0.875rem;
    margin: 0 0.125rem;
    & > a {
      & > :hover {
        /* background-color: ${({ theme }) => theme.Colors.blue[1]}; */
      }
    }
  }
`;

export const StyledFooterAddChannel = styled.div`
  display: flex;
  height: 3.3rem;
  align-items: flex-end;
  padding: 0 0.9375rem;
  justify-content: space-between;
`;

export const StyledQR = styled.div`
  & > img {
    max-width: 330px;
    max-height: 228px;
  }
`;
