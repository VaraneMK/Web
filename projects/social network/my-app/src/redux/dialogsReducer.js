const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.message;
      return state;
    case SEND_MESSAGE:
      if (state.newMessageText !== '') {
        let newMessage = {
          id: 5,
          message: state.newMessageText,
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
      }
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageTextCreator = text => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, message: text };
};

export default dialogsReducer;
