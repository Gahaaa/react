import React, { useReducer } from 'react';

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행

  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태반환
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //dispatch 액션을 발생시키는 매소드(setState와 유사)
  //useReducer 훅은 첫번째 값을 함수 reducer로 가져옴, reducer 기본값

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
