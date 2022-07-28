import { useState } from 'react';
import { IoIosCheckboxOutline, IoMdCreate, IoMdTrash } from 'react-icons/io';

import { Container } from './task.styles';

interface TaskProps {
  taskTitle: string;
  taskStatus: boolean;
  handleUpdateTaskTitle: (newTitle: string) => void;
  handleUpdateTaskStatus: (newStatus: boolean) => void;
  handleDelete: () => void;
}

export const Task = ({
  taskTitle,
  taskStatus,
  handleUpdateTaskTitle,
  handleUpdateTaskStatus,
  handleDelete,
}: TaskProps) => {
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState(taskTitle);
  const [isCompleted, setIsCompleted] = useState(taskStatus);

  return (
    <Container isCompleted={isCompleted} isEditingTask={isEditingTask}>
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
          onClick={() => {
            setIsCompleted((status) => {
              const newStatus = !status;
              handleUpdateTaskStatus?.(newStatus);
              return newStatus;
            });
          }}
        />
        <IoMdCreate
          onClick={() => {
            if (!isEditingTask) {
              setIsEditingTask(true);
            } else {
              handleUpdateTaskTitle?.(newTaskTitle);
              setIsEditingTask(false);
            }
          }}
        />
        <IoMdTrash onClick={handleDelete} />
      </div>
    </Container>
  );
};
