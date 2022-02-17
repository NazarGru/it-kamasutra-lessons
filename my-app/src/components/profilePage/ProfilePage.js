import React, { Component } from 'react'
import PostItem from './PostItem'
// import profileReducer from '../../redux/profile-reduser';
import { updateNewPostActionCreator, addPostActionCreator } from '../../redux/profile-reduser';
import store from '../../redux/store';

const ProfilePage = (props) => {

  let store = props.store;
  let state = props.state.profilePage;
  let newPostBody = state.newPostText;

  let postItem = state.posts
    .map(dialog => < PostItem messageText={dialog.messageText} />)

  let sendMessage = () => {
    props.dispatch(addPostActionCreator())
  }

  let changeMessage = (e) => {
    let text = e.target.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action)

    debugger
  }


  return (
    <div>
      <div>
        <textarea value={newPostBody} onChange={changeMessage} />
      </div>
      <div>
        <button onClick={sendMessage}>
          send post
        </button>
      </div>
      {postItem}
    </div>


  )

}

export default ProfilePage;