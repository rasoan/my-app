import expect from "expect";
import {
    checkOwnerOrQuest,
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

// функция тестирования простой санки без параметров
const testSimpleThunk = (descriptionTest, thunk, actionCreator) => {
    test(descriptionTest, () => {
       thunk(dispatchMock);
       expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actionCreator());
    });
}

// функция тестирования простой функции которая принимает диспатч и один параметр
const testSimpleFunctionUsedDispatch = (descriptionTest,
                                        simpleFunction,
                                        actionCreator,
                                        flag) => {
    test(descriptionTest, () => {
        simpleFunction(dispatchMock, flag);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actionCreator(flag));
    });
}

// тест функции которая открывает панель управления (гость, владелец) страницы
const testFunctionCheckUserOrOwnerOrAuth = (descriptionTest,
                                            userId,
                                            mockReturnValueObj,
                                            functionsDispatch) => {
    test(descriptionTest, () => {
        const thunk = checkOwnerOrQuest(userId);
        getStateMock.mockReturnValue(mockReturnValueObj);
        thunk(dispatchMock, getStateMock);
        expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
        functionsDispatch.forEach((callbackObj, index) => {
            expect(dispatchMock).toHaveBeenNthCalledWith(index+1, callbackObj.f(callbackObj.parameter));
        });

    });
}

testSimpleThunk('Тестируем санку инициализации приложения: ',
    initializeTheApplication,
    initializeTheApplicationAC);

testSimpleThunk('Тестируем санку обновления всех запросов текущей страницы: ',
    refreshRequests,
    refreshRequestsAC);

testSimpleThunk('Тестируем санку которая открывает/закрывает боковую панель: ',
    toggleNavigationPanel,
    toggleNavigationPanelAC);

testSimpleFunctionUsedDispatch('Тестируем санку которая открывает пользователю главную панель: ',
    openMainControlPanel,
    openMainControlPanelAC,
    true);

testSimpleFunctionUsedDispatch('Тестируем санку которая закрывает пользователю главную панель: ',
    openMainControlPanel,
    openMainControlPanelAC,
    false);

testSimpleFunctionUsedDispatch('Проверяем диспатч открытия пан. упр. владельца страницы: ',
    openOwnerPageControlPanel,
    openOwnerPageControlPanelAC,
    true);

testSimpleFunctionUsedDispatch('Проверяем диспатч закрытия пан. упр. владельца страницы: ',
    openOwnerPageControlPanel,
    openOwnerPageControlPanelAC,
    false);

testSimpleFunctionUsedDispatch('Проверяем диспатч открытия пан. упр. гостя страницы: ',
    openQuestPageControlPanel,
    openQuestPageControlPanelAC,
    true);

testSimpleFunctionUsedDispatch('Проверяем диспатч закрытия пан. упр. гостя страницы: ',
    openQuestPageControlPanel,
    openQuestPageControlPanelAC,
    false);

testFunctionCheckUserOrOwnerOrAuth("не авторизован",
    '15634',
    {auth: {isAuth: false, myId: '15634'}},
    [
        {
            f: openOwnerPageControlPanelAC,
            parameter: false
        },
        {
            f: openQuestPageControlPanelAC,
            parameter: false,
        },
    ]);

testFunctionCheckUserOrOwnerOrAuth("авторизован, гость",
    '15',
    {auth: {isAuth: true, myId: '15634'}},
    [
        {
            f: openOwnerPageControlPanelAC,
            parameter: false
        },
        {
            f: openQuestPageControlPanelAC,
            parameter: true,
        },
    ]);

testFunctionCheckUserOrOwnerOrAuth("авторизован, владелец",
    '15634',
    {auth: {isAuth: true, myId: '15634'}},
    [
        {
            f: openOwnerPageControlPanelAC,
            parameter: true
        },
        {
            f: openQuestPageControlPanelAC,
            parameter: false,
        },
    ]);