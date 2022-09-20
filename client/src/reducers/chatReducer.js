import produce from "immer";
import ACTION_TYPES from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  messages: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.types) {
    case ACTION_TYPES.GET_MESSAGES_REQUEST:
    case ACTION_TYPES.CREATE_MESSAGE_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetching = true;
      });
    }
    case ACTION_TYPES.GET_MESSAGES_ERROR:
    case ACTION_TYPES.CREATE_MESSAGE_ERROR: {
      return produce(state, (draftState) => {
        const {
          payload: { error },
        } = action;
        draftState.isFetching = false;
        draftState.error = error;
      });
    }
    case ACTION_TYPES.GET_MESSAGES_SUCCESS: {
      return produce(state, (draftState) => {
        const {
          payload: { messages },
        } = action;
        draftState.isFetching = false;
        draftState.messages.push(...messages)
      });
    }
    case ACTION_TYPES.CREATE_MESSAGE_SUCCESS: {
      const {
        payload: { message },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.message.push(...message)
      });
    }
    default: {
      return state;
    }
  }
}
