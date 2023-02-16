import React from 'react';
import SinglePost from '../singlepost/SinglePost';
import styles from './Posts.module.css';
import { ReactComponent as Send } from './../../icons/send.svg';

function posts() {
  return (
    <div className={styles.posts}>
      <h4>Посты</h4>
      <div className={styles.inputPost}>
        <textarea placeholder="Что у Вас нового?" class={styles.input} id="textarea"></textarea>
        <button className={styles.inputBtn}>
          <Send width="20px" height="20px" />
        </button>
      </div>
      <SinglePost author="Author" message="Hello world!" likes="23" comments="2" />
      <SinglePost author="Author" message="It's my first post" likes="140" comments="34" />
      <script src="resize.js"></script>
    </div>
  );
}

export default posts;
