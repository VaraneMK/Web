const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, author: 'Author', message: 'Hello world!', likes: '23', comments: '2' },
    { id: 2, author: 'Author', message: "It's my first post", likes: '140', comments: '34' },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_POST:
      if (stateCopy.newPostText !== '') {
        let newPost = {
          id: 3,
          author: 'Author',
          message: stateCopy.newPostText,
          likes: 0,
          comments: 0,
        };

        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = '';
      }
      return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
