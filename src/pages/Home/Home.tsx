import { FormEvent, useState } from 'react';
import { VscChecklist } from 'react-icons/vsc';
import { IoIosAddCircleOutline } from 'react-icons/io';

import {
  Container,
  Content,
  Header,
  Display,
  Empty,
  Task,
  InputField,
} from './home.styles';

export const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(0);

  const assignTodo = (event: FormEvent) => {
    // Event type definition -> event: ChangeEvent<HTMLInputElement>
    event.preventDefault();
    setTodo('');
  };

  return (
    <Container>
      <Content>
        <Header>
          <h1>My Todos</h1>
        </Header>

        <Display hasTasks={todos > 0}>
          {!todos ? (
            <Empty>
              <VscChecklist />
              <h2>Add your first to do</h2>
              <p>What do you want to get done today?</p>
            </Empty>
          ) : (
            <Task>Hi</Task>
          )}
        </Display>

        <InputField isFocused={isFocused} onSubmit={assignTodo}>
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="type a task..."
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />

          <button type="submit">
            <IoIosAddCircleOutline />
          </button>
        </InputField>
      </Content>
    </Container>
  );
};
