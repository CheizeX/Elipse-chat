import styled from 'styled-components';

export const StyledWrapperModal = styled.div`
  width: 260px;
  height: 220px;
  margin: auto;
  padding: 18px 12px 0 12px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > span {
    display: flex;
    text-align: start;
    align-items: center;
    justify-content: flex-start;
    padding-left: 14px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: 14px;
  }
  & > div {
    margin-top: 12px;
    margin-bottom: 16px;
  }
`;
