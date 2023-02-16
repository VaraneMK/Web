import React from 'react';
import styles from './Profile.module.css';
import Posts from '../posts/Posts.jsx';

function Profile() {
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
          <a href="#">
            <p>Друзья</p>
          </a>
          <a href="#">
            <p>Фотографии</p>
          </a>
          <a href="#">
            <p>Музыка</p>
          </a>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
