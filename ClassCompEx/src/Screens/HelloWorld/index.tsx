import React from 'react';
import  { Text, SafeAreaView, TouchableOpacity } from 'react-native';

// Props interface 정의
interface Props {
	greetings?: string;
	initName: string;
}

// State interface 정의
interface State {
  name: string;
  count: number;
	error: Boolean;
}

// 클래스 컴포넌트
class HelloWorld extends React.Component<Props, State> {
  // 클래스 생성자
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    this.state = {
      name: props.initName,
      count: 0,
      error: false,
    };
  }

  // 화면 렌더링 함수
  render() {
    console.log('render');

    const { greetings } = this.props;
    const { name, count, error } = this.state;

    return (
      <SafeAreaView>
        {!error && (
          <>
            <TouchableOpacity onPress={()=>{this.setState({ count: count + 1 })}}>
              <Text>{greetings}, {name}! count is {count}</Text>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    );
  }

  // Props 와 State 동기화 함수
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    if (nextProps.greetings === 'Hello') {
      return { name: 'World' };
    } else {
      return null;
    }
  }

  // 클래스 컴포넌트 마운트시 호출되는 함수
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 리렌더링 여부 결정 함수
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    if (nextState.count === 6) {
      return false;
    } else {
      return true;
    }
  }

  // render 함수 호출시 화면 갱신 직전에 호출되는 함수
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    return {
      testData: true,
    };
  }

  // render 함수 호출시 getSnapshotBeforeUpdate 다음으로 호출되는 함수
  componentDidUpdate(nextProps: Props, prevState: State, snapshot: null) {
    console.log('componentDidUpdate');
    return true;
  }

  // 해당 컴포넌트가 unmount 될 때 호출되는 함수
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 컴포넌트 렌더링에서의 예외 처리 함수
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error: true,
    });
  }
}

export default HelloWorld;