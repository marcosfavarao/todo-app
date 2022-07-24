import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.section`
  /* background-color: lightseagreen; */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const Header = styled.header`
  /* background-color: lightskyblue; */
  width: 100%;

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

export const Display = styled.div`
  background: ${({ theme }) => lighten(0.08, theme.colors.background)};
  width: 100%;
  height: 40rem;
  margin-top: 2rem;

  border: 0;
  border-radius: 0.25rem;
  overflow: hidden;
  overflow-y: auto;
`;

export const InputField = styled.div`
  background: ${({ theme }) => lighten(0.08, theme.colors.background)};
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  border: 0;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.text};
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  input {
    background: none;
    width: 100%;
    height: inherit;
    margin: 1rem;
    border: 0;
    border-radius: 0.25rem;

    &:focus {
      outline: none;
    }
  }
`;
