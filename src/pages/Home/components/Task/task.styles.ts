import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';

interface ContainerProps {
  isCompleted: boolean;
  isEditingTask: boolean;
  isPriorityMenuOpen: boolean;
}

interface InfoProps {
  isCompleted: boolean;
  isEditingTask: boolean;
}

interface ButtonProps {
  isCompleted: boolean;
  isEditingTask: boolean;
  isPriorityMenuOpen: boolean;
}

interface LabelProps {
  labelColor: string;
}

interface PriorityButtonProps {
  buttonColor: string;
  isPriorityMenuOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => lighten(0.08, theme.colors.background)};
  width: 100%;
  height: 3.5rem;
  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: ${({ isPriorityMenuOpen }) =>
    isPriorityMenuOpen ? `0.25rem 0.25rem 0 0.25rem` : `0.25rem`};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  position: relative;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    /* border-color: ${({ theme }) => lighten(0.2, theme.colors.background)}; */
  }
`;

export const Info = styled.div<InfoProps>`
  width: 100%;
  margin-right: 1rem;
  position: relative;

  span {
    color: ${({ theme, isCompleted }) =>
      isCompleted && darken(0.4, theme.colors.text)};
    width: inherit;
    height: 2.5rem;

    border: 1px solid transparent;
    user-select: none;
    cursor: text;

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
`;

export const Buttons = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  position: relative;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    transition: all ${({ theme }) => theme.transitions.fast};

    &:first-child {
      color: ${({ isPriorityMenuOpen, theme }) =>
        isPriorityMenuOpen && theme.colors.blue};

      &:hover {
        color: ${({ theme }) => lighten(0.08, theme.colors.blue)};
      }
    }

    &:nth-child(2) {
      color: ${({ isCompleted, theme }) => isCompleted && theme.colors.green};

      &:hover {
        color: ${({ theme }) => lighten(0.08, theme.colors.green)};
      }
    }

    &:nth-child(3) {
      color: ${({ isEditingTask, theme }) =>
        isEditingTask && theme.colors.orange};
      opacity: ${({ isCompleted }) => (isCompleted ? 0.25 : 1)};
      pointer-events: ${({ isCompleted }) => (isCompleted ? 'none' : 'all')};

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
      }
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.red};

      &:hover {
        color: ${({ theme }) => lighten(0.08, theme.colors.red)};
      }
    }

    &:first-child,
    &:nth-child(2),
    &:last-child {
      opacity: ${({ isEditingTask }) => (isEditingTask ? 0.25 : 1)};
      pointer-events: ${({ isEditingTask }) =>
        isEditingTask ? 'none' : 'all'};
    }
  }
`;

export const Label = styled.aside<LabelProps>`
  background: ${({ theme, labelColor }) =>
    labelColor ? lighten(0.08, labelColor) : theme.colors.text};

  width: 0.4rem;
  height: inherit;
  opacity: 0.4;

  border: 0;
  border-radius: 0.25rem 0 0 0.25rem;
  z-index: 1;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);

  transition: all ${({ theme }) => theme.transitions.fast};
`;

export const PriorityMenu = styled.div`
  width: auto;
  height: 0.8rem;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 0.4rem;

  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-0.8rem);
`;

export const PriorityButton = styled.input<PriorityButtonProps>`
  background-color: ${({ buttonColor }) =>
    buttonColor && transparentize(0.4, buttonColor)};
  width: 0.5rem;
  height: 0.5rem;

  border: 0;
  border-radius: 100%;
  cursor: pointer;

  transform: scale(${({ isPriorityMenuOpen }) => (isPriorityMenuOpen ? 1 : 0)});
  transition: transform ${({ theme }) => theme.transitions.fast};
`;
