import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputTxt, setInputTxt] = useState('');
  const [nextId, setNextId] = useState(5);
  //함수형 useState 씀

  const onChange = (e) => setInputTxt(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, //nextId를 id로 설정(초기 5)
      text: inputTxt,
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputTxt('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input value={inputTxt} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </div>
  );
};

export default IterationSample;
