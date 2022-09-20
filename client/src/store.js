import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMV from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMV = createSagaMV();

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMV))
);

sagaMV.run(rootSaga);

export default store;
