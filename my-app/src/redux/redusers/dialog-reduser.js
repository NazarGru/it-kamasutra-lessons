const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    messages: [
        {
            id: 1,
            messageText: '1dfghfdgdf',
            likeCount: 12
        },
        {
            id: 1,
            messageText: '2dfghfdgdf',
            likeCount: 12
        },
        {
            id: 1,
            messageText: '3dfghfdgdf',
            likeCount: 12
        },
        {
            id: 1,
            messageText: '4dfghfdgdf',
            likeCount: 12
        }
    ],
    newMessageText: ''  
}

const dialogReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                messageText: state.newMessageText,
                likeCount: 0
            };
        
            state.messages.push(newMessage);
            state.newMessageText = '';
         
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) =>({
    type: UPDATE_MESSAGE_TEXT, newText: text
});

export default dialogReducer;