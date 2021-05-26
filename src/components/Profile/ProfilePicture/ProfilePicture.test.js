import React from "react";
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import Enzyme from 'enzyme';
import ProfilePicture from "./ProfilePicture";
Enzyme.configure({adapter: new Adapter()});

const testProfilePicture = (descriptionTest,
                            ownerPageControlPanel,
                             findComponents) => {
    test(descriptionTest, () => {
        const container = shallow(<ProfilePicture photos={{}}
                                                  updateProfilePicture={() => {}}
                                                  fileInputRef={{}}
                                                  ownerPageControlPanel={ownerPageControlPanel} />);
        findComponents.forEach(component => {
            const currentFindComponent = container.find(component.component);
            expect(currentFindComponent.length).toBe(component.count);
        })
    });
}

describe("Тестирум загрузку UserItem", () => {
    testProfilePicture("Показать загрузчик фото",
        true,
        [
            {
                component: 'form',
                count: 1
            }
        ]);

    testProfilePicture("Скрыть загрузчик фото",
        false,
        [
            {
                component: 'form',
                count: 0
            }
        ]);
});