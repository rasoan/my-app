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
}

export const authAPI = {
    getAuthMe() {
        return instance.get('auth/me');
    },
    signIn(email, password, rememberMe) {
        return instance.post('/auth/login', {email, password, rememberMe});
    },
    logOut() {
        return instance.delete('/auth/login');
    }
}