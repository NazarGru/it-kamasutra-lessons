import React, { Component } from 'react'
import PostItem from './PostItem'
// import profileReducer from '../../redux/profile-reduser';
import { updateNewPostActionCreator, addPostActionCreator } from '../../redux/profile-reduser';

const ProfilePage = (props) => {
  let newPostBody = props.state.profilePage.newPostText;

  let postItem = props.state.profilePage.posts
    .map(dialog => < PostItem messageText={dialog.messageText} />)

  let sendMessage = () => {
    addPostActionCreator()
  }

  let changeMessage = (e) => {
    let body = e.target.value;
   updateNewPostActionCreator(body)
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