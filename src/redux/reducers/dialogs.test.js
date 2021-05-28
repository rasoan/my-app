import dialogsReducer from "./dialogs-reducer";
import {
    getDialogsAC,
    getMessagesAC,
    sendMessageAC,
    startCommunicationAC,
    startFetchingAC, stopFetchingAC
} from "../actions/creators/dialogs-creator";

let initialState = {
    messages: [],
    dialogsData: [],
    dialogs: [],
    interlocutors: [],
    isFetching: false,
};
const testReducerAuth = (descriptionTest,
                         actionCreatorObj,
                         checkedValues) => {
    test(descriptionTest, () => {
        const resultState = dialogsReducer(initialState, actionCreatorObj.actionCreator(...actionCreatorObj.parameters));
        checkedValues.forEach(parameter => {
            const resultParameter = resultState[parameter.name];
            expect(resultParameter).toEqual(parameter.value);
        });
    });
}

describe("Тестирование редюсера диалогов", () => {
    testReducerAuth(
        "Начало отправить сообщение",
        {
            actionCreator: sendMessageAC,
            parameters: [""],
        },
        [
            {name: 'messages', value: [{id: 6, message: ""}]},
        ]);

    testReducerAuth(
        "Начало добавить пользователя в диалоги",
        {
            actionCreator: startCommunicationAC,
            parameters: [""],
        },
        [
            {name: 'interlocutors', value: [""]},
        ]);

    testReducerAuth(
        "Получить дилоги",
        {
            actionCreator: getDialogsAC,
            parameters: [[{photos: {small: "href", large: "href"}}]],
        },
        [
            {name: 'dialogs', value: [{photos: {small: "href", large: "href"}}]},
        ]);

    testReducerAuth(
        "Получить сообщения",
        {
            actionCreator: getMessagesAC,
            parameters: [""],
        },
        [
            {name: 'messages', value: ""},
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
});