import React , {Component} from 'react'

const PostItem = (props) => {

  return(
    <div>
      {console.log(props.s.profilePage.posts.id)}
        {props.s.profilePage.posts.id}
        {props.s.profilePage.posts.messageText}
        {props.s.profilePage.posts.likeCount}

     </div>
  )
  }
    
  export default PostItem;