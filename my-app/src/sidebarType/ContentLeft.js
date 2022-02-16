import React , {Component} from 'react'
import DialogPage from '../components/dialogPage/DialogPage';
import ProfilePage from '../components/profilePage/ProfilePage';
import {Route, Routes} from "react-router-dom";

const ContentLeft = (props) => {
  return(
    <div  className='content-left-col'>
      <Routes>
          <Route path="pofile" element={<ProfilePage state={props.state}/>}/>
          <Route path="dialog" element={<DialogPage />}/>
      </Routes>

     </div>
  )
  }
    
  export default ContentLeft;