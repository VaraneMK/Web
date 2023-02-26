import React from 'react';
import SinglePost from '../singlepost/SinglePost';
import styles from './Posts.module.css';
import { ReactComponent as Send } from './../../../icons/send.svg';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer.js';

function posts(props) {
  const postsElements = props.postsPage.postsData.map(el => (
    <SinglePost author={el.author} message={el.message} likes={el.likes} comments={el.comments} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.posts}>
      <h4>Посты</h4>
      <div className={styles.inputPost}>
        <textarea
          ref={newPostElement}
          placeholder="Что у Вас нового?"
          className={styles.input}
          id="textarea"
          value={props.postsPage.newPostText}
          onChange={onPostChange}
        ></textarea>
        <button onClick={addPost} className={styles.inputBtn}>
          <Send width="20px" height="20px" />
        </button>
      </div>
      {postsElements}
      <script src="resize.js"></script>
    </div>
  );
}

export default posts;
