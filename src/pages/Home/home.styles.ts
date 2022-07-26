import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

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

  display: flex;
  align-items: center;
  justify-content: ${({ hasTasks }) => (hasTasks ? `flex-start` : `center`)};
  flex-direction: column;
`;

export const Empty = styled.div`
  width: 100%;
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
      isFocused ? transparentize(0.6, theme.colors.primary) : `transparent`};
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
        color: ${({ theme }) => transparentize(0.2, theme.colors.primary)};
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
    /* text-transform: capitalize; */

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
