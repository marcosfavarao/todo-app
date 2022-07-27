import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';

interface ContainerProps {
  isTaskDone: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => lighten(0.08, theme.colors.background)};
  width: 100%;
  height: 3.5rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};
  &:hover {
    background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
    border: 1px solid
      ${({ theme }) => transparentize(0.8, theme.colors.primary)};
  }

  span {
    color: ${({ theme, isTaskDone }) =>
      isTaskDone && darken(0.4, theme.colors.text)};
    text-align: left;
    text-decoration: ${({ isTaskDone }) =>
      isTaskDone ? `line-through` : `none`};
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      transition: all ${({ theme }) => theme.transitions.fast};

      &:first-child {
        color: ${({ isTaskDone, theme }) => isTaskDone && theme.colors.primary};
      }

      &:last-child {
        color: red;
      }
    }
  }
`;
