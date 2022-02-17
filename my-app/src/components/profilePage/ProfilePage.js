import { updateNewPostActionCreator, addPostActionCreator } from '../../redux/redusers/profile-reduser';
import PostItem from './PostItem'


const ProfilePage = (props) => {

 
  let state = props.state.profilePage;
  let newPostBody = state.newPostText;

  let postItem = state.posts
    .map(post => < PostItem messageText={post.messageText} />)

  let sendMessage = () => {
    props.dispatch(addPostActionCreator())
  }

  let changeMessage = (e) => {
    let text = e.target.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action)
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