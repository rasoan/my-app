import React from "react";
import {shallow} from 'enzyme';
import UserItem from "./UserItem";
import Adapter from 'enzyme-adapter-react-16.1';
import Enzyme from 'enzyme';
import ButtonFollowUnfollow from "../../ButtonFollowUnfollow";
import PreloaderLinear from "../../Preloaders/PreloaderLinear";
Enzyme.configure({adapter: new Adapter()});

const testLoadingUserItem = (descriptionTest,
                              isFetching,
                             isAuth,
                              findComponents) => {
    test(descriptionTest, () => {
        const container = shallow(<UserItem followed={true}
                                            follow={() => {}}
                                            unfollow={() => {}}
                                            isFetchingFollowOrUnfollowIdList={isFetching}
                                            photo={""}
                                            name={""}
                                            defaultAvatarSrc={""}
                                            id={"1"}
                                            navlinkTo={""}
                                            isAuth={isAuth}
                                            startCommunication={() => {}}
        />);
        findComponents.forEach(component => {
            const currentFindComponent = container.find(component.component);
            expect(currentFindComponent.length).toBe(component.count);
        })
    });
}

describe("Тестирум загрузку UserItem", () => {
    testLoadingUserItem("показать кнопки follow/unfollow, старт диалога",
        [""],
        true,
        [
            {
                component: ButtonFollowUnfollow,
                count: 1
            },
            {
                component: ".startCommunication",
                count: 1
            },
            {
              component: PreloaderLinear,
              count: 0
            },
        ]);

    testLoadingUserItem("скрыть потому что не авторизованы кнопки follow/unfollow, старт диалога",
        [""],
        false,
        [
            {
                component: ButtonFollowUnfollow,
                count: 0
            },
            {
                component: ".startCommunication",
                count: 0
            },
            {
                component: PreloaderLinear,
                count: 0
            },
        ]);

    testLoadingUserItem("Загрузка добавления в друзья",
        ["1", ["0"]],
        true,
        [
            {
                component: ButtonFollowUnfollow,
                count: 0
            },
            {
                component: ".startCommunication",
                count: 1
            },
            {
                component: PreloaderLinear,
                count: 1
            },
        ]);
});