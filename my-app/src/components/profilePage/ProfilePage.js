import React , {Component} from 'react'
import PostItem from './PostItem'

const ProfilePage = (props) => {
  debugger
  let postItem = props.state.profilePage.posts
  .map( dialog =>< PostItem  messageText={dialog.messageText}/>)


  return(
    <div>
       {postItem}
    </div>


  )
  }
    
  export default ProfilePage;