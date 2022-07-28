import { FormEvent, useState } from 'react';
import { VscChecklist } from 'react-icons/vsc';
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
  const [name, setName] = useState('');

  const onAssignTask = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) return;
    await assignTask({ title: name });
    setName('');
  };

  const onUpdateTaskTitle = async (id: string, title: string) => {
    await updateTaskTitle({ id, title });
  };

  const onUpdateTaskStatus = async (id: string, isCompleted: boolean) => {
    await updateTaskStatus({ id, isCompleted });
  };

  const onRemoveTask = async (id: string) => {
    await deleteTask({ id });
  };

  return (
    <Container>
      <Content>
        <Header>
          <h1>My Todos</h1>
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
                  handleDelete={() => onRemoveTask(task.id)}
                />
              );
            })}
        </Display>

        <InputField isFocused={isFocused} onSubmit={onAssignTask}>
          <input
            type="text"
            placeholder="type a task..."
            maxLength={50}
            value={name}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setName((text) => text.trim());
              setIsFocused(false);
            }}
            onChange={(event) => setName(event.target.value)}
          />

          <button type="submit">
            <IoIosAddCircleOutline />
          </button>
        </InputField>
      </Content>
    </Container>
  );
};
