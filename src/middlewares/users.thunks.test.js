import {follow} from "./users";
import {usersApi} from "../api/api";
import {
  followAC,
  isFetchingFollowOrUnfollowEnd,
  isFetchingFollowOrUnfollowStart
} from "../redux/actions/creators/users-creator";

jest.mock("../api/api");
const userApiMock = usersApi;
const result = { data: { resultCode: 0 } };

userApiMock.follow.mockReturnValue(Promise.resolve(result));


test("Тестируем санку, которая отвечает за подписку на пользователя: ", async () => {
  const thunk = follow(1);
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);


  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, isFetchingFollowOrUnfollowStart(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, followAC(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, isFetchingFollowOrUnfollowEnd(1));
});