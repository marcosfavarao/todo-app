import { FormEvent, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { VscChecklist } from 'react-icons/vsc';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { useTasks } from '../../hooks';
import { Task } from './components/Task';

import {
  Container,
  Content,
  Header,
  Display,
  Loader,
  Empty,
  InputField,
  Network,
} from './home.styles';

export const Home = () => {
  const {
    tasklist,
    loadingRequisition,
    assignTask,
    updateTaskTitle,
    updateTaskStatus,
    deleteTask,
  } = useTasks();
  const [isFocused, setIsFocused] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  const onAssignTask = async (event: FormEvent) => {
    event.preventDefault();
    if (!taskTitle.trim()) return;
    await assignTask({ title: taskTitle });
    setTaskTitle('');
  };

  const onUpdateTaskTitle = async (id: string, title: string) => {
    await updateTaskTitle({ id, title });
  };

  const onUpdateTaskStatus = async (id: string, isCompleted: boolean) => {
    await updateTaskStatus({ id, isCompleted });
  };

  const onDeleteTask = async (id: string) => {
    await deleteTask({ id });
  };

  return (
    <Container>
      <Content>
        <Network>
          <a
            href="https://www.marcosfavarao.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGlobal />
          </a>
          <a
            href="https://github.com/marcosfavarao/todo-app.git"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </Network>

        <Header>
          <h1>My To-do&apos;s</h1>
        </Header>

        <Display hasTasks={tasklist.length !== 0 && tasklist !== null}>
          {loadingRequisition && <Loader />}

          {!loadingRequisition && tasklist.length === 0 && (
            <Empty>
              <VscChecklist />
              <h2>Add your first to do</h2>
              <p>What do you want to get done today?</p>
            </Empty>
          )}

          {!loadingRequisition &&
            tasklist.length !== 0 &&
            tasklist !== null &&
            tasklist.map((task) => {
              return (
                <Task
                  key={task.id}
                  taskTitle={task.title}
                  taskStatus={task.isCompleted}
                  handleUpdateTaskTitle={(newTaskTitle) =>
                    onUpdateTaskTitle(task.id, newTaskTitle)
                  }
                  handleUpdateTaskStatus={(newTaskStatus) =>
                    onUpdateTaskStatus(task.id, newTaskStatus)
                  }
                  handleDeleteTask={() => onDeleteTask(task.id)}
                />
              );
            })}
        </Display>

        <InputField isFocused={isFocused} onSubmit={onAssignTask}>
          <input
            type="text"
            placeholder="type a task..."
            maxLength={50}
            value={taskTitle}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTaskTitle((text) => text.trim());
              setIsFocused(false);
            }}
            onChange={(event) => setTaskTitle(event.target.value)}
          />

          <button type="submit">
            <IoIosAddCircleOutline />
          </button>
        </InputField>
      </Content>
    </Container>
  );
};
