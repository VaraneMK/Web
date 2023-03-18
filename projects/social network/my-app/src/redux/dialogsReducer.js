const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Аванесян Артём', lastMessage: 'Hello boyyy', time: '17:50' },
    { id: 2, name: 'Аванесян Артём', lastMessage: 'Hello boyyy', time: '17:50' },
    { id: 3, name: 'Аванесян Артём', lastMessage: 'Hello boyyy', time: '17:50' },
    { id: 4, name: 'Аванесян Артём', lastMessage: 'Hello boyyy', time: '17:50' },
    { id: 5, name: 'Аванесян Артём', lastMessage: 'Hello boyyy', time: '17:50' },
    { id: 6, name: 'Аванесян Артём', lastMessage: 'Hello boyyy', time: '17:50' },
  ],

  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hello 2' },
    { id: 3, message: 'Hello 3' },
    { id: 4, message: 'Hello 4' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.message;
      return stateCopy;
    case SEND_MESSAGE:
      if (stateCopy.newMessageText !== '') {
        let newMessage = {
          id: 5,
          message: stateCopy.newMessageText,
        };
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageText = '';
      }
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageTextCreator = text => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, message: text };
};

export default dialogsReducer;
