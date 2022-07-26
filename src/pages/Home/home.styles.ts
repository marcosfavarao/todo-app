import styled, { keyframes } from 'styled-components';
import { lighten, transparentize } from 'polished';

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface InputFieldProps {
  isFocused: boolean;
}

interface DisplayProps {
  hasTasks: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
  position: relative;
`;

export const Header = styled.header`
  width: 100%;

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

export const Display = styled.div<DisplayProps>`
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};

  width: 100%;
  height: 40rem;
  margin-top: 2rem;
  padding: 1rem;

  border: 0;
  border-radius: 0.25rem;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
`;

export const Loader = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 5px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  border-bottom-color: transparent;

  z-index: 1;
  position: absolute;
  left: calc(50% - 2.5rem);
  top: calc(50% - 2.5rem);
  transform: translate(-50%, -50%);
  animation: ${rotationAnimation} 1.5s linear infinite;
`;

export const Empty = styled.div`
  width: 100%;
  margin: 0 auto;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    width: 12rem;
    height: 12rem;
    margin: 1rem;
    border: 2px solid white;
    border-radius: 0.5rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  P {
    text-align: center;
    text-decoration: underline;
    text-underline-position: under;
    font-weight: ${({ theme }) => theme.fonts.weight.light};
  }
`;

export const InputField = styled.form<InputFieldProps>`
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
  width: 100%;
  height: 3rem;
  margin-top: 2rem;

  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? transparentize(0.6, theme.colors.green) : `transparent`};
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  button {
    background: none;
    border: 0;
    margin-right: 1rem;
    cursor: pointer;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    svg {
      color: ${({ theme }) => theme.colors.text};
      width: 2rem;
      height: 2rem;

      transition: color ${({ theme }) => theme.transitions.fast};
      &:hover {
        color: ${({ theme }) => transparentize(0.2, theme.colors.green)};
      }
    }
  }

  input {
    background: none;
    color: ${({ theme }) => theme.colors.text};

    width: 100%;
    height: inherit;
    margin: 1rem;

    border: 0;
    border-radius: 0.25rem;

    font-size: 1.1rem;
    font-weight: ${({ theme }) => theme.fonts.weight.normal};

    &:focus {
      outline: none;
    }

    &::placeholder {
      text-transform: none;
      font-size: 1rem;
      font-style: italic;
      font-weight: ${({ theme }) => theme.fonts.weight.light};
    }
  }
`;

export const Network = styled.div`
  /* background-color: red; */
  width: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  position: absolute;
  top: 0;
  right: 0;

  a {
    display: flex;

    svg {
      color: ${({ theme }) => transparentize(0.8, theme.colors.text)};
      width: 1.5rem;
      height: 1.5rem;
      transition: all ${({ theme }) => theme.transitions.fast};

      &:hover {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;
