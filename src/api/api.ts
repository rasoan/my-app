import axios from "axios";
import {profileType} from "../types/types";

export enum ResultCodesEnum {
    Success = 0,
}

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "fd622230-6210-4ef3-a457-276f95f589d0",
    },
});

export const usersApi = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pagesSize}`);
    },
    follow(id: number) {
        return instance.post('/follow/' + id);
    },
    unfollow(id: number) {
        return instance.delete('/follow/' + id);
    },
}

export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`/profile/`+ id);
    },
    getStatus(userId: number) {
        return instance.get('/profile/status/' + userId)
                       .then(response => response);
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status});
    },
    // updateProfilePicture(imagefile) {
    //     let formData = new FormData();
    //     console.log(imagefile.files[0]);
    //     formData.append("image", imagefile.files[0]);
    //     return instance.put('/profile/photo', formData, {
    //                                                      headers: {
    //                                                                'Content-Type': 'multipart/form-data'
    //                                                               }
    //                                                     }
    //                                                     );
    // },
    updateProfilePicture(imageFile: File) {
        let formData = new FormData();
        formData.append("image", imageFile);
        return instance.put('/profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
    saveProfile(profile: profileType) {
        return instance.put('/profile', profile)
    },
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export const authAPI = {
    getAuthMe() {
        return instance.get<MeResponseType>('auth/me');
    },
    signIn(email: string, password: string, rememberMe = false, captcha = null) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha});
    },
    logOut() {
        return instance.delete('/auth/login');
    },
    getCaptcha() {
        return instance.get('/security/get-captcha-url');
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('/security/get-captcha-url');
    }
}

export const dialogsAPI = {
    startCommunication(userId: number) { // открыть диалог с другом
        return instance.put('/dialogs/' + userId);
    },
    getAllDialogs() { // получить все диалоги
        return instance.get("/dialogs");
    },
    getMessages() {
        return instance.get("/messages");
    }
}

export const messagesAPI = {
    getMessages(userId: number, currentPage: number, pagesSize: number) { // получить сообщения с этим пользователем
        return instance.get(`/dialogs/${userId}/messages?page=${currentPage}&count=${pagesSize}`);
    },
    sendMessage(userId: number, message = "") { // отправить сообщение
        return instance.post(`/dialogs/${userId}/messages`, message);
    },
    messageViewed(messageId: number) { // сообщение просмотрено
        return instance.get(`/dialogs/messages/${messageId}/viewed`);
    },
    deleteOnlyYouMessage(messageId: number) {
        return instance.delete(`/dialogs/messages/${messageId}`)
    },
    addMessageSpam(messageId: number) { // добавить сообщение в спам
        return instance.post(`/dialogs/messages/${messageId}/spam`);
    },
    restoreYourMessage(messageId: number) { // восстановить сообщение
        return instance.put(`/dialogs/messages/${messageId}/restore`);
    },
    return_messages_newest_than_date(userId: number, date: any) { // не понятно что
        return instance.put(`/dialogs/${userId}/messages/new?newerThen=${date}`);
    },
    getNewMessages() { // получить новые сообщения
        return instance.get(`/dialogs/messages/new/count`);
    },
}