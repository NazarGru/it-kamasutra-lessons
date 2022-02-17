const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
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
    newPostText: 'ef'  
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messageText: state.newPostText,
                likeCount: 0
            };
            state.newPostText = '';
            state.posts.push(newPost);
         
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;