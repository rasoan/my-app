import usersReducer from "./users-reducer";
import {followAC, unfollowAC} from "../actions/creators/users-creator";

let initialState =  {
    users: [
        {
            name: 'Shiro',
            id: 17062,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'cyber',
            id: 17061,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }
    ],
    defaultAvatarSrc: '/my-app/static/media/avatar.d48a8973.png',
    pagesSize: 5,
    totalUsersCount: 12070,
    isFetchingFollowOrUnfollowIdList: [],
    isFetchingGetUsersCards: false,
    isFetchingGetUsersCount: false
};

test('Проверяем подписку на друга', () => {
    const resultState = usersReducer(initialState, followAC(17061));
    const followed = resultState.users.find((user) => user.id === 17061).followed;
    expect(followed).toBeTruthy();
});

test('Проверяем отписку от друга', () => {
    const resultState = usersReducer(initialState, unfollowAC(17061));
    const unfollowed = resultState.users.find((user) => user.id === 17061).followed;
    expect(unfollowed).toBeFalsy();
});