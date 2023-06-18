import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import userIcon from './../../icons/icons8-male-user-50.png';

const Users = props => {
  let usersList = props.users.map(el => (
    <UserItem
      id={el.id}
      avatar={el.photos.small != null ? el.photos.small : userIcon}
      name={el.name}
      followed={el.followed}
      // age={el.age}
      // location={el.location}
      follow={props.follow}
      unfollow={props.unfollow}
      setUsers={props.setUsers}
    />
  ));

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.usersList}>
      {usersList}
      <div className={styles.pageNumbers}>
        {pages.map(p => (
          <span
            onClick={e => props.onPageChanged(p)}
            className={props.currentPage === p ? styles.selectedPage : styles.page}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
