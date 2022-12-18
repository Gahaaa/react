import React from 'react';
import PropTypes from 'prop-types'; //모듈 첫 글자 대문자로 끌어서 씀(암묵적 룰)

const MyComponet = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      {name}의 첫 컴포넌트
      <br />
      children 같은 {children}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  ); //두줄 이상시 소괄호 필수
};

MyComponet.propTypes = {
  //헷갈리지 않게 propTypes 명칭을 똑같이 하되 소문자
  name: PropTypes.string, //무조건 문자
  favoriteNumber: PropTypes.number.isRequired,
};

MyComponet.defaultProps = {
  name: '기본이름',
}; //에러 방지 기본이름으로 사용

export default MyComponet;
