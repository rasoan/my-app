const ADD_FRIEND = 'ADD_FRIEND';

let initialState = {
  friendList: [{
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
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      let newFriend = {
        id: action.id,
        name: action.name,
        imgSrc: "https://www.meme-arsenal.com/memes/3f3299a732784726e8fde7455231bce6.jpg",
      };
      state.friendList.push(newFriend);
      break;
    default:
  }
  return state;
}

export default sidebarReducer;

export let addFriendActionCreator = (friend) =>
  ({
    type: ADD_FRIEND,
    friend,
  });