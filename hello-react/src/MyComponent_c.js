//class 형
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent_c extends Component {
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  static defaultProps = {
    name: '기본이름',
  }; //static은 class가 읽히기 전에 검사

  render() {
    //class형 render()함수 꼭 필요함
    const { name, children, favoriteNumber } = this.props;

    return (
      <div>
        {name}의 첫 컴포넌트
        <br />
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default MyComponent_c;
