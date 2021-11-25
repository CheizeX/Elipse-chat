import styled from 'styled-components';

export const StyledChannelSectionHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 23px 0 21px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;
