import PostItem from './PostItem'


const ProfilePage = (props) => {

  let postItem = props.posts
    .map(post => < PostItem messageText={post.messageText} />)

  let sendMessage = () => {
    props.addPost();
  }

  let changeMessage = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }


  return (
    <div>
      <div>
        <textarea value={props.newPostText} onChange={changeMessage} />
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