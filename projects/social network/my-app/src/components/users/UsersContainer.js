import axios from 'axios';
import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersCountActionCreator,
  unFollowActionCreator,
} from '../../redux/usersRecuder';

class UsersAPIComponent extends React.Component {
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    return (
      <Users
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unFollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageActionCreator(currentPage));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setUsersCountActionCreator(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;
