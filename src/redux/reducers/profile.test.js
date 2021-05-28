import profileReducer from "./profile-reducer";
import {DEFAULT_STATUS_TEXT} from "../../constants/Profile";
import {
    addPostAC, getStatusAC, saveProfileAC,
    setUserProfileAC,
    startFetchingAC,
    stopFetchingAC,
    updateNewStatusTextAC, updateProfilePictureAC
} from "../actions/creators/profile-creator";


let initialState = {
    posts: [{
        content: 'alo',
        imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
        countLikes: '1',
    },
        {
            content: 'helo',
            imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
            countLikes: '3',
        },
    ],
    profile: {},
    isFetching: false,
    defaultStatusText: DEFAULT_STATUS_TEXT,
    statusText: DEFAULT_STATUS_TEXT,
    lookingAtMyProfile: true,
    redrawToProfileComponent: true,
};

const testReducerAuth = (descriptionTest,
                         actionCreatorObj,
                         checkedValues) => {
    test(descriptionTest, () => {
        const resultState = profileReducer(initialState, actionCreatorObj.actionCreator(...actionCreatorObj.parameters));
        checkedValues.forEach(parameter => {
            const resultParameter = resultState[parameter.name];
            expect(resultParameter).toEqual(parameter.value);
        });
    });
}

describe("Тестирование редюсера профайла", () => {
    testReducerAuth(
        "Записать данные профайла",
        {
            actionCreator: setUserProfileAC,
            parameters: [{photos: {large: "href"}}],
        },
        [
            {name: 'profile', value: {photos: {large: "href"}}},
        ]);

    testReducerAuth(
        "Добавить пост",
        {
            actionCreator: addPostAC,
            parameters: ["message"],
        },
        [
            {name: 'posts', value: [
                    {
                        content: 'alo',
                        imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
                        countLikes: '1',
                    },
                    {
                        content: 'helo',
                        imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
                        countLikes: '3',
                    },
                    {
                        content: 'message',
                        imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
                        countLikes: '222',
                    }
                ]},
        ]);

    testReducerAuth(
        "Начало загрузки",
        {
            actionCreator: startFetchingAC,
            parameters: [],
        },
        [
            {name: 'isFetching', value: true},
        ]);

    testReducerAuth(
        "Конец загрузки",
        {
            actionCreator: stopFetchingAC,
            parameters: [],
        },
        [
            {name: 'isFetching', value: false},
        ]);

    testReducerAuth(
        "Обновить статус",
        {
            actionCreator: updateNewStatusTextAC,
            parameters: ["text"],
        },
        [
            {name: 'statusText', value: "text"},
        ]);

    testReducerAuth(
        "Обновить мою аватарку",
        {
            actionCreator: updateProfilePictureAC,
            parameters: [{small: "href"}],
        },
        [
            {name: 'profile', value: {photos: {small: "href"}}},
        ]);

    testReducerAuth(
        "Сохранить профайл",
        {
            actionCreator: saveProfileAC,
            parameters: [{photos: {}}],
        },
        [
            {name: 'profile', value: {photos: {}}},
        ]);
});