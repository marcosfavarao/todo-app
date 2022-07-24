import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { Container, Content, Header, Display, InputField } from './home.styles';

export const Home = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Content>
        <Header>
          <h1>My Todos</h1>
        </Header>

        <Display>
          <div>Hi</div>
        </Display>

        <InputField>
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <IoIosAddCircleOutline />
        </InputField>
      </Content>
    </Container>
  );
};
