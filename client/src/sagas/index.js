import { takeEvery } from "redux-saga/effects";
import ACTION_TYPES from "../actions";
import { getMessagesSaga, createMessageSaga } from "./chatSagas";

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPES.CREATE_MESSAGE_REQUEST, createMessageSaga);
  yield takeEvery(ACTION_TYPES.GET_MESSAGES_REQUEST, getMessagesSaga);
}
