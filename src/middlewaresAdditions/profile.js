export const checkId = (id, isAuth, myId, defaultId) => {
    if(!id) {
        id = isAuth ? myId: defaultId;
    }
    return id;
}