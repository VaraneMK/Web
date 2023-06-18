import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from './posts/PostsContainer';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/friends">Друзья</NavLink>
          <NavLink to="/photos">Фотографии</NavLink>
          <NavLink to="/music">Музыка</NavLink>
        </div>
        <PostsContainer />
      </div>
    </div>
  );
}

export default Profile;
