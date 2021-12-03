import styled from 'styled-components';
import { IPropsCustom } from './CustomWebChat.interface';

export const StyledCustomWebChat = styled.div``;
export const WrapperWebChat = styled.div<IPropsCustom>`
  width: 16rem;
  height: 21.9rem;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  margin: auto;
  & > :nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 20px;
    padding: 10px 30px;
    align-items: center;
    & > img {
      max-width: 12px;
      max-height: 12px;
    }
    & > div {
      & * {
        & > svg {
          width: 12px;
          height: 12px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[10]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

export const StyledHeaderCustomWebChat = styled.div`
  display: flex;
  margin: 0 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding-left: 10px;
    align-items: start;
    height: 2.6rem;
    & > :nth-child(1) {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[16]};
      line-height: 17px;
      margin-bottom: 2px;
    }
    & > :nth-child(2) {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 16px;
    }
  }
`;
export const StyledAvatar = styled.div`
  width: 3.1rem;
  height: 3.1rem;
  margin-bottom: 0.5rem;
  & > div {
    & * {
      & > svg {
        width: 2.6rem;
        height: 2.6rem;
        border: 2px solid #f5f5f5;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.Colors.grays[10]};
      }
    }
  }
  & > img {
    max-width: 2.6rem;
    max-height: 2.6rem;
    border-radius: 50%;
    min-height: 2.6rem;
    min-width: 2.6rem;
    object-fit: cover;
  }
`;
export const StyledBodyWebChat = styled.div<IPropsCustom>`
  width: 97%;
  margin: auto;
  height: 14rem;
  border-start-end-radius: 3%;
  border-start-start-radius: 3%;
  border-end-end-radius: 12%;
  border-end-start-radius: 2%;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  box-shadow: 0px 0px 7px 0px #0000004a;
  & > :nth-child(1) {
    display: flex;
    justify-content: flex-start;
    padding: 14px 0;
    & > :nth-child(1) {
      margin-left: 7px;
      & > div {
        & * {
          & > svg {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            box-shadow: 0px 0px 2px 0px #0000004a;
            border: 1px solid ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
    }
    & > img {
      max-width: 1.6rem;
      max-height: 1.6rem;
      min-width: 1.6rem;
      min-height: 1.6rem;
      border-radius: 50%;
      width: fit-content;
      object-fit: cover;
      margin-right: -25px;
    }
    & > :nth-child(2) {
      width: 180px;
      background-color: ${({ color }) => color};
      border-start-end-radius: 10px;
      border-end-end-radius: 10px;
      border-end-start-radius: 10px;
      margin-left: 34px;
      padding: 8px;
      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
        color: ${({ theme }) => theme.Colors.grays[10]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        font-size: ${({ theme }) => theme.fontSize[10]};
        line-height: 12px;
      }
    }
  }
  & > :nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      width: 180px;
      border-start-end-radius: 4px;
      border-end-end-radius: 10px;
      border-start-start-radius: 10px;
      border-end-start-radius: 10px;
      padding: 8px;
      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        font-size: ${({ theme }) => theme.fontSize[10]};
        line-height: 12px;
      }
    }
  }
  & > :nth-child(3) {
    height: 96px;
    padding-left: 4px;
    display: flex;
    align-items: end;
    & > :nth-child(1) {
      height: 30px;
      width: 196px;
      display: flex;
      justify-content: start;
      align-items: center;
      padding-left: 12px;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 20px;
      & > span {
        color: ${({ theme }) => theme.Colors.grays[4]};
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        line-height: 12px;
      }
    }
    & > div {
      width: 28px;
      height: 28px;
      background-color: ${({ color }) => color};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 0 6px;
      & > div {
        top: 6px;
        left: 1px;
        & * {
          & > svg {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
`;
