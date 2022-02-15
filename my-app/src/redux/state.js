let store = {
 
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    messageText: 'dfghfdgdf',
                    likeCount: 12
                },
                {
                    id: 1,
                    messageText: 'dfghfdgdf',
                    likeCount: 12
                },
                {
                    id: 1,
                    messageText: 'dfghfdgdf',
                    likeCount: 12
                },
                {
                    id: 1,
                    messageText: 'dfghfdgdf',
                    likeCount: 12
                }
            ],
        newPostText: 'sdgdfg'   

        },

        dialogPage: {
            usersDialogItem: [
                {
                    id: 1,
                    name: 'Петро Васильович Ываненко'
                },
                {
                    id: 1,
                    name: 'Петро Васильович Ываненко'
                },
                {
                    id: 1,
                    name: 'Петро Васильович Ываненко'
                },
                {
                    id: 1,
                    name: 'Петро Васильович Ываненко'
                },
                {
                    id: 1,
                    name: 'Петро Васильович Ываненко'
                }
            ],
            messageDialogItem: [
                {
                    id: 1,
                    messageText: 'dfghfdgdf'
                },
                {
                    id: 1,
                    messageText: 'dfghfdgdf'
                },
                {
                    id: 1,
                    messageText: 'dfghfdgdf'
            
                },
                {
                    id: 1,
                    messageText: 'dfghfdgdf'
            
                }
            ]
        }
    },
    getState (){
        return this._state
    },
    _renderEntaireTree() {
        console.log('work')
    },
    subscribe(observer){
        this._renderEntaireTree = observer;
    }
}

export default store;