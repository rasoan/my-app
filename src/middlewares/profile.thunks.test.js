import {profileAPI} from "../api/api";
import {addPost, getProfile, getStatus, saveProfile, updateNewStatusText, updateProfilePicture} from "./profile";
import {
    addPostAC, getStatusAC,
    setUserProfileAC,
    startFetchingAC,
    stopFetchingAC,
    updateNewStatusTextAC, updateProfilePictureAC
} from "../redux/actions/creators/profile-creator";
import {checkId} from "../middlewaresAdditions/profile";
import {DEFAULT_USER_ID} from "../constants/Authorization";
jest.mock("../api/api");
const profileApi = profileAPI;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
   dispatchMock.mockClear();
});

const testGetProfileFunction = (descriptionTest,
                                userId,
                                getProfileMockReturnValue,
                                getStateMockReturnValue,
                                expectedUserId,
                                functionsDispatch) => {
    test(descriptionTest, async () => {
        profileApi
            .getProfile
            .mockReturnValue(getProfileMockReturnValue);
        const getState = jest.fn().mockReturnValue(getStateMockReturnValue);
        const thunk = getProfile(userId);
        const receivedUserId = await thunk(dispatchMock, getState);
        expect(receivedUserId).toBe(expectedUserId);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
        });
    });
}

testGetProfileFunction(
    "Тестируем получение данных для профайла (ответ с сервера отрицательный, параметр userId инициализирован): ",
    "114",
    {status: 0},
{auth: {isAuth: false, userId: undefined}},
    "114",
    [
        {
            f: startFetchingAC,
            parameter: undefined,
        },
        {
            f: stopFetchingAC,
            parameter: undefined,
        }
    ]
);

testGetProfileFunction(
    "Тестируем получение данных для профайла (ответ с сервера отрицательный, параметр userId не инициализирован, пользователь не авторизован, выводим стандартный профайл): ",
    undefined,
    {status: 0},
{auth: {isAuth: false, userId: "145"}},
    DEFAULT_USER_ID,
    [
        {
            f: startFetchingAC,
            parameter: undefined,
        },
        {
            f: stopFetchingAC,
            parameter: undefined,
        }
    ]
);

testGetProfileFunction(
    "Тестируем получение данных для профайла (ответ с сервера отрицательный, параметр userId не инициализирован, пользователь авторизован, выводим профайл авторизованного опльзователя): ",
    undefined,
    {status: 0},
{auth: {isAuth: true, userId: "145"}},
    "145",
    [
        {
            f: startFetchingAC,
            parameter: undefined,
        },
        {
            f: stopFetchingAC,
            parameter: undefined,
        }
    ]
);

testGetProfileFunction(
    "Тестируем получение данных для профайла (положительный ответ с сервера): ",
    undefined,
    {status: 200, data: ""},
    {auth: {isAuth: false, userId: undefined}},
    DEFAULT_USER_ID,
    [
        {
            f: startFetchingAC,
            parameter: undefined,
        },
        {
            f: setUserProfileAC,
            parameter: "",
        },
        {
            f: stopFetchingAC,
            parameter: undefined,
        }
    ]
);

test("Тестируем функцию добавления поста :", () => {
   const thunk = addPost("");
   thunk(dispatchMock);
   expect(dispatchMock).toBeCalledTimes(1);
   expect(dispatchMock).toHaveBeenNthCalledWith(1, addPostAC(""));
});

const testUpdateNewStText = (descriptionTest,
                                updateStatusReturnValue,
                                functionsDispatch) => {
    test(descriptionTest, async () => {
        profileApi
            .updateStatus
            .mockReturnValue(updateStatusReturnValue);
        const thunk = updateNewStatusText("1");
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
        });
    });
}

testUpdateNewStText(
    "Обновили статус и с сервера пришёл подтверждающий ответ: ",
        {status: 200},
    [
        {
            f: updateNewStatusTextAC,
            parameter: "1"
        }
    ]
);

testUpdateNewStText(
    "Обновили статус и с сервера пришёл отрицательный ответ: ",
        {status: 0},
    []
);

const testGetStatus = (descriptionTest,
                          getStatusReturnValue,
                          functionsDispatch) => {
    test(descriptionTest, async () => {
        profileApi
            .getStatus
            .mockReturnValue(getStatusReturnValue);
        getStateMock
            .mockReturnValue({auth: {isAuth: undefined, userId: "1"}});
        const thunk = getStatus("1");
        await thunk(dispatchMock, getStateMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
        });
    });
}

testGetStatus(
    "Тестируем получение статуса (положительный ответ от сервера): ",
    {status: 200, data: "1"},
    [
        {
            f: updateNewStatusTextAC,
            parameter: "1",
        }
    ]
);

testGetStatus("Тестируем получение статуса (отрицательный ответ от сервера): ",
    {status: 0, data: "1"},
    []);

const testUpdatePrPicture = (
    descriptionTest,
    updPrPictReturnValue,
    functionsDispatch) => {
    test(descriptionTest, async () => {
        profileApi
            .updateProfilePicture
            .mockReturnValue(updPrPictReturnValue);
        const thunk = updateProfilePicture("");
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
        });
    })
}

testUpdatePrPicture(
    "Тест обновления аватарки (успешно): ",
    {data: {resultCode: 0, data: {photos: ""}}},
    [
        {
            f: updateProfilePictureAC,
            parameter: "",
        }
    ]
);

testUpdatePrPicture(
    "Тест обновления аватарки (не успешно): ",
    {data: {resultCode: 1, data: {photos: ""}}},
    []
);

const testSaveProfile = (
    descriptionTest,
    saveProfileReturnValue,
    getProfileReturnValue,
    functionsDispatch) => {
    test(descriptionTest, async () => {
        profileApi
            .saveProfile
            .mockReturnValue(saveProfileReturnValue);
        profileApi
            .getProfile
            .mockReturnValue(getProfileReturnValue);
        getStateMock
            .mockReturnValue({auth: {userId: ""}});
        const thunk = saveProfile("");
        await thunk(dispatchMock, getStateMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
        });
    })
}

testSaveProfile(
    "Тестируем сохранение профайла (сохранили проф и получили проф): ",
    {data: {resultCode: 0}},
    {status: 200, data: ""},
    [
        {
            f: setUserProfileAC,
            parameter: ""
        }
    ]
);

testSaveProfile(
    "Тестируем сохранение профайла (не сохранили проф и не получили проф): ",
    {data: {resultCode: 1}},
    {status: 200, data: ""},
    []
);

testSaveProfile(
    "Тестируем сохранение профайла (сохранили проф и не получили проф): ",
    {data: {resultCode: 0}},
    {status: 1, data: ""},
    []
);