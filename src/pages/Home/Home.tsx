import { FormEvent, useState } from 'react';
import { VscChecklist } from 'react-icons/vsc';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { useTasks } from '../../hooks';

import {
  Container,
  Content,
  Header,
  Display,
  Empty,
  InputField,
} from './home.styles';
import { Task } from './components/Task';

export const Home = () => {
  const { tasklist, createNewTask } = useTasks();
  const [isFocused, setIsFocused] = useState(false);
  const [title, setTitle] = useState('');

  const assignTodo = (event: FormEvent) => {
    // Event type definition -> event: ChangeEvent<HTMLInputElement>
    event.preventDefault();
    if (!title) return;
    createNewTask({ title });
    setTitle('');
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
              return <Task key={task.id} taskTitle={task.title} />;
            })}
        </Display>

        <InputField isFocused={isFocused} onSubmit={assignTodo}>
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="type a task..."
            value={title}
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
