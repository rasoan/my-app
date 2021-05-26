import React from "react";
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import Enzyme from 'enzyme';
import withAuthRedirect from "./withAuthRedirect";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";

Enzyme.configure({adapter: new Adapter()});

const TestComponent = () => {
    return <div>тестовая компонента</div>;
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

const testLoadingUsersList = (descriptionTest) => {
    test(descriptionTest, () => {
        const container = shallow();
        const currentFindComponent = container.find(Redirect)
        expect(currentFindComponent).toBe(1);
        // const container = shallow(<withAuthRedirect);
        // const currentFindComponent = container.find("");
        // expect("").toBe(1);
    });
}

testLoadingUsersList("sdf");