import {follow, unfollow, getCountUsers, getUsersCardsSC} from "./users";
import {usersApi} from "../api/api";
import {
  followAC,
  unfollowAC,
  setTotalUsersCount,
  setUsers,
  isFetchingFollowOrUnfollowEnd,
  isFetchingFollowOrUnfollowStart,
  fetchingGetCountUsersStartAC,
  fetchingGetCountUsersEndAC,
  fetchingGetUserCardsStartAC,
  fetchingGetUserCardsEndAC, setTotalUsersCountAC, setUsersAC
} from "../redux/actions/creators/users-creator";
import expect from "expect";

jest.mock("../api/api"); // заглушка для api
const userAPI = usersApi;
const dispatchMock = jest.fn(); // имитируем dispatch()

beforeEach(() => { // очистка
  dispatchMock.mockClear();
  userAPI.follow.mockClear();
  userAPI.getUsers.mockClear();
});

const testGetCountUsers = (
    descriptionTest,
    getUsersReturnValue,
    functionsDispatch) => {
  test(descriptionTest, async () => {
    userAPI
        .getUsers
        .mockReturnValue(getUsersReturnValue);
    const thunk = getCountUsers();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
    functionsDispatch.forEach((callbackObj, index) => {
      expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
    });
  });
}

testGetCountUsers(
    "Тест получения количества юзеров всего (успешно): ",
    {status: 200, data: {totalCount: ""}},
    [
      {
        f: fetchingGetCountUsersStartAC,
        parameter: undefined
      },
      {
        f: setTotalUsersCountAC,
        parameter: ""
      },
      {
        f: fetchingGetCountUsersEndAC,
        parameter: undefined
      },
    ]
);

testGetCountUsers(
    "Тест получения количества юзеров всего (не успешно): ",
    {status: 0, data: {totalCount: ""}},
    [
      {
        f: fetchingGetCountUsersStartAC,
        parameter: undefined
      },
      {
        f: fetchingGetCountUsersEndAC,
        parameter: undefined
      },
    ]
);

const testGetUsersCardSC = (
    descriptionTest,
    getUsersCardsSCReturnValue,
    functionsDispatch) => {
  test(descriptionTest, async () => {
    userAPI
        .getUsers
        .mockReturnValue(getUsersCardsSCReturnValue);
    const thunk = getUsersCardsSC();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(functionsDispatch.length);
    functionsDispatch.forEach((callbackObj, index) => {
      expect(dispatchMock).toHaveBeenNthCalledWith(index + 1, callbackObj.f(callbackObj.parameter));
    });
  });
}

testGetUsersCardSC(
    "Тестируем получение карточек юзеров (успешно): ",
    {status: 200, data: {items: ""}},
    [
      {
        f: fetchingGetUserCardsStartAC,
        parameter: undefined
      },
      {
        f: setUsersAC,
        parameter: ""
      },
      {
        f: fetchingGetUserCardsEndAC,
        parameter: undefined
      },
    ]
);

testGetUsersCardSC(
    "Тестируем получение карточек юзеров (не успешно): ",
    {status: 0, data: {items: ""}},
    [
      {
        f: fetchingGetUserCardsStartAC,
        parameter: undefined
      },
      {
        f: fetchingGetUserCardsEndAC,
        parameter: undefined
      },
    ]
);
/*
test("Тестируем санку, которая отвечает за подписку на пользователя: ", async () => {
  userApiMock
      .follow
      .mockReturnValue(Promise.resolve(resultFollowUnfollow)); // привязываем к заглушке иммитируемый ответ
  const thunk = follow(1);
  await thunk(dispatchMock); // ставим заглушку dispatch()-а
  expect(dispatchMock).toBeCalledTimes(3); // dispatch() должен вызваться 3 раза
  expect(dispatchMock).toHaveBeenNthCalledWith(1, isFetchingFollowOrUnfollowStart(1)); // первый раз так
  expect(dispatchMock).toHaveBeenNthCalledWith(2, followAC(1)); // второй раз так
  expect(dispatchMock).toHaveBeenNthCalledWith(3, isFetchingFollowOrUnfollowEnd(1)); // и третий раз так
});

test("Тестируем санку, которая отвечает за отписку от пользователя: ", async () => {
  userApiMock
      .unfollow
      .mockReturnValue(Promise.resolve(resultFollowUnfollow)); // привязываем к заглушке иммитируемый ответ
  const thunk = unfollow(1);
  await thunk(dispatchMock); // ставим заглушку dispatch()-а
  expect(dispatchMock).toBeCalledTimes(3); // dispatch() должен вызваться 3 раза
  expect(dispatchMock).toHaveBeenNthCalledWith(1, isFetchingFollowOrUnfollowStart(1)); // первый раз так
  expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollowAC(1)); // второй раз так
  expect(dispatchMock).toHaveBeenNthCalledWith(3, isFetchingFollowOrUnfollowEnd(1)); // и третий раз так
});

const resultGetUsers = { status: 200, data: {totalCount: 0, items: []} }; // создаём заглушки
test("Тестируем санку, которая получает количество пользователей: ", async () => {
  userApiMock.getUsers.mockReturnValue(Promise.resolve(resultGetUsers));
  const thunk = getCountUsers();
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, fetchingGetCountUsersStartAC());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, setTotalUsersCount(0));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, fetchingGetCountUsersEndAC());
});

test("Тестируем санку, которая получает пользователей: ", async () => {
  const thunk = getUsersCardsSC();
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, fetchingGetUserCardsStartAC());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, setUsers([]));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, fetchingGetUserCardsEndAC());
});

 */