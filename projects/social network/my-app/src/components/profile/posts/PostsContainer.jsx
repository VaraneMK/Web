import Posts from './Posts.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer.js';
import { connect } from 'react-redux';

// function PostsContainer(props) {
//   return (
//     <StoreContext.Consumer>
//       {value => {
//         const addPost = () => {
//           let action = addPostActionCreator();
//           value.dispatch(action);
//         };

//         const onPostChange = text => {
//           let action = updateNewPostTextActionCreator(text);
//           value.dispatch(action);
//         };
//         return <Posts postsPage={value.state.profilePage} updateNewPostText={onPostChange} addPost={addPost} />;
//       }}
//     </StoreContext.Consumer>
//   );
// }

const mapStateToProps = state => {
  return { postsPage: state.profilePage };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
