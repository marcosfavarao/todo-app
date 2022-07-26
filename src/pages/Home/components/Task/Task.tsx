import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoIosCheckboxOutline, IoMdTrash } from 'react-icons/io';

import { Container } from './task.styles';

interface TaskProps {
  taskTitle: string;
  createdAt?: string;
}

export const Task = ({ taskTitle }: TaskProps) => {
  const [isTaskDone, setIsTaskDone] = useState<boolean>(false);

  return (
    <Container isTaskDone={isTaskDone}>
      <span>{taskTitle}</span>
      <div>
        <IoIosCheckboxOutline
          onClick={() => setIsTaskDone((completed) => !completed)}
        />
        <FiEdit />
        <IoMdTrash />
      </div>
    </Container>
  );
};
