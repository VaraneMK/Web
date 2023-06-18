const USER_FOLLOW = 'USER_FOLLOW';
const USER_UNFOLLOW = 'USER_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 60,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case USER_FOLLOW:
      stateCopy.users = stateCopy.users.map(el => {
        if (el.id === action.userId) {
          el.followed = true;
        }
        return el;
      });
      return stateCopy;
    case USER_UNFOLLOW:
      stateCopy.users = stateCopy.users.map(el => {
        if (el.id === action.userId) {
          el.followed = false;
        }
        return el;
      });
      return stateCopy;
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    default:
      return state;
  }
};

export const followActionCreator = userId => {
  return {
    type: USER_FOLLOW,
    userId,
  };
};

export const unFollowActionCreator = userId => {
  return {
    type: USER_UNFOLLOW,
    userId,
  };
};

export const setUsersActionCreator = users => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPageActionCreator = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setUsersCountActionCreator = totalUsersCount => {
  return {
    type: SET_USERS_COUNT,
    totalUsersCount,
  };
};

export default usersReducer;
