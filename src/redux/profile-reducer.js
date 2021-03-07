const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
          {
           content: 'alo',
           imgSrc: 'https://archilab.online/images/1/123.jpg',
           countLikes: '1',
          },
          {
           content: 'helo',
           imgSrc: 'https://archilab.online/images/1/123.jpg',
           countLikes: '3',
          },
  ],
  newPostText: 'it-camasutra.com!',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
              ...state,
              posts: [...state.posts, {
                                       content: action.message,
                                       imgSrc: 'https://archilab.online/images/1/123.jpg',
                                       countLikes: '222',
                                      }],
              newPostText: "",
             };
    case UPDATE_NEW_POST_TEXT:
      return {
              ...state,
              newPostText: action.newText,
             };
    default:
      return state;
  }
}

export default profileReducer;

export let addPostActionCreator = (text) => 
    ({type: ADD_POST, message: text,});

export let updateNewPostTextActionCreator = (newText) => 
    ({type: UPDATE_NEW_POST_TEXT, newText,});