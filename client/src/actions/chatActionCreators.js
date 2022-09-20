import ACTION_TYPES from "./";

//getAction

export const getMessagesRequest = () => ({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
});

export const getMessagesSuccess = (messages) => ({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: { messages },
});

export const getMessagesError = (error) => ({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  payload: { error },
});

//createAction

export const cerateMessageRequest = (message) => ({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
  payload: { message },
});

export const cerateMessageSuccess = (message) => ({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: { message },
});

export const cerateMessageError = (error) => ({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  payload: { error },
});
