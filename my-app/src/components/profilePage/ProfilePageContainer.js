import { updateNewPostActionCreator, addPostActionCreator } from '../../redux/redusers/profile-reduser';
import ProfilePage from './ProfilePage';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
  return{
    profilePage: state.profilePage,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps =(dispatch)=>{
    return{
      addPost: () => {
        dispatch(addPostActionCreator())
      },
      updateNewPostText: (text) =>{
        dispatch(updateNewPostActionCreator(text))
      }
  }
}


const  ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
export default ProfilePageContainer;