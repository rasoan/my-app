import {profileAPI} from "../api/api";
import {checkId, getProfile} from "./profile";
import {setUserProfileAC, startFetchingAC, stopFetchingAC} from "../redux/actions/creators/profile-creator";
import {DEFAULT_USER_ID} from "../constants/Authorization";
jest.mock("../api/api");
const profileApi = profileAPI;

const dispatchMock = jest.fn();
const getState = jest.fn();

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