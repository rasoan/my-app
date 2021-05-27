import React from "react";
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import AuthorizationPanel from "./AuthorizationPanel";
Enzyme.configure({adapter: new Adapter()});

const testAuthorizationPanel = (descriptionTest,
                             isAuth,
                             findComponents) => {
    test(descriptionTest, () => {
        const container = shallow(<AuthorizationPanel isAuth={isAuth}
                                                      authorizationInfo={{}}
                                                      logOut={()=>{}}
                                                      photos={{}}
        />);
        findComponents.forEach(component => {
            const currentFindComponent = container.find(component.component);
            expect(currentFindComponent.length).toBe(component.count);
        });
    });
}

testAuthorizationPanel('Авторизован',
    true,
    [
        {
            component: '#simple-menu',
            count: 1
        },
    ]);

testAuthorizationPanel('Авторизован',
    false,
    [
        {
            component: '#simple-menu',
            count: 0
        },
    ]);
