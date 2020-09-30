
let store = {
    _state: {
        profilePage: {
        posts: [{
                content: 'alo',
                imgSrc: 'https://archilab.online/images/1/123.jpg',
                countLikes: '1'
            },
            {
                content: 'helo',
                imgSrc: 'https://archilab.online/images/1/123.jpg',
                countLikes: '3'
            },
        ],
        newPostText: 'it-camasutra.com!',
        },
        messagesPage: {
        messages: [{
                id: "1",
                message: "Hello my friend"
            },
            {
                id: "2",
                message: "By my friend"
            },
            {
                id: "3",
                message: "Hello world"
            },
            {
                id: "4",
                message: "Good bye"
            },
            {
                id: "5",
                message: "ou sheet!"
            },
        ],
        dialogsData: [{
                id: "1",
                name: "Miha"
            },
            {
                id: "2",
                name: "Kostya"
            },
            {
                id: "3",
                name: "Vika"
            },
            {
                id: "4",
                name: "Tola"
            },
            {
                id: "5",
                name: "Mola"
            },
            {
                id: "6",
                name: "Natasha"
            },
        ],
       },
       sidebar: {}
    },
    _callSubscribe() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch( action ) {
        if ( action.type === 'ADD-POST' ) {
            let newPost = {
                content: action.message,
                imgSrc: 'https://archilab.online/images/1/123.jpg',
                countLikes: '222'
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe();
            //console.log('Added post and newPostText = ', state.profilePage.newPostText)
        } else if ( action.type === 'UPDATE-NEW-POST-TEXT' ) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe();
            //console.log('Changing text and newPostText = ', state.profilePage.newPostText)
        }
    },
}

window.store = store;
export default store;