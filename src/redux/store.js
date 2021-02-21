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
            }],
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
        sidebar: {},
        friendList: [
            {
                id: "12",
                name: "Иван",
                imgSrc: "https://instagrammi.ru/wp-content/uploads/kostya-kuper.jpg",
            },
            {
                id: "132",
                name: "Кот",
                imgSrc: "https://archilab.online/images/1/123.jpg",
            },
            {
                id: "1234",
                name: "Ник",
                imgSrc: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1093x538:1095x536)/origin-imgresizer.eurosport.com/2020/06/23/2837825-58521528-2560-1440.jpg",
            },
            {
                id: "324231",
                name: "Чегевара",
                imgSrc: "https://shkolazhizni.ru/img/content/i189/189232_or.jpg",
            },
            {
                id: "1326",
                name: "Гриша",
                imgSrc: "https://n1s1.elle.ru/b2/e6/76/b2e676397135eaad6f49115eaf4c7138/1200x918_0xc35dbb80_15505057561493113086.jpeg",
            },
            {
                id: "13",
                name: "Валерия",
                imgSrc: "https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/296/248/9eb/5ae99eb248296.jpeg",
            },
            {
                id: "13745",
                name: "Коля",
                imgSrc: "https://www.meme-arsenal.com/memes/3f3299a732784726e8fde7455231bce6.jpg",
            },
        ]
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscribe();
    },
}

window.store = store;
export default store;