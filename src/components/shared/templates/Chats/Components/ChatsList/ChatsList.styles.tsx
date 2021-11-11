import styled from 'styled-components';

export const StyledChatsList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px 0 0 10px;
  max-width: 352px;
  height: 656px;
  width: 100%;
  border-right: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  padding-top: 15px;
  & > div {
    margin-bottom: 0px;
    font-size: ${({ theme }) => theme.fontSize[12]};
    justify-content: space-evenly;
    padding: 0 10px;
    & > button {
      max-width: 152px;
      width: 152px;
      height: 100%;
    }
  }
  & button {
    height: 100%;
  }
`;

export const StyledIndicator = styled.span`
  width: 9px;
  height: 9px;
  background-color: ${({ theme }) => theme.Colors.orange[2]};
  z-index: 1;
  position: absolute;
  right: 31px;
  top: 37.1px;
  border-radius: 50%;
`;

export const StyledPendings = styled.div`
  height: fit-content;
  min-height: 560px;
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  border-bottom-left-radius: 10px;
`;

export const StyledInConversation = styled.div`
  height: fit-content;
  min-height: 560px;
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  border-bottom-left-radius: 10px;
`;

export const StyledPendingsRender = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledInConversationRender = styled.div`
  width: 100%;
  height: 100%;
`;
