import React , {Component} from 'react'
import DialogPage from '../components/dialogPage/DialogPage';
import ProfilePage from '../components/profilePage/ProfilePage';
import {Route, Routes} from "react-router-dom";

class ContentLeft extends Component {
    render(){
      return(
        <div  className='content-left-col'>
          <Routes>
              <Route path="pofile" element={<ProfilePage/>}/>
              <Route path="dialog" element={<DialogPage/>}/>
          </Routes>
   
         </div>
      )
    }
  }
    
  export default ContentLeft;