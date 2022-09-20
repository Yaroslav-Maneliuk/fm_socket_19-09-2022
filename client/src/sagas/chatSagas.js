import { put } from "redux-saga/effects";
import * as ChatActionCreators from "../actions/chatActionCreators";
import * as API from "../api";

export function* getMessagesSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getMessages();
    yield put(ChatActionCreators.getMessagesError(data));
  } catch (error) {
    yield put(ChatActionCreators.getMessagesError(error));
  }
}

export function* createMessageSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.createMessage(action.payload.message);
    yield put(ChatActionCreators.cerateMessageSuccess(data));
  } catch (error) {
    yield put(ChatActionCreators.cerateMessageError(error));
  }
}
