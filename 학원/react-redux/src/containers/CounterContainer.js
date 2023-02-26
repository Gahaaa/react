import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

import React, { useCallback } from 'react';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
export default CounterContainer;

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({ //상태값
//   //state: 현재 store가 지니고 있는 상태를 가리킨다
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({ //객체값
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   //   (dispatch) =>
//   // bindActionCreators(
//   {
//     increase,
//     decrease,
//   }, //객체가 됨
//   //   dispatch,
//   // ),
// )(CounterContainer);
