import React, { Fragment } from 'react';
import Styled from 'styled-components/native';
import { TodoListContextProvider } from '~/Context/TodoListContext'
import Todo from './Screens/Todo'

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <TodoListView />
        <AddTodo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;