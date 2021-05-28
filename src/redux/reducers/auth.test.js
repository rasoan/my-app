import authReducer from "./auth-reducer";
import {
    DEFAULT_USER_ID,
    LOG_OUT_IMG,
    SIGN_IN_IMG,
    SIGN_UP_IMG
} from "../../constants/Authorization";
import {getCaptchaAC, logOutAC, setAvatarAuthPanelAC, setUserDataAC, signInAC} from "../actions/creators/auth-creator";

let initialState = {
    avatarAuthPanel: null,
    userId: DEFAULT_USER_ID,
    isAuth: false,
    email: null,
    login: null,
    captchaUrl: "",
    signInImg: SIGN_IN_IMG,
    signUpImg: SIGN_UP_IMG,
    logOutImg: LOG_OUT_IMG,
};

const testReducerAuth = (descriptionTest,
                         actionCreatorObj,
                         checkedValues) => {
    test(descriptionTest, () => {
        const resultState = authReducer(initialState, actionCreatorObj.actionCreator(...actionCreatorObj.parameters));
        checkedValues.forEach(parameter => {
          const resultParameter = resultState[parameter.name];
          expect(resultParameter).toBe(parameter.value);
        });
    });
}

describe("Тестирование редюсера авторизации", () => {
  testReducerAuth(
      "Записали юзера",
      {
          actionCreator: setUserDataAC,
          parameters: ["c12f", "ar@gm", "login", false],
      },
      [
          {name: 'userId', value: "c12f"},
          {name: 'email', value: "ar@gm"},
          {name: 'login', value: "login"},
          {name: 'isAuth', value: false},
      ]);

  testReducerAuth(
      "Записали аватарку юзера",
      {
          actionCreator: setAvatarAuthPanelAC,
          parameters: [{photos: {small: "href"}}],
      },
      [
          {name: 'avatarAuthPanel', value: "href"},
      ]);

  testReducerAuth(
      "Вошли в учётку",
      {
          actionCreator: signInAC,
          parameters: [true],
      },
      [
          {name: 'isAuth', value: true},
      ]);

  testReducerAuth(
      "Вышли из учётки",
      {
          actionCreator: logOutAC,
          parameters: [false],
      },
      [
          {name: 'isAuth', value: false},
      ]);

  testReducerAuth(
      "Получить captcha",
      {
          actionCreator: getCaptchaAC,
          parameters: ["href"],
      },
      [
          {name: 'captchaUrl', value: "href"},
      ]);
});