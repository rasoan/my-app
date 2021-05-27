import React from "react";
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Status from "./Status";
Enzyme.configure({adapter: new Adapter()});

const testStatus = (descriptionTest,
                             editMode,
                             ownerPageControlPanel,
                             findComponents) => {
    test(descriptionTest, () => {
        const container = shallow(<Status editMode={editMode}
                                          activateEditMode={() => {}}
                                          deActivateEditMode={() => {}}
                                          deActivateEditModeEnterOrEsc={() => {}}
                                          onStatusChange={() => {}}
                                          statusText={""}
                                          ownerPageControlPanel={ownerPageControlPanel}/>);

        findComponents.forEach(component => {
            const currentFindComponent = container.find(component.component);
            expect(currentFindComponent.length).toBe(component.count);
        })
    });
}

describe("Тестирум компоненту статус (авторизован, режим редактирования)", () => {
    testStatus("авторизован, режим редактирования",
        true,
        true,
        [
            {
                component: 'input',
                count: 1
            },
            {
                component: 'span',
                count: 0
            },
        ]);

    testStatus("авторизован, режим просмотра",
        false,
        true,
        [
            {
                component: 'input',
                count: 0
            },
            {
                component: 'span',
                count: 1
            },
        ]);
});