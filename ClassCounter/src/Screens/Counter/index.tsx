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
  error: Boolean;
}

class Counter extends React.Component<Props, State> {
  // 클래스 생성자
  // 생성자 함수 사용시 항상 super(props) 를 사용하여 부모 컴포넌트(React.Component) 의 생성자를 호출해야 한다.
  // 또한 생성자 함수에서만 this.state 를 사용하여 state 의 값을 직접 지정할 수 있다.
  // 클래스 컴포넌트에서 State 를 사용하지 않아 초기값 설정이 필요하지 않다면 생성자를 생략해도 된다.
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: props.initValue,
      error: false,
    };
  }

  // 클래스 컴포넌트는 여러 라이프사이클 API 를 가진다. 
  // 그중 render 함수는 클래스 컴포넌트가 렌더링 되는 부분을 정의한다. 
  // 따라서 화면에 컴포넌트를 렌더링 할 때 호출되어 이 함수의 반환값이 화면에 표시된다.
  // render 함수는 부모로부터 받은 props 값이 변경되거나 this.setStat 로 state 값이 변경되어 화면 갱신이 필요할 때 마다 호출된다.

  // 따라서 render 함수에서 this.setState 로 State 값을 변경할 경우 무한 루프에 빠지게 될 수도 있다.
  render() {
    console.log('render');

    // 클래스 컴포넌트는 함수형과는 다르게 Props 와 State 에 접근하기 위해 this 를 사용하낟. 
    // title 은 안바뀌니까 Props
    const { title } = this.props;
    // count 는 버튼 누를때마다 바뀌니까 State
    // State 는 불변값이므로(const) 변경하려면 this.setState 사용하여 변경
    const { count, error } = this.state;
    return (
      <Container>
        {!error && (
          <>
            {title && (
              <TitleContainer>
                <TitleLabel>{title}</TitleLabel>
              </TitleContainer>
            )}
            <CountContainer>
              <CountLabel>{count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
              <Button iconName="plus" onPress={() => this.setState({ count: count + 1})}/>
              <Button iconName="minus" onPress={() => this.setState({ count: count -1 })}/>
            </ButtonContainer>
          </>
        )}
      </Container>
    );
  }

  // 부모로 부터 받은 Props 와 State 를 동기화할 때 사용된다. 
  // 부모로부터 받은 Props 로 State 에 값을 설정하거나, Props 에 의존하여 State 값을 결정할 때 사용한다.
  // State 에 설정하고 싶은 값을 이 함수에서 반환하면 된다. 
  // 동기화 할 State 가 없을 경우 null 을 반환한다.
  // 컴포넌트 생성시 한번 호출되고, Props 와 State 의 동기화를 위해 Props 변경시마다 호출된다.
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');

    return null;
  }

  // 클래스 컴포넌트가 처음으로 화면에 표시된 후, 즉 render 함수가 처음 호출된 후 호출된다.
  // 컴포넌트가 화면에 처음 표시된 후 한번만 호출되기 때문에 ajax 를 통해 데이터를 읽어들이거나 다른 js 라이브러리와 연동 수행에 적합하다.
  // 생성자와 마찬가지로 한번만 호출되고 이후에는 호출되지 않는다.
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 클래스 컴포넌트는 부모로부터 받은 props 가 변경되거나 this.setState 로 State 가 변경될 경우 리렌더링 된다.
  // 이 때 shouldComponentUpdate 함수를 이용하여 렌더링 여부를 제어할 수 있다.
  // 이 함수에서 true 를 반환하면 리렌더링이 수행되고, false 를 반환할 경우 리렌더링되지 않는다.
  // 렌더링은 리액트 컴포넌트중 가장 비용이 많이 드는 부분이기 때문에 이 함수를 사용하여 꼭 필요한 경우만 리렌더링 하도록 하여 앱을 최적화할 수 있다.
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // Props 또는 State 가 변경되어 화면을 다시 그리기 위해 render 함수가 호출된 후, 실제로 화면이 갱신되기 바로 직전에 호출된다. 
  // 이 함수의 반환 값은 componentDidUpdate 의 세 번쨰 매개변수인 snapshot 으로 전달된다.
  // 화면을 갱신하는 동안 수동으로 스크롤의 위치를 고정하는 경우 등에 사용될 수 있다.
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    return {
      testData: true,
    };
  }

  // componentDidMount 는 컴포넌트가 처음 화면에 렌더링될 때 딱 한번만 호출되는 반면 componentDidUpdate 는 처음 렌더링 될 때는
  // 호출되지 않고, Props 또는 State 의 변경으로 화면 갱신시마다 render 함수 호출 이후 호출된다.
  // getSnapshotBeforeUpdate 와 함께 사용하여 스크롤을 수동을 고정시키거나 하는 경우 사용되기도 한다.
  // render 함수와 마찬가지로 this.setState 를 이 함수 내에서 호출했다가는 무한루프에 빠지게될 수도 있다.
  componentDidUpdate(nextProps: Props, prevState: State, snapshot: null) {
    console.log('componentDidUpdate');
    return true;
  }

  // 해당 컴포넌트가 화면에서 완전히 사라진 후 호출된다. 
  // 보통 componentDidMount 에서 연동한 js 라이브러리를 해지하거나 setTimeout, setInterval 등의 타이머를 clearTimeout, clearInterval 로 해제할 때 사용한다.
  // 이 함수는 컴포넌트가 화면에서 사라진 후 호출되기 때문에 여기서 this.setState 를 호출하면 갱신하려는 컴포넌트가 사라진 상태에서 리렌더링 하려고 하기 때문에 메모리 leak 등의 문제가 발생할 수 있다.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 컴포넌트 렌더링에서의 예외 처리를 해주는 함수이다.
  // render 함수의 return 부분에서 에러가 발생하면 componentDidCatch 함수가 실행된다.
  // render 함수에서 {!error && (
  //                  ...
  //               )}
  // 와 같이 해두고 componentDidCatch 에서 error 를 true 로 바꾸면 자식 컴포넌트를 표시하지 않게 되어 비정상 종료를 막을 수 있다.
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error: true,
    });
  }
};

export default Counter;