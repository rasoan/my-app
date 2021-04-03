export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "Пустое поле!";
}

export const maxLengthCreator = (maxLength = 0) => (value = "") => {
    if (value.length > maxLength) {
        return `Максимальная длина ${maxLength} символов!`;
    }
    return undefined;
}