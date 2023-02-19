import { createAction, handleActions } from 'redux-actions';
//액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
//액션 생성함수 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기상태 정의
const initialState = {
  number: 0,
};

//리듀서 함수 만들기
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState, //redux 함수의 초기값. 액션함수의 초기값
);

export default counter;

//------------------------------

// //액션 타입 정의
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
// //액션 생성함수 만들기
// export const increase = () => ({INCREASE});
// export const decrease = () => ({DECREASE});

// //초기상태 정의
// const initialState = {
//     number:0
// }

// //리듀서 함수 만들기
// function counter(state = initialState, action){
//     switch(action.type){
//         case INCREASE:
//             return{
//                 number:state.number + 1
//             }
//         case DECREASE:
//             return{
//                 number:state.number - 1
//             }
//         default:
//             return state;
//     }
// }

// export default counter;
