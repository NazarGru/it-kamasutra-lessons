import React , {Component} from 'react'

const PostItem = (props) => {

  return(
    <div>
        {props.state.id}
        {props.state.messageText}
        {props.state.likeCount}

     </div>
  )
  }
    
  export default PostItem;