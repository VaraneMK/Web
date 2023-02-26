import React from 'react';
import styles from './Message.module.css';

function Message(props) {
  return (
    <div className={styles.message}>
      <div className={styles.avatar}></div>
      <h>{props.name}</h>
      <span> {props.message}</span>
    </div>
  );
}

export default Message;
