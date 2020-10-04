import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';


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
        dialogsPage: {
          messages: [{
                id: "1",
                message: "Hello my friend"
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
        newMessageBody: "",
       },
       sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
       // console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch( action ) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscribe();

    },
}

window.store = store;
export default store;