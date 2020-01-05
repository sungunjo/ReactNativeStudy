import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = Styled.Text`
  font-size: 24px;
`;

const CountContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CountLabel = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface Props {
  title?: string;
  initValue: number;
}

// 함수형 대신 클래스형 컴포넌트로 바꾸기 위하여 state 의 인터페이스 만듬
interface State {
  // Counter 앱에서는 useState 사용해서 사용했던 count State 를 이제 클래스형이라 그냥 사용 가능
  count: number;
}

class Counter extends React.Component<Props, State> {
  // 클래스 생성자
  // 생성자 함수 사용시 항상 super(props) 를 사용하여 부모 컴포넌트(React.Component) 의 생성자를 호출해야 한다.
  // 또한 새엇ㅇ자 함수에서만 this.state 를 사용하여 state 의 값을 직접 지정할 수 있다.
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: props.initValue,
    };
  }

  // 클래스 컴포넌트는 여러 라이프사이클 API 를 가진다. 
  // 그중 render 함수는 화면에 컴포넌트를 렌더링 할 때 호출되어 이 함수의 반환값이 화면에 표시된다. 
  render() {
    // 클래스 컴포넌트는 함수형과는 다르게 Props 와 State 에 접근하기 위해 this 를 사용하낟. 
    // title 은 안바뀌니까 Props
    const { title } = this.props;
    // count 는 버튼 누를때마다 바뀌니까 State
    // State 는 불변값이므로(const) 변경하려면 this.setState 사용하여 변경
    const { count } = this.state;
    return (
      <Container>
        {title && (
          <TitleContainer>
            <TitleLabel>{title}</TitleLabel>
          </TitleContainer>
        )}
        <CountContainer>
          <CountLabel>{count}</CountLabel>
        </CountContainer>
        <ButtonContainer>
          <Button iconName="plus" onPress={() => this.setState({ count: count + 1} )}/>
          <Button iconName="minus" onPress={() => this.setState({ count: count -1 })}/>
        </ButtonContainer>
      </Container>
    );
  }
};

export default Counter;