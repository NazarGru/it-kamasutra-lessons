import { updateNewPostActionCreator, addPostActionCreator } from '../../redux/redusers/profile-reduser';
import ProfilePage from './ProfilePage';


const ProfilePageContainer = (props) => {
  let state = props.store.getState().profilePage;


  let sendMessage = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let changeMessage = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  }


  return (
    <ProfilePage updateNewPostText={changeMessage} addPost={sendMessage} posts={state.posts} newPostText={state.newPostText}/>
  )

}

export default ProfilePageContainer;