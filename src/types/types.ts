export type photosType = {
    small: null | string,
    large: null | string,
}
export type postType = {
    content: string,
    imgSrc: string,
    countLikes: number,
}
export type messageType = {
    id: number,
    message: string,
}
export type userType = {
    id: number,
    name: string,
    status: string,
    photos: photosType,
    followed: boolean,
}
export type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type profileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos: photosType,
    contacts: contactsType,
}
export type userDataAuth = {
    userId: number | null
    email: string | null
    login: string | null
}