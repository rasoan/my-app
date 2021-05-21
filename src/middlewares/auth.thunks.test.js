import {authMe, logOut, signIn} from "./auth";
import {getCaptchaAC} from "../redux/actions/creators/auth-creator";
import {setUserDataAC} from "../redux/actions/creators/auth-creator";
import {openMainControlPanelAC} from "../redux/actions/creators/app-creator";
import {authAPI, securityAPI} from "../api/api";
import expect from "expect";
import {DEFAULT_USER_ID} from "../constants/Authorization";
import {checkOwnerOrQuest} from "./app";



jest.mock("../api/api"); // заглушка для api
const authApi = authAPI;
const securityApi = securityAPI;
const resultAuthMe = {data: {resultCode: 2}}; // имитируем удачный ответ от сервера
const dispatchMock = jest.fn(); // имитируем dispatch()

beforeEach(() => {
    dispatchMock.mockClear();
    authApi.getAuthMe.mockClear();
    securityApi.getCaptchaUrl.mockClear();
});

const testAuthFunction = (descriptionTest,
                          mockReturnValueObj,
                          functionsDispatch) => {
    test(descriptionTest, async () => {
        authApi
            .getAuthMe
            .mockReturnValue(Promise.resolve(mockReturnValueObj));
        const thunk = authMe();
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(...callbackObj.parameters));
        });

    });
}

testAuthFunction("Тест проверки на авторизованность сеанса ошибка: ",
    {
        data: {
            resultCode: 2,
        }
    },
    [{
        f: setUserDataAC,
        parameters: [DEFAULT_USER_ID],
    }]);

testAuthFunction("Тест проверки на авторизованность сеанса ошибка: ",
    {
        data: {
            resultCode: 1,
        }
    },
    []);

testAuthFunction("Тест проверки на авторизованность сеанса авторизовался: ",
    {data: {resultCode: 0, data: {id: "0", email: 'ar@gmail.com', login: 'none', isAuth: true}}},
    [{
        f: setUserDataAC,
        parameters: ["0", 'ar@gmail.com', 'none', true],
    },
        {
            f: openMainControlPanelAC,
            parameters: [true],
        }]);



const testSignInFunction = (descriptionTest,
                            mockReturnValueObj,
                            functionsDispatch) => {
    test(descriptionTest, async () => {
        authApi
            .signIn
            .mockReturnValue(Promise.resolve(mockReturnValueObj.signInValue));
        securityApi
            .getCaptchaUrl
            .mockReturnValue(Promise.resolve(mockReturnValueObj.getCaptchaUrlValue))
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
//
// test("Тест завершения сеанса авторизации: ", () => {
//     const thunk = logOut();
// });