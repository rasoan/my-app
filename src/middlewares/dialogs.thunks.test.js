import {getDialogs, getMessages, onSendMessageClick, startCommunication} from "./dialogs";
import {dialogsAPI} from "../api/api";
import {
    getDialogsAC, getMessagesAC,
    sendMessageAC,
    startCommunicationAC,
    startFetchingAC, stopFetchingAC
} from "../redux/actions/creators/dialogs-creator";
jest.mock("../api/api"); // заглушка для api

const dialogsApi = dialogsAPI;
const dispatchMock = jest.fn(); // имитируем dispatch()

beforeEach(() => { // очистка
    dispatchMock.mockClear();
    dialogsApi.startCommunication.mockClear();
    dialogsApi.getAllDialogs.mockClear();
    dialogsApi.getMessages.mockClear();
});

test("Тест санки отправления сообщения: ", () => {
  const thunk = onSendMessageClick("");
  thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(1);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, sendMessageAC(""))
});

test("Тестируем санку начинающую диалог с пользователем: ", async () => {
    dialogsApi
        .startCommunication
        .mockReturnValue("12");
    const thunk = startCommunication("12");
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, startCommunicationAC("12"))
});

test("Тестируем санку получающую все диалоги авторизованного пользователя: ", async () => {
    dialogsApi
        .getAllDialogs
        .mockReturnValue("12");
    const thunk = getDialogs();
   await thunk(dispatchMock);
   expect(dispatchMock).toBeCalledTimes(3);
   expect(dispatchMock).toHaveBeenNthCalledWith(1, startFetchingAC());
   expect(dispatchMock).toHaveBeenNthCalledWith(2, getDialogsAC());
   expect(dispatchMock).toHaveBeenNthCalledWith(3, stopFetchingAC());
});

test("Тестируем санку получающую все сообщения с выбранным пользователем: ", async () => {
   dialogsApi
       .getMessages
       .mockReturnValue({data: "12"});
    const thunk = getMessages();
    await thunk(dispatchMock);
   expect(dispatchMock).toBeCalledTimes(1);
   expect(dispatchMock).toHaveBeenNthCalledWith(1, getMessagesAC("12"))
});