import styled from 'styled-components';

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
export const StyledReviewChatsHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding-left: 28px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-bottom: 16px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
`;
export const StyledChart = styled.div`
  width: 531px;
  height: 258px;
`;
