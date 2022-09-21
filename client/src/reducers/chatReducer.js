import produce from "immer";
import ACTION_TYPES from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  messages: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_MESSAGES_REQUEST:
    case ACTION_TYPES.CREATE_MESSAGE_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetching = true;
      });
    }
    case ACTION_TYPES.GET_MESSAGES_ERROR:
    case ACTION_TYPES.CREATE_MESSAGE_ERROR: {
      const {
        payload: { error },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.error = error;
      });
    }
    case ACTION_TYPES.GET_MESSAGES_SUCCESS: {
      const {
        payload: { messages },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(...messages);
        draftState.error = null;
      });
    }
    case ACTION_TYPES.CREATE_MESSAGE_SUCCESS: {
      const {
        payload: { message },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(message);
        draftState.error = null;
      });
    }
    default: {
      return state;
    }
  }
}
