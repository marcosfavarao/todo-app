import { useCallback, useContext, useEffect, useState } from 'react';
import {
  IoIosMore,
  IoIosCheckboxOutline,
  IoMdCreate,
  IoMdTrash,
} from 'react-icons/io';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Label,
  Info,
  Buttons,
  PriorityMenu,
  PriorityButton,
} from './task.styles';

interface TaskProps {
  taskTitle: string;
  taskStatus: boolean;
  handleUpdateTaskTitle: (newTitle: string) => void;
  handleUpdateTaskStatus: (newStatus: boolean) => void;
  handleDeleteTask: () => void;
}

export const Task = ({
  taskTitle,
  taskStatus,
  handleUpdateTaskTitle,
  handleUpdateTaskStatus,
  handleDeleteTask,
}: TaskProps) => {
  // States
  const { colors } = useContext(ThemeContext);
  const [isEditingTaskTitle, setIsEditingTaskTitle] = useState(false);
  const [isTaskDone, setIsTaskDone] = useState(taskStatus);
  const [newTaskTitle, setNewTaskTitle] = useState(taskTitle);
  const [isPriorityMenuOpen, setIsPriorityMenuOpen] = useState(false);
  const [labelColor, setLabelColor] = useState('');

  // Callback methods
  const handleEditTaskTitle = useCallback(
    (
      isEditingTask: boolean,
      currentTaskTitle: string,
      newerTaskTitle: string,
    ) => {
      if (!isEditingTask) setIsEditingTaskTitle(true);

      if (isEditingTask && currentTaskTitle === newerTaskTitle) {
        setIsEditingTaskTitle(false);
      }

      if (isEditingTask && currentTaskTitle !== newerTaskTitle) {
        handleUpdateTaskTitle?.(newTaskTitle);
        setIsEditingTaskTitle(false);
      }
    },
    [handleUpdateTaskTitle, newTaskTitle],
  );

  const detectKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        (event.key === 'Escape' || event.key === 'Enter') &&
        !isEditingTaskTitle
      ) {
        return;
      }

      if (event.key === 'Escape' || event.key === 'Enter') {
        handleEditTaskTitle(isEditingTaskTitle, taskTitle, newTaskTitle);
      }
    },
    [handleEditTaskTitle, isEditingTaskTitle, newTaskTitle, taskTitle],
  );

  const updateLabelColor = useCallback((targetColor: string) => {
    setLabelColor((currentColor) => {
      return currentColor === targetColor ? '' : targetColor;
    });
  }, []);

  // Life cycle
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, [detectKeyDown]);

  useEffect(() => setIsEditingTaskTitle(false), []);

  useEffect(
    () =>
      setNewTaskTitle((currentText) => currentText.trim().replace(/\s+/g, ' ')),
    [isEditingTaskTitle],
  );

  // Component render
  return (
    <Container
      isCompleted={isTaskDone}
      isEditingTask={isEditingTaskTitle}
      isPriorityMenuOpen={isPriorityMenuOpen}
    >
      <Label labelColor={labelColor} />

      <Info isCompleted={isTaskDone} isEditingTask={isEditingTaskTitle}>
        {!isEditingTaskTitle && (
          <span
            onDoubleClick={() => {
              if (!isTaskDone) setIsEditingTaskTitle(true);
            }}
          >
            {taskTitle}
          </span>
        )}
        {isEditingTaskTitle && (
          <input
            type="text"
            maxLength={50}
            value={newTaskTitle}
            onChange={(event) => setNewTaskTitle(event.target.value)}
          />
        )}
      </Info>

      <Buttons
        isCompleted={isTaskDone}
        isEditingTask={isEditingTaskTitle}
        isPriorityMenuOpen={isPriorityMenuOpen}
      >
        <IoIosMore onClick={() => setIsPriorityMenuOpen((status) => !status)} />

        <IoIosCheckboxOutline
          onClick={() => {
            setIsTaskDone((status) => {
              const newStatus = !status;
              handleUpdateTaskStatus?.(newStatus);

              return newStatus;
            });
          }}
        />

        <IoMdCreate
          onClick={() => {
            setIsPriorityMenuOpen(false);
            handleEditTaskTitle(isEditingTaskTitle, taskTitle, newTaskTitle);
          }}
        />

        <IoMdTrash onClick={handleDeleteTask} />
      </Buttons>

      <PriorityMenu>
        <PriorityButton
          type="button"
          buttonColor={colors.blue}
          onClick={() => updateLabelColor(colors.blue)}
          isPriorityMenuOpen={isPriorityMenuOpen}
        />

        <PriorityButton
          type="button"
          buttonColor={colors.orange}
          onClick={() => updateLabelColor(colors.orange)}
          isPriorityMenuOpen={isPriorityMenuOpen}
        />

        <PriorityButton
          type="button"
          buttonColor={colors.red}
          onClick={() => updateLabelColor(colors.red)}
          isPriorityMenuOpen={isPriorityMenuOpen}
        />
      </PriorityMenu>
    </Container>
  );
};
