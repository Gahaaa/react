import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

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

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  //   (dispatch) =>
  // bindActionCreators(
  {
    increase,
    decrease,
  }, //객체가 됨
  //   dispatch,
  // ),
)(CounterContainer);
