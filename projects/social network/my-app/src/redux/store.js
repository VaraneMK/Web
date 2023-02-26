import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
  _state: {
    dialogPage: {
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
    },

    profilePage: {
      postsData: [
        { id: 1, author: 'Author', message: 'Hello world!', likes: '23', comments: '2' },
        { id: 2, author: 'Author', message: "It's my first post", likes: '140', comments: '34' },
      ],
      newPostText: '',
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
