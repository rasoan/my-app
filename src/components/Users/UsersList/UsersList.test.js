import React from "react";
import {shallow} from 'enzyme';
import UsersList from "./UsersList";
import Pagination from "../../Pagination";
import PreloaderCircular from "../../Preloaders/PreloaderCircular";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const testLoadingUsersList = (descriptionTest,
                              isFetching,
                              findComponents) => {
    test(descriptionTest, () => {
        const container = shallow(<UsersList totalUsersCount={100}
                                             pagesSize={10}
                                             users={[]}
                                             defaultAvatarSrc={""}
                                             isAuth={true}
                                             isFetchingGetUsersCards={isFetching}
                                             isFetchingFollowOrUnfollowIdList={[]}
                                             follow={() => {}}
                                             unfollow={() => {}}
                                             startCommunication={() => {}}
                                             getCountUsers={() => {}}
                                             getUsersCardsSC={() => {}}
        />);
        findComponents.forEach(component => {
            const currentFindComponent = container.find(component.component);
            expect(currentFindComponent.length).toBe(component.number);
        })
    });
}

describe("Тестирум загрузку UsersList", () => {
testLoadingUsersList("показать пагинацию и карточки",
    false,
    [
        {
            component: Pagination,
            number: 1
        },
        {
            component: PreloaderCircular,
            number: 0
        },
        {
            component: ".listCardsUsers",
            number: 1
        },
    ]);

testLoadingUsersList("показать пагинацию и прелоадер",
    true,
    [
        {
            component: Pagination,
            number: 1
        },
        {
            component: PreloaderCircular,
            number: 1
        },
        {
            component: ".listCardsUsers",
            number: 0
        },
    ]);
});