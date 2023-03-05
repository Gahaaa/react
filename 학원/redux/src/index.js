import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { createLogger } from "redux-logger";
//import loggerMiddleware from './lib/loggerMiddleware';
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(logger, ReduxThunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
