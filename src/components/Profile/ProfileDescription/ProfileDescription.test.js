import React from "react";
import {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import Enzyme from 'enzyme';
import ProfileDescription from "./ProfileDescription";
Enzyme.configure({adapter: new Adapter()});


    test("sdf", () => {
        const container = mount(<ProfileDescription profile={{}}
                                                      saveProfile={() => {}}
                                                      ownerPageControlPanel={true} />);
        // findComponents.forEach(component => {
        //     const currentFindComponent = container.find(component.component);
        //     expect(currentFindComponent.length).toBe(component.count);
        // })
    });


