import { createAction, handleActions } from "redux-actions";
import { delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
// 액션 타입 선언
const INCREASE_ASYNC = "counter/INCREAMENT_ASYNC";
const DECREASE_ASYNC = "counter/DECREAMENT_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 해당 액션에 대한 액션 생성함수
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다린다
  yield put(increase()); // 특정 액션을 디스패치한다
  const number = yield select((state) => state.counter);
  console.log(`현재 값은 ${number} 입니다.`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해준다
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
  // 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0; // 상태는 꼭 객체일 필요가 없다. 숫자도 작동함.

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
