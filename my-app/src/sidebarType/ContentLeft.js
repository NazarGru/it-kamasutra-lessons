import React , {Component} from 'react'
import DialogPage from '../components/dialogPage/DialogPage';
import {Route, Routes} from "react-router-dom";
import ProfilePageContainer from '../components/profilePage/ProfilePageContainer';
import DialogPageContainer from '../components/dialogPage/DialogPageContainer';

const ContentLeft = (props) => {
  return(
    <div  className='content-left-col'>
      <Routes>
          <Route path="pofile" element={ <ProfilePageContainer   />}/>
          <Route path="dialog" element={<DialogPageContainer  />} />
      </Routes>

     </div>
  )
  }
    
  export default ContentLeft;