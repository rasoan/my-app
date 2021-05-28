import {authMe, logOut, signIn} from "./auth";
import {getCaptchaAC, setAvatarAuthPanelAC} from "../redux/actions/creators/auth-creator";
import {setUserDataAC} from "../redux/actions/creators/auth-creator";
import {
    openMainControlPanelAC,
    openOwnerPageControlPanelAC,
    openQuestPageControlPanelAC
} from "../redux/actions/creators/app-creator";
import {authAPI, securityAPI, profileAPI} from "../api/api";
import expect from "expect";
import {DEFAULT_USER_ID} from "../constants/Authorization";


jest.mock("../api/api"); // заглушка для api
const authApi = authAPI;
const profileApi = profileAPI;
const securityApi = securityAPI;
const dispatchMock = jest.fn(); // имитируем dispatch()

beforeEach(() => {
    dispatchMock.mockClear();
    authApi.getAuthMe.mockClear();
    authApi.signIn.mockClear();
    authApi.logOut.mockClear();
    securityApi.getCaptchaUrl.mockClear();
    profileApi.getProfile.mockClear();
});

const testAuthFunction = (descriptionTest,
                          mockReturnValueObj,
                          mockReturnValueObjProfile,
                          functionsDispatch) => {
    test(descriptionTest, async () => {
        authApi
            .getAuthMe
            .mockReturnValue(Promise.resolve(mockReturnValueObj));
        profileApi
            .getProfile
            .mockReturnValue(Promise.resolve(mockReturnValueObjProfile))
        const thunk = authMe();
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(...callbackObj.parameters));
        });
    });
}

testAuthFunction("Тест проверки на авторизованность сеанса авторизовался, получил аватарку: ",
    {data: {resultCode: 0, data: {id: "0", email: 'ar@gmail.com', login: 'none', isAuth: true}}},
    {status: 200, data: ""},
    [{
        f: setUserDataAC,
        parameters: ["0", 'ar@gmail.com', 'none', true],
    },
        {
            f: setAvatarAuthPanelAC,
            parameters: [""],
        },
        {
            f: openMainControlPanelAC,
            parameters: [true],
        }
        ]);

testAuthFunction("Тест проверки на авторизованность сеанса ошибка: ",
    {data: {resultCode: 2}},
    {status: 200, data: ""},
    [{
        f: setUserDataAC,
        parameters: [DEFAULT_USER_ID],
    }]);

testAuthFunction("Тест проверки на авторизованность сеанса ошибка: ",
    {data: {resultCode: 1}},
    {status: 200, data: ""},
    []);


const testSignInFunction = (descriptionTest,
                            mockReturnValueObj,
                            functionsDispatch) => {
    test(descriptionTest, async () => {
        authApi
            .signIn
            .mockReturnValue(Promise.resolve(mockReturnValueObj.signInValue));
        securityApi
            .getCaptchaUrl
            .mockReturnValue(Promise.resolve(mockReturnValueObj.getCaptchaUrlValue));
        authApi
            .getAuthMe
            .mockReturnValue(Promise.resolve({data: {resultCode: 2}}));
        const thunk = signIn();
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
        });
    });
}

testSignInFunction('Тест не залогинились и показали captcha: ',
    {signInValue: {data: {resultCode: 1}}, getCaptchaUrlValue: {data: {url: ""}}},
    [{
        f: getCaptchaAC,
        parameter: "",
    }]);

testSignInFunction('Тест залогинились: ',
    {signInValue: {data: {resultCode: 0}}, getCaptchaUrlValue: ""},
    [{
        f: setUserDataAC,
        parameter: DEFAULT_USER_ID,
    }]);

test("Тест завершения сеанса авторизации: ", async () => {
    authApi
        .logOut
        .mockReturnValue(Promise.resolve({data: {resultCode: 0}}));
    const thunk = logOut();
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setUserDataAC(DEFAULT_USER_ID));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setAvatarAuthPanelAC({photos: {small: null}}))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, openMainControlPanelAC(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, openOwnerPageControlPanelAC(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(5, openQuestPageControlPanelAC(false));
    expect(dispatchMock).toBeCalledTimes(5);
});

test("Тест завершения сеанса авторизации (ошибка на сервере): ", async () => {
    authApi
        .logOut
        .mockReturnValue(Promise.resolve({data: {resultCode: 1}}));
    const thunk = logOut();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(0);
});