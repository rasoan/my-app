
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
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('State changed');
    },
    addPost(postMessage) {
        let newPost = {
            content: postMessage,
            imgSrc: 'https://archilab.online/images/1/123.jpg',
            countLikes: '222'
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe();
        //console.log('Added post and newPostText = ', state.profilePage.newPostText)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe();
        //console.log('Changing text and newPostText = ', state.profilePage.newPostText)
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    }
}

window.store = store;
export default store;