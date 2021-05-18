import expect from "expect";
import {
    checkUserOrOwner,
    closeControlPanel,
    initializeTheApplication,
    openControlPanel, openMainControlPanel, openOwnerPageControlPanel, openQuestPageControlPanel,
    refreshRequests,
    toggleNavigationPanel
} from "./app";
import {
    initializeTheApplicationAC,
    openMainControlPanelAC, openOwnerPageControlPanelAC,
    openQuestPageControlPanelAC,
    refreshRequestsAC,
    toggleNavigationPanelAC,
} from "../redux/actions/creators/app-creator";

const dispatchMock = jest.fn();

const getStateMock = jest.fn();


beforeEach(() => {
    dispatchMock.mockClear();
});

test("Тестируем санку инициализации приложения: ", () => {
    initializeTheApplication(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, initializeTheApplicationAC(true));
});

test('Тестируем санку обновления всех запросов текущей страницы: ', () => {
   refreshRequests(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, refreshRequestsAC());
});

test('Тестируем санку которая открывает/закрывает боковую панель: ', () => {
   toggleNavigationPanel(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleNavigationPanelAC());
});

const testControlPanels = (descriptionTest, thunkCreator, mockFunction, actionCreator, flag) => {
   test(descriptionTest, () => {
       const thunk = thunkCreator(flag);
       thunk(mockFunction);
       expect(mockFunction).toBeCalledTimes(1);
       expect(mockFunction).toHaveBeenNthCalledWith(1, actionCreator(flag));
   });
}

testControlPanels('Тестируем санку которая открывает пользователю главную панель: ',
    openMainControlPanel,
    dispatchMock,
    openMainControlPanelAC,
    true);

testControlPanels('Тестируем санку которая открывает пользователю панель упр владельца страницы: ',
    openOwnerPageControlPanel,
    dispatchMock,
    openOwnerPageControlPanelAC,
    true);

testControlPanels('Тестируем санку которая открывает пользователю панель упр для гостя страницы: ',
    openQuestPageControlPanel,
    dispatchMock,
    openQuestPageControlPanelAC,
    true);




const testFunctionCheckUserOrOwnerOrAuth = (descriptionTest,
                                         myId,
                                         mockReturnValueObj,
                                         usedActionCreator,
                                         flagUsedAC) => {
    test(descriptionTest, () => {
        const thunk = checkUserOrOwner(myId);
        getStateMock.mockReturnValue(mockReturnValueObj);
        thunk(dispatchMock, getStateMock);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, usedActionCreator(flagUsedAC))
    });
}

testFunctionCheckUserOrOwnerOrAuth("Скрыть от пользователя главные управляющие элементы на текущей странице" +
    "потому что он просматривает чужую страницу и авторизован",
    '15634',
    {auth: {isAuth: false, userId: 11}},
    openMainControlPanelAC,
    false);

testFunctionCheckUserOrOwnerOrAuth("Открыть пользователю главные управляющие элементы на текущей странице" +
    "потому что он просматривает чужую страницу и авторизован",
    '15634',
    {auth: {isAuth: true, userId: 11}},
    openMainControlPanelAC,
    true);

/*
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


 */