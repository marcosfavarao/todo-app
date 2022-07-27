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
  Empty,
  InputField,
} from './home.styles';

export const Home = () => {
  const { tasklist, createNewTask, deleteTask } = useTasks();
  const [isFocused, setIsFocused] = useState(false);
  const [title, setTitle] = useState('');

  const assignTask = async (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    await createNewTask({ title });
    setTitle('');
  };

  const removeTask = async (id: string) => {
    deleteTask({ id });
  };

  return (
    <Container>
      <Content>
        <Header>
          <h1>My Todos</h1>
        </Header>

        <Display hasTasks={tasklist.length !== 0 && tasklist !== null}>
          {tasklist.length === 0 && (
            <Empty>
              <VscChecklist />
              <h2>Add your first to do</h2>
              <p>What do you want to get done today?</p>
            </Empty>
          )}

          {tasklist.length !== 0 &&
            tasklist !== null &&
            tasklist.map((task) => {
              return (
                <Task
                  key={task.id}
                  taskTitle={task.title}
                  handleDelete={() => removeTask(task.id)}
                />
              );
            })}
        </Display>

        <InputField isFocused={isFocused} onSubmit={assignTask}>
          <input
            type="text"
            placeholder="type a task..."
            maxLength={50}
            value={title}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => setTitle(event.target.value)}
          />

          <button type="submit">
            <IoIosAddCircleOutline />
          </button>
        </InputField>
      </Content>
    </Container>
  );
};
