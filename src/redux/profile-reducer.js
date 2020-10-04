const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        content: action.message,
        imgSrc: 'https://archilab.online/images/1/123.jpg',
        countLikes: '222'
      };
      state.posts.push(newPost);
      state.newPostText = '';  
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default:
      console.log('hi');
  }

  return state;
}

export let addPostActionCreator = (text) => 
    ({type: ADD_POST, message: text,});
export let updateNewPostTextActionCreator = (newText) => 
    ({type: UPDATE_NEW_POST_TEXT, newText,});

export default profileReducer;