import DialogItem from './DialogItem'

const DialogPage = (props) => {
  debugger
  let dialogItem = props.messages
    .map(dialog => < DialogItem messageText={dialog.messageText} />)

  let sendMessage = () => {
    props.addMessage();
  }

  let changeMessage = (e) => {
    let text = e.target.value;
    props.updateMessageText(text)
  }


  return (
       <div>
      <div>
        <textarea value={props.newMessageText} onChange={changeMessage} />
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