import {dialogsAPI} from "../api/api";
import {
    sendMessageAC,
    startCommunicationAC,
    getDialogsAC,
    getMessagesAC,
    startFetchingAC,
    stopFetchingAC
} from '../redux/actions/creators/dialogs-creator';

export const onSendMessageClick = (newMessageBody: any) => {
    return (dispatch: any) => {
        let action = sendMessageAC(newMessageBody);
        dispatch(action);
    }
}

export const startCommunication = (userId: number) => {
    return async (dispatch: any) => {
        let response = await dialogsAPI.startCommunication(userId);
        let action = startCommunicationAC(response);
        dispatch(action);
    }
}

export const getDialogs = () => {
    return async (dispatch: any) => {
        let action = startFetchingAC();
        dispatch(action);
        const response = await dialogsAPI.getAllDialogs();
        const getDialogsAction = getDialogsAC(response.data);
        dispatch(getDialogsAction);
        const stopFetchingAction = stopFetchingAC();
        dispatch(stopFetchingAction);
    }
}

export const getMessages = (userId: number,
                            currentPage = 1,
                            pagesSize = 10) => {
    return async (dispatch: any) => {
        const response = await dialogsAPI.getMessages();
        const action = getMessagesAC(response.data);
        dispatch(action);
    }
}