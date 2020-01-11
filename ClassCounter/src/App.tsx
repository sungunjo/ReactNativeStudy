import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <Container>
      <Counter title="This is a ClassCounter App" initValue={5} />
    </Container>
  );
};

export default App;