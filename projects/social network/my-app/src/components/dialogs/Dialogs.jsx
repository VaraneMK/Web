import React from 'react';
import styles from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';

function Dialogs(props) {
  const dialogsElements = props.state.dialogPage.dialogsData.map(el => (
    <DialogItem name={el.name} id={el.id} lastMessage={el.lastMessage} time={el.time} />
  ));

  return <div className={styles.dialogs}>{dialogsElements}</div>;
}

export default Dialogs;
