import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/redusers/dialog-reduser';
import DialogPage from './DialogPage';


let mapStateToProps = (state) =>{
  return{
    dialogPage: state.dialogPage,
    messages: state.dialogPage.messages,
    newMessageText: state.dialogPage.newMessageText
  }
}
let mapDispatchToProps =(dispatch)=>{
    return{
      addMessage: () => {
        dispatch(addMessageActionCreator())
      },
      updateMessageText: (text) =>{
        dispatch(updateMessageActionCreator(text))
      }
  }
}


const  DialogPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogPage);

export default DialogPageContainer;