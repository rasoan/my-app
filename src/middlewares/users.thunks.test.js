import {follow, unfollow, getCountUsers, getUsersCardsSC, followUnfollow} from "./users";
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
    fetchingGetUserCardsEndAC,
    setTotalUsersCountAC,
    setUsersAC,
    isFetchingFollowOrUnfollowStartAC,
    isFetchingFollowOrUnfollowEndAC
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

const testFollowUnfollow = (descriptionTest,
                            followUnfollowMockReturnValue,
                            actionCreatorFunction) => {
    test(descriptionTest, async () => {
        const followUnfollowMock = jest.fn().mockReturnValue(followUnfollowMockReturnValue);
        const actionCreator = jest.fn();
        await followUnfollow(dispatchMock, "", followUnfollowMock, actionCreator);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, isFetchingFollowOrUnfollowStartAC(""));
        if (actionCreatorFunction) {
            expect(dispatchMock).toBeCalledTimes(3);
            expect(dispatchMock).toHaveBeenNthCalledWith(2, actionCreatorFunction(""))
            expect(dispatchMock).toHaveBeenNthCalledWith(3, isFetchingFollowOrUnfollowEndAC(""));
        }
        else {
            expect(dispatchMock).toBeCalledTimes(2);
            expect(dispatchMock).toHaveBeenNthCalledWith(2, isFetchingFollowOrUnfollowEndAC(""));
        }
    });
}

testFollowUnfollow("Тестируем подписку и отписку на пользователя (удачный ответ от сервера): ",
    {data: {resultCode: 0}},
    ()=>{});



testFollowUnfollow("Тестируем подписку и отписку на пользователя (не удачный ответ от сервера): ",
    {data: {resultCode: 1}},
    false);