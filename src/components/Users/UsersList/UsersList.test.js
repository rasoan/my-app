import React from "react";
import {shallow} from 'enzyme';
import UsersList from "./UsersList";
import Adapter from 'enzyme-adapter-react-16.1';
import Enzyme from 'enzyme';
import {follow, getCountUsers, getUsersCardsSC, unfollow} from "../../../middlewares/users";
import {startCommunication} from "../../../middlewares/dialogs";


const users = [
    {
        "name": "Method",
        "id": 17343,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "peppathepig",
        "id": 17342,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "322X4CK3RM4NN228",
        "id": 17341,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "X4CK3RM4NN228",
        "id": 17340,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "H4CK3RM4NN228",
        "id": 17339,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "H4CK3RM4N",
        "id": 17338,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": true
    },
    {
        "name": "HACKERMAN",
        "id": 17337,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "vanish7",
        "id": 17336,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "dilekter",
        "id": 17335,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false
    },
    {
        "name": "IvanB",
        "id": 17334,
        "uniqueUrlName": null,
        "photos": {"small": null, "large": null},
        "status": null,
        "followed": false,
    }
];

Enzyme.configure({adapter: new Adapter()});
test("Тест компоненты которая отрисовывает карточки с пользователями: ", () => {
    const component = shallow(<UsersList totalUsersCount={100}
                                         pagesSize={10}
                                         users={users}
                                         follow={() => {
                                         }}
                                         unfollow={() => {
                                         }}
                                         defaultAvatarSrc={""}
                                         isFetchingFollowOrUnfollowIdList={[]}
                                         isAuth={true}
                                         startCommunication={() => {
                                         }}
                                         getCountUsers={() => {
                                         }}
                                         getUsersCardsSC={() => {
                                         }}
                                         isFetchingGetUsersCards={true} />);
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
});