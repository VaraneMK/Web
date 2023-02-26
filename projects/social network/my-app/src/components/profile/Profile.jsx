import React from 'react';
import styles from './Profile.module.css';
import Posts from './posts/Posts.jsx';

function Profile(props) {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <h>Аватар</h>
          <div className={styles.online}></div>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.profile}>
          <a href="/friends">
            <p>Друзья</p>
          </a>
          <a href="/photos">
            <p>Фотографии</p>
          </a>
          <a href="/music">
            <p>Музыка</p>
          </a>
        </div>
        <Posts dispatch={props.dispatch} postsPage={props.postsData} />
      </div>
    </div>
  );
}

export default Profile;
