import expect from "expect";
import {checkUserOrOwner, closeControlPanel, initializeTheApplication, openControlPanel} from "./app";
import {
    closeControlPanelAC,
    initializeTheApplicationAC,
    openControlPanelAC
} from "../redux/actions/creators/app-creator";

const dispatchMock = jest.fn();

const getStateMock = jest.fn();


beforeEach(() => {
    dispatchMock.mockClear();
});
test("Тестируем санку инициализации приложения: ", () => {
    const thunk = initializeTheApplication(true);
    thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, initializeTheApplicationAC(true));
});

test("Тестируем санку которая открывает пользователю управляющий интерфейс: ", () => {
    const thunk = openControlPanel();
    thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, openControlPanelAC());
});

test("Тестируем санку которая закрывает пользователю управляющий интерфейс: ", () => {
    const thunk = closeControlPanel();
    thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, closeControlPanelAC());
});

test("Скрыть от пользователю управляющие элементы на текущей странице" +
           "потому что он просматривает чужую страницу и авторизован", () => {
    let myId = 15634; // id авторизованного пользователя
    const thunk = checkUserOrOwner(myId);
    // авторизован, id просматриваемой страницы
    getStateMock.mockReturnValue({auth: {isAuth: true, userId: 11}});
    thunk(dispatchMock, getStateMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, closeControlPanelAC());
});

test("Скрыть от пользователю управляющие элементы на текущей странице" +
    "потому что он просматривает чужую страницу и не авторизован", () => {
    let myId = 15634; // id авторизованного пользователя
    const thunk = checkUserOrOwner(myId);
    // авторизован, id просматриваемой страницы
    getStateMock.mockReturnValue({auth: {isAuth: false, userId: 11}});
    thunk(dispatchMock, getStateMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, closeControlPanelAC());
});


test("Открыть пользователю управляющие элементы на текущей странице" +
           "потому что он просматривает свою страницу и авторизован", () => {
    let myId = 15634; // id авторизованного пользователя
    const thunk = checkUserOrOwner(myId);
    // авторизован, id просматриваемой страницы
    getStateMock.mockReturnValue({auth: {isAuth: true, userId: myId}});
    thunk(dispatchMock, getStateMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, openControlPanelAC());
});

test("Скрыть от пользователя управляющие элементы на текущей странице" +
    "потому что он не авторизован", () => {
    let myId = 15634; // id авторизованного пользователя
    const thunk = checkUserOrOwner(myId);
    // не авторизован, id просматриваемой страницы
    getStateMock.mockReturnValue({auth: {isAuth: false, userId: myId}});
    thunk(dispatchMock, getStateMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, closeControlPanelAC());
});
/*
import {} from "../api/api";

jest.mock("../api/api"); // заглушка для api

const appApiMock = appApi;
const resultFollowUnfollow = { data: { resultCode: 0 } }; // имитируем удачный ответ от сервера
const dispatchMock = jest.fn(); // имитируем dispatch()

beforeEach(() => { // очистка
    dispatchMock.mockClear();
    userApiMock.follow.mockClear();
    userApiMock.getUsers.mockClear();
});

test("Тестируем санку, которая отвечает за подписку на пользователя: ", async () => {
    userApiMock
        .follow
        .mockReturnValue(Promise.resolve(resultFollowUnfollow)); // привязываем к заглушке иммитируемый ответ
    const thunk = follow(1);
    await thunk(dispatchMock); // ставим заглушку dispatch()-а
    expect(dispatchMock).toBeCalledTimes(3); // dispatch() должен вызваться 3 раза
    expect(dispatchMock).toHaveBeenNthCalledWith(1, isFetchingFollowOrUnfollowStart(1)); // первый раз так
    expect(dispatchMock).toHaveBeenNthCalledWith(2, followAC(1)); // второй раз так
    expect(dispatchMock).toHaveBeenNthCalledWith(3, isFetchingFollowOrUnfollowEnd(1)); // и третий раз так
});
*/