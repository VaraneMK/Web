import React from 'react';
import styles from './Chat.module.css';
import { ReactComponent as Back } from './../../../icons/arrow-left.svg';
import { ReactComponent as Send } from './../../../icons/send.svg';
import { ReactComponent as PaperClip } from './../../../icons/paperclip.svg';
import { NavLink } from 'react-router-dom';
import Message from './message/Message.jsx';

function Chat(props) {
  let messagesItems = props.dialogPage.messages.map(el => <Message name="Артём Аванесян" message={el.message} />);
  let newMessageText = props.dialogPage.newMessageText;

  let inputElement = React.createRef();

  const updateText = () => {
    let text = inputElement.current.value;
    props.updateText(text);
  };
  const sendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <NavLink className={styles.link} to="/dialogs">
          <Back width="2rem" height="1.2rem" />
          Назад
        </NavLink>
        <div className={styles.user}>
          <div className={styles.avatar}></div>
          Артём Аванесян
        </div>
      </div>
      <div className={styles.messages}>{messagesItems}</div>
      <div className={styles.input}>
        <PaperClip className={styles.paperclip + ' ' + styles.buttons} />
        <input
          ref={inputElement}
          onChange={updateText}
          className={styles.inputText}
          type="text"
          placeholder="Введите сообщение"
          value={newMessageText}
        ></input>
        <Send onClick={sendMessage} className={styles.send + ' ' + styles.buttons} />
      </div>
    </div>
  );
}

export default Chat;
