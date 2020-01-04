import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import Styled from 'styled-components/native';

const ScrollVew = Styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const Body = Styled.View`
  background-color: ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionDescription = Styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 300;
  color: ${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight: 700;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollVew contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>
                <HighLight>Hello, World!</HighLight>
              </SectionDescription>
            </SectionContainer>
          </Body>
        </ScrollVew>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;