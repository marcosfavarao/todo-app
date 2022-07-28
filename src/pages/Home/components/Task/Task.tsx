import { useState } from 'react';
import { IoIosCheckboxOutline, IoMdCreate, IoMdTrash } from 'react-icons/io';
import { useTasks } from '../../../../hooks';

import { Container } from './task.styles';

interface TaskProps {
  taskTitle: string;
  handleUpdate?: (newTitle: string) => void;
  handleDelete?: () => void;
}

export const Task = ({ taskTitle, handleUpdate, handleDelete }: TaskProps) => {
  const [isTaskDone, setIsTaskDone] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState(taskTitle);

  return (
    <Container isTaskDone={isTaskDone} isEditingTask={isEditingTask}>
      <p>
        {!isEditingTask ? (
          <span>{taskTitle}</span>
        ) : (
          <input
            type="text"
            maxLength={50}
            value={newTaskTitle}
            onChange={(event) => setNewTaskTitle(event.target.value)}
          />
        )}
      </p>
      <div>
        <IoIosCheckboxOutline
          onClick={() => setIsTaskDone((completed) => !completed)}
        />
        <IoMdCreate
          onClick={() => {
            if (!isEditingTask) {
              setIsEditingTask(true);
            } else {
              handleUpdate?.(newTaskTitle); // Wait promise validation
              setIsEditingTask(false);
            }
          }}
        />
        <IoMdTrash onClick={handleDelete} />
      </div>
    </Container>
  );
};
