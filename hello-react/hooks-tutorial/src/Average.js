//useState 사용
import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링 될 때만 함수 생성
  //기능만 필요(데이터를 받지 않음), 한 번만 실행되도 ok

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    //input 기본으로 string 설정
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]); //number혹은 list 바뀌었을 떄만 함수생성(값을 받아 계속 업데이트 필요)

  const avg = useMemo(() => getAverage(list), [list]);
  //list가 바뀌면 getAverage 함수 호출

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
          //react에서 map 사용시 키값 필수적용, key값 index로 하면 안되는데 대충해놓음...
        ))}
      </ul>
      <div>
        <b>평균값</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;

//----------------------------------------------------------------
//useMemo 사용
