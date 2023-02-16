import React from 'react';
import styles from './SinglePost.module.css';
import { ReactComponent as Like } from './../../icons/heart.svg';
import { ReactComponent as Comments } from './../../icons/message-square.svg';

function SinglePost(props) {
  return (
    <div className={styles.post}>
      <div className={styles.text}>
        <div className={styles.author}>{props.author}</div>
        {props.message}
      </div>
      <div className={styles.actions}>
        <button className={styles.like} type="button">
          <Like width="0.8rem" height="0.8rem" />
          {props.likes}
        </button>
        <button className={styles.comments} type="button">
          <Comments width="0.8rem" height="0.8rem" />
          {props.comments}
        </button>
      </div>
    </div>
  );
}

export default SinglePost;
