//class형

//rcc enter tab으로 파일 형식 만들기
//App.js 연결

//props는 읽기전용 전달받는 용도
//state는 변경될 내용
import React, { Component } from 'react';

class EventPractice extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  // 화살표 함수가 아닌 그냥함수 - bind 사용시
  // 객체 접근 후 bind 연결

  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }

  state = {
    message: '',
    username: '',
  }; //초기값 설정

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      //key : vaule
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
