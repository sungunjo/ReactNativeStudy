import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';

import Styled from 'styled-components/native';

interface Props {}

const App = ({  }: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello, World!</Text>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;