import * as axios from "axios";

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
    follow(id) {
        return instance.post('/follow/' + id);
    },
    unfollow(id) {
        return instance.delete('/follow/' + id);
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`/profile/`+ id);
    },
    getStatus(userId) {
        return instance.get('/profile/status/' + userId)
                       .then(response => response);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    },
    updateProfilePicture(imagefile) {
        let formData = new FormData();
        formData.append("image", imagefile.files[0]);
        return instance.put('/profile/photo', formData, {
                                                         headers: {
                                                                   'Content-Type': 'multipart/form-data'
                                                                  }
                                                        }
                                                        );
    },
    saveProfile(profile) {
        return instance.put('/profile', profile)
    },
}

export const authAPI = {
    getAuthMe() {
        return instance.get('auth/me');
    },
    signIn(email, password, rememberMe = false, captcha = null) {
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
    startCommunication(userId) { // открыть диалог с другом
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
    getMessages(userId, currentPage, pagesSize) { // получить сообщения с этим пользователем
        return instance.get(`/dialogs/${userId}/messages?page=${currentPage}&count=${pagesSize}`);
    },
    sendMessage(userId, message = "") { // отправить сообщение
        return instance.post(`/dialogs/${userId}/messages`, message);
    },
    messageViewed(messageId) { // сообщение просмотрено
        return instance.get(`/dialogs/messages/${messageId}/viewed`);
    },
    deleteOnlyYouMessage(messageId) {
        return instance.delete(`/dialogs/messages/${messageId}`)
    },
    addMessageSpam(messageId) { // добавить сообщение в спам
        return instance.post(`/dialogs/messages/${messageId}/spam`);
    },
    restoreYourMessage(messageId) { // восстановить сообщение
        return instance.put(`/dialogs/messages/${messageId}/restore`);
    },
    return_messages_newest_than_date(userId, date) { // не понятно что
        return instance.put(`/dialogs/${userId}/messages/new?newerThen=${date}`);
    },
    getNewMessages() { // получить новые сообщения
        return instance.get(`/dialogs/messages/new/count`);
    },
}
/*
/dialogs/id
put

*/