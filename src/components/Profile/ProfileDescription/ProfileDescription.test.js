import React from "react";
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ProfileDescription from "./ProfileDescription";
import ProfileDescriptionEditMode from "./ProfileDescriptionEditMode";
import ProfileDescriptionViewMode from "./ProfileDescriptionViewMode";
Enzyme.configure({adapter: new Adapter()});


    test("Тест описания профайла", () => {
        const container = mount(<ProfileDescription profile={{contacts: []}}
                                                    saveProfile={() => {}}
                                                    ownerPageControlPanel={true} />);
        let findProfileDescriptionEditMode = container.find(ProfileDescriptionEditMode);
        let findProfileDescriptionViewMode = container.find(ProfileDescriptionViewMode);
        expect(findProfileDescriptionViewMode.length).toBe(1);
        expect(findProfileDescriptionEditMode.length).toBe(0);

        findProfileDescriptionViewMode.find('button').simulate('click');
        findProfileDescriptionViewMode = container.find(ProfileDescriptionViewMode);
        findProfileDescriptionEditMode = container.find(ProfileDescriptionEditMode);
        expect(findProfileDescriptionViewMode.length).toBe(0);
        expect(findProfileDescriptionEditMode.length).toBe(1);
    });


