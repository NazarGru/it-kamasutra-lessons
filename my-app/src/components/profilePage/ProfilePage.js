import React , {Component} from 'react'
import PostItem from './PostItem'

const ProfilePage = (props) => {
  let postItem = props.s.profilePage.posts.map((p) =>{
    <PostItem s={props.s}/>
  })

  return(
    <div>

      {postItem}
    </div>


  )
  }
    
  export default ProfilePage;