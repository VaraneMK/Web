import React from 'react';
import styles from './UserItem.module.css';
import { ReactComponent as AddBtn } from './../../../icons/user-plus.svg';
import { ReactComponent as DeleteBtn } from './../../../icons/user-minus.svg';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.size = 30;
  }

  render() {
    return (
      <div className={styles.item}>
        <div className={styles.avatar}>
          <img src={this.props.avatar} alt="avatar" />
        </div>
        <div className={styles.userInfo}>
          <h4>{this.props.name}</h4>
          {/* {props.age} */}
          {/* , {props.location.city} */}
        </div>
        <div className={styles.actions}>
          {this.props.followed ? (
            <button className={styles.btn} onClick={() => this.props.unfollow(this.props.id)}>
              <DeleteBtn width={this.size} height={this.size} />
            </button>
          ) : (
            <button className={styles.btn} onClick={() => this.props.follow(this.props.id)}>
              <AddBtn width={this.size} height={this.size} />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default UserItem;
