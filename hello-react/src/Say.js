import React, { useState } from 'react';

const Say = () => {
  //배열에 첫 번째 원소는 현재상태, 두 번째 원소는 상태를 바꿔주는 함수(세터함수).
  //[text, setText]: set+첫 원소 이름
  const [message, setmessage] = useState(''); //useState('변형 초기값')
  const onClickEnter = () => setmessage('Hello!');
  const onClickLeave = () => setmessage('Bye!');

  const [color, setColor] = useState('black');
  //setColor 변형할 수 있는 hook

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/*{변수{객체}}*/}
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        red
      </button>
      <button style={{ color: 'yellow' }} onClick={() => setColor('yellow')}>
        yellow
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        blue
      </button>
    </div>
  );
};

export default Say;
