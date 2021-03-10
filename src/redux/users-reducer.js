import * as axios from "axios";


const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [{
      id: "12",
      friend: true,
      name: "Иван",
      town: "Минск",
      country: "Беларусь",
      imgSrc: "https://instagrammi.ru/wp-content/uploads/kostya-kuper.jpg",
    },
    {
      id: "132",
      friend: false,
      name: "Кот",
      town: "Москва",
      country: "Россия",
      imgSrc: "https://archilab.online/images/1/123.jpg",
    },
    {
      id: "1234",
      friend: true,
      name: "Ник",
      town: "Киев",
      country: "Украина",
      imgSrc: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1093x538:1095x536)/origin-imgresizer.eurosport.com/2020/06/23/2837825-58521528-2560-1440.jpg",
    },
    {
      id: "324231",
      friend: false,
      name: "Чегевара",
      town: "Минск",
      country: "Беларусь",
      imgSrc: "https://shkolazhizni.ru/img/content/i189/189232_or.jpg",
    },
    {
      id: "1326",
      friend: true,
      name: "Гриша",
      town: "Вашингтон",
      country: "Америка",
      imgSrc: "https://n1s1.elle.ru/b2/e6/76/b2e676397135eaad6f49115eaf4c7138/1200x918_0xc35dbb80_15505057561493113086.jpeg",
    },
    {
      id: "13",
      friend: false,
      name: "Валерия",
      town: "Минск",
      country: "Беларусь",
      imgSrc: 
      "https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/296/248/9eb/5ae99eb248296.jpeg",
    },
    {
      id: "13745",
      friend: true,
      name: "Коля",
      town: "Париж",
      country: "Франция",
      imgSrc: "https://www.meme-arsenal.com/memes/3f3299a732784726e8fde7455231bce6.jpg",
    },
  ]
};

const sidebarReducer = (state = initialState, action) => {
  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    console.log(response.data.items);
  });
  switch (action.type) {
    case SET_USERS:
      return {
              ...state,
              users: [...state.users, ...action.users]
             }
    case ADD_FRIEND:
      return {
              ...state,
              users: state.users.map(u => {
                if(u.id === action.id) {
                  u.friend = true;
                }
                return u;
              }),
             }
    case DELETE_FRIEND:
      return {
              ...state,
              users: state.users.map(u => {
                if(u.id === action.id) {
                  u.friend = false;
                }
                return u;
              }),
             }
    default:
      return state;
  }
}

export default sidebarReducer;
export let setUsers =(users) => ({type: SET_USERS, users});
export let addFriendActionCreator = (id) => ({type: ADD_FRIEND, id});
export let deleteFriendActionCreator = (id) => ({type: DELETE_FRIEND, id});
