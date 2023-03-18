import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer.js';
import { connect } from 'react-redux';
import Chat from './Chat.jsx';

const mapStateToProps = state => {
  return { dialogPage: state.dialogPage };
};

const mapDispatchToProps = dispatch => {
  return {
    updateText: text => {
      let action = updateNewMessageTextCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      let action = sendMessageCreator();
      dispatch(action);
    },
  };
};
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
