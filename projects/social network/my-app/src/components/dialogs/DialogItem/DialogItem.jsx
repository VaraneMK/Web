import React from 'react';
import styles from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  let path = '/dialogs/' + props.id;
  return (
    <NavLink className={styles.link} to={path}>
      <div className={styles.dialogItem}>
        <div className={styles.avatar}></div>
        <div className={styles.userInfo}>
          <div className={styles.user}>
            <h>{props.name}</h>
          </div>
          <div className={styles.lastMessage}>{props.lastMessage}</div>
        </div>
        <div className={styles.time}>{props.time}</div>
      </div>
    </NavLink>
  );
}

export default DialogItem;
