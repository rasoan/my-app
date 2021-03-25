
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "fd622230-6210-4ef3-a457-276f95f589d0",
    },
});

export const usersApi = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
                       .then(response => response.data);
    },
    follow(id) {
        return instance.post('follow/' + id)
                       .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete('follow/' + id)
                       .then(response => response.data);
    },
}