import { combineReducers } from "redux";
import counter, { counterSaga } from './counter';
import sample from './sample';
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export function* rootSaga(){// 제너레이터함수를 생성
    // all 함수는 여러 사가를 합쳐 주는 역할을 한다.
    yield all([counterSaga()]);
}

export default rootReducer;