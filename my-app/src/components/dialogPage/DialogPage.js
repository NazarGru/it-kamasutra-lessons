import React, { Component } from 'react'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/redusers/dialog-reduser';
import DialogItem from './DialogItem'

const DialogPage = (props) => {
  let state = props.state.dialogPage;
  let newMessageText = state.newMessageText;

  let dialogItem = state.messages
    .map(dialog => < DialogItem messageText={dialog.messageText} />)

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let changeMessage = (e) => {
    let text = e.target.value;
    let action = updateMessageActionCreator(text);
    props.dispatch(action)
  }


  return (
       <div>
      <div>
        <textarea value={newMessageText} onChange={changeMessage} />
      </div>
      <div>
        <button onClick={sendMessage}>
          send message
        </button>
      </div>
      {dialogItem}
    </div>
  )
}

export default DialogPage;