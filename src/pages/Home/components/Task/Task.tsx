import { useState } from 'react';
import { IoIosCheckboxOutline, IoMdCreate, IoMdTrash } from 'react-icons/io';

import { Container } from './task.styles';

interface TaskProps {
  taskTitle: string;
  handleDelete?: () => void;
}

export const Task = ({ taskTitle, handleDelete }: TaskProps) => {
  const [isTaskDone, setIsTaskDone] = useState<boolean>(false);

  return (
    <Container isTaskDone={isTaskDone}>
      <span>{taskTitle}</span>
      <div>
        <IoIosCheckboxOutline
          onClick={() => setIsTaskDone((completed) => !completed)}
        />
        <IoMdCreate />
        <IoMdTrash onClick={handleDelete} />
      </div>
    </Container>
  );
};
