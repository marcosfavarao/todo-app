import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';

interface ContainerProps {
  isCompleted: boolean;
  isEditingTask: boolean;
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
  /* flex-wrap: wrap; */

  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};
  &:hover {
    background: ${({ theme }) => transparentize(0.9, theme.colors.green)};
    border: 1px solid ${({ theme }) => transparentize(0.8, theme.colors.green)};
  }

  p {
    width: 100%;
    margin-right: 1rem;
    position: relative;

    span {
      color: ${({ theme, isCompleted }) =>
        isCompleted && darken(0.4, theme.colors.text)};
      border: 1px solid transparent;

      text-align: left;
      text-decoration: ${({ isCompleted }) =>
        isCompleted ? `line-through` : `none`};
      font-size: 1.25rem;
      font-weight: ${({ theme }) => theme.fonts.weight.light};
    }

    input {
      background-color: ${({ theme }) => lighten(0.1, theme.colors.background)};
      color: ${({ theme }) => theme.colors.text};
      width: inherit;
      height: 2.5rem;
      margin-left: -1rem;
      padding-left: 1rem;

      border: 1px solid ${({ theme }) => lighten(0.25, theme.colors.background)};
      border-radius: 0.125rem;

      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      text-align: left;
      font-size: 1.25rem;
      font-weight: ${({ theme }) => theme.fonts.weight.light};

      &:focus {
        outline: none;
      }
    }
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
        color: ${({ isCompleted, theme }) => isCompleted && theme.colors.green};

        &:hover {
          color: ${({ theme }) => lighten(0.08, theme.colors.green)};
        }
      }

      &:nth-child(2) {
        color: ${({ isEditingTask, theme }) =>
          isEditingTask && theme.colors.orange};
        &:hover {
          color: ${({ theme }) => lighten(0.08, theme.colors.orange)};
        }
      }

      &:last-child {
        color: ${({ theme }) => theme.colors.red};
        &:hover {
          color: ${({ theme }) => lighten(0.08, theme.colors.red)};
        }
      }

      &:first-child,
      &:last-child {
        opacity: ${({ isEditingTask }) => (isEditingTask ? 0.25 : 1)};
        pointer-events: ${({ isEditingTask }) =>
          isEditingTask ? 'none' : 'all'};
      }
    }
  }
`;
