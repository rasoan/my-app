let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        content: postMessage,
        imgSrc: 'https://archilab.online/images/1/123.jpg',
        countLikes: '222'
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.
    console.log('Added post and newPostText = ', state.profilePage.newPostText)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
    console.log('Changing text and newPostText = ', state.profilePage.newPostText)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

window.state = state;

export default state;