import styled from 'styled-components';
import { TrialRegisterInterface } from '../../../../../../helpers/trial-register.shared';

export const StyledTrialFormLayout = styled.div<TrialRegisterInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.Colors.purples[1]};
  overflow: hidden;
  .cards-container {
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.452);
    border-radius: 1.5rem;
    .info-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 300px;
      max-width: 350px;
      height: 100%;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      transition: all 0.3s ease-in-out;
      & h1 {
        padding-top: 1.3rem;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.Colors.grays[5]};
        & span {
          padding-left: 0.5rem;
          font-size: 1.7rem;
          font-weight: 700;
        }
      }
      & > div {
        border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        & > div {
          margin: 0.5rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          ${({ pagepath }) =>
            pagepath && pagepath === 'start' ? 'width: 220px;' : 'width: 90%;'}
          min-height: 30px;
          & * {
            ${({ color }) =>
              `fill: ${color};
          }`}
          }
          & div {
            ${({ pagepath }) =>
              pagepath && pagepath === 'start'
                ? `padding: 0;
                margin-right: 0.3rem;`
                : `padding: 0 0.4rem;
                margin-right: 0.7rem;`}
            ${({ pagepath }) =>
              pagepath && pagepath === 'start'
                ? 'height: 40px'
                : 'height: 35px'};
            display: flex;
            align-items: center;
            & div {
              & div {
                & svg {
                  box-shadow: 0 3px 10px 2px
                    ${({ theme }) => theme.Colors.grays[2]};
                  border-radius: 50%;
                  outline: 4px solid white;
                  border: 1px solid white;
                  height: 25px;
                  width: 25px;
                }
              }
            }
          }
          & span {
            width: 100%;
            font-weight: 400;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.Colors.grays[2]};
            & > span {
              color: ${({ theme }) => theme.Colors.grays[1]};
              font-weight: 600;
            }
          }
        }
      }
    }
    & form {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 320px;
      max-width: 400px;
      height: 100%;
      padding: 2rem;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      transition: all 0.3s ease-in-out;
      border-left: 1px solid ${({ theme }) => theme.Colors.grays[9]};
      & h1 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: 400;
        margin-bottom: 1.5rem;
        & span {
          padding-left: 0.4rem;
          font-size: 1.5rem;
        }
      }
      & input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        padding: 0.5rem;
        border-radius: 1.5rem;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        transition: all 0.1s ease-in-out;
        border: none;
        padding: 1rem;
        color: ${({ theme }) => theme.Colors.grays[3]};
        &:focus {
          outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
        }
        &::placeholder {
          color: ${({ theme }) => theme.Colors.grays[7]};
          padding-left: 0.3rem;
        }
      }
      & > div {
        margin: 0.3rem 0;
        height: 20px;
        color: ${({ theme }) => theme.Colors.orange[1]};
        text-align: left;
        width: 90%;
        font-size: 11px;
      }
      & button {
        width: 100%;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        margin-top: 1rem;
      }
    }
  }
  & > div {
    position: absolute;
    left: 0px;
    top: 0;
    min-width: 100vw;
    height: 100vh;
    overflow: hidden;
    & > div {
      position: absolute;
      left: 0px;
      top: 0;
      min-width: 100vw;
      height: 100vh;
      overflow: hidden;
      & > div {
        position: absolute;
        min-width: 100vw;
        min-height: 100vh;
        left: 0;
        top: 0;
        & > svg {
          position: absolute;
          left: 0;
          top: 0;
          min-width: 100vw;
          height: 100vh;
        }
      }
    }
  }
`;
