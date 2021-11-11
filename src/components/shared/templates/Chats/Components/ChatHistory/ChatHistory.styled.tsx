import styled, { css } from 'styled-components';
import { StyledClientAndAgentAvatars } from '../PendingsChatItem/PendingsChatItem.styles';
import { IHistoryChatStyled } from './ChatHistory.interface';

export const StyledChatHistory = styled.div`
  width: 632px;
  height: 512px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 17px 0;
`;
export const StyledChatHistoryHeader = styled.div`
  height: 32px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 24px;
  justify-content: space-between;
  & > div:first-child {
    & > div {
      top: -1px;
      & * {
        & > svg {
          height: 23px;
          width: 23px;
        }
      }
    }
    & > span {
      position: relative;
      top: 1px;
      left: 32px;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
    }
  }
  & > button {
    width: 34px;
    & > div {
      & * {
        & > svg {
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
  }
`;
export const StyledChatHistoryBody = styled.div`
  display: flex;
  color: ${({ theme }) => theme.Colors.grays[3]};
  & > :first-child {
    height: 462px;
    width: 289px;
    border-right: 1px solid ${({ theme }) => theme.Colors.grays[8]};
    padding: 18px 0 0 24px;
    & > span {
      display: flex;
      & > span {
        color: ${({ theme }) => theme.Colors.grays[3]};
        padding-left: 7px;
      }
      & > div {
        border-radius: 50px;
        background-color: ${({ theme }) => theme.Colors.purples[3]};
        color: ${({ theme }) => theme.Colors.grays[10]};
        width: 100%;
        height: 19px;
        padding-top: 3px;
        font-weight: ${({ theme }) => theme.fontWeight[700]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        margin-left: 7px;
        max-width: 19px;
      }
    }
  }
  & > :last-child {
    display: flex;
    flex-direction: column;
    padding: 16px 16px;
    text-align: initial;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      padding-left: 7px;
    }
  }
`;
export const SectionAgentsContainer = styled.div`
  width: 249px;
  height: 392px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  margin-top: 7px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SectionContainerChats = styled.div`
  width: 304px;
  max-height: 392px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  margin-top: 7px;
  padding-top: 1px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCardAgents = styled.button<IHistoryChatStyled>`
  width: 229px;
  height: 120px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  cursor: pointer;
  margin-bottom: 10px;
  ${({ focusedChats }) =>
    focusedChats &&
    css<IHistoryChatStyled>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `};
  :hover {
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    color: ${({ theme }) => theme.Colors.grays[10]};
    & > :nth-child(2) {
      & > div:last-child {
        background-color: ${({ theme }) => theme.Colors.grays[10]};
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[1]};
              }
            }
          }
        }
        & > span {
          color: ${({ theme }) => theme.Colors.purples[1]};
        }
      }
    }
  }
  & > :nth-child(1) {
    display: flex;
    width: 55px;
    height: 18px;
    margin-bottom: 13px;
    padding-left: 17px;
    & > div {
      width: 15px;
      height: 17px;
    }
    & > span {
      padding-left: 12px;
      display: flex;
      top: 2px;
      position: relative;
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & > :nth-child(2) {
    display: flex;
    width: 163px;
    height: 21px;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    & > div:first-child {
      background-color: ${({ theme }) => theme.Colors.orange[3]};
      min-width: 62px;
      min-height: 21px;
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
      & > span {
        color: ${({ theme }) => theme.Colors.grays[10]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        padding-top: 1px;
      }
    }
    & > :nth-child(2) {
      font-size: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #24c3a7;
      font-weight: 900;
      padding-top: 1px;
      line-height: 14px;
    }
    & > div:last-child {
      background-color: ${({ theme, focusedChats }) =>
        focusedChats === true ? theme.Colors.grays[10] : theme.Colors.grays[6]};
      min-width: 62px;
      min-height: 21px;
      & > div {
        & * {
          & > svg {
            width: 12px;
            height: 12px;
            & > path {
              fill: ${({ theme, focusedChats }) =>
                focusedChats === true
                  ? theme.Colors.purples[1]
                  : theme.Colors.grays[10]};
            }
          }
        }
      }
      & > span {
        color: ${({ theme, focusedChats }) =>
          focusedChats && focusedChats === true
            ? theme.Colors.purples[1]
            : theme.Colors.grays[10]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        padding-top: 1px;
      }
    }
  }
  & > :nth-child(3) {
    display: flex;
    width: 123px;
    height: 23px;
    margin-left: 16px;
    & > :first-child {
      width: 24px;
      height: 24px;
      & * {
        & > svg {
          width: 23px;
          height: 23px;
        }
      }
    }
    & > span {
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      left: 8px;
      top: 2px;
    }
  }
`;
export const StyledUserChats = styled.div`
  max-width: 241px;
  width: fit-content;
  display: flex;
  left: 16px;
  position: relative;
  margin-top: 15px;
  & > :first-child {
    display: flex;
    flex-direction: column;
    height: fit-content;
    * {
      font-size: 12px;
    }
    & > :first-child {
      border-radius: 0px 10px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
      padding: 13px 15px;
      font-weight: 400;
    }
    & > :last-child {
      color: ${({ theme }) => theme.Colors.grays[5]};
      margin-top: 8px;
      padding-left: 10px;
      font-weight: 400;
      line-height: 14px;
    }
  }
`;
export const StyledAgentOrSUpervisorDialogue = styled.div`
  max-width: 255px;
  width: fit-content;
  display: flex;
  align-self: flex-end;
  text-align: end;
  margin: 15px 0 0 0;
  right: 16px;
  position: relative;
  & > :first-child {
    display: flex;
    flex-direction: column;
    height: 100%;
    * {
      font-size: 12px;
    }
    & > :first-child {
      border-radius: 10px 0px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      padding: 13px 10px;
      font-weight: 400;
      line-height: 14px;
    }
    & > :last-child {
      color: ${({ theme }) => theme.Colors.grays[5]};
      margin-top: 8px;
      padding-right: 10px;
      font-weight: 400;
    }
  }
`;
export const StyledAvatarChats = styled(StyledClientAndAgentAvatars)`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  & > :first-child {
    & svg {
      background-color: ${({ theme }) => theme.Colors.grays[8]};
      width: 30px;
      height: 30px;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[7]};
      }
    }
  }
`;
