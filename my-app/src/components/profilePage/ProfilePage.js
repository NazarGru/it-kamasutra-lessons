import React , {Component} from 'react'
import PostItem from './PostItem'

const ProfilePage = (props) => {

  let postItem = () =>{
    return(
      props.state.posts.map(p => <PostItem state={props.profilePage.posts}/>)
    )
  };
  return(
    <div>
      fdhgdf
      {postItem}
    </div>


  )
  }
    
  export default ProfilePage;