import appReducer from "../reducers/app-reducer";
import {openMainControlPanelAC,
        closeMainControlPanelAC,
        openQuestPageControlPanelAC,
        closeQuestPageControlPanelAC,
        openOwnerPageControlPanelAC,
        closeOwnerPageControlPanelAC} from "../actions/creators/app-creator";

let initialState = {
    initializeTheApplication: false,
    refreshRequests: false,
    navigationPanelVisibility: false,
    mainControlPanels: false,
    questPageControlPanel: false,
    ownerPageControlPanel: false,
};

const testReducerControlPanels = (descriptionTest, reducer,
                                  initialState, actionCreator,
                                  nameCheckedParameter, nameJestMethod) => {
    test(descriptionTest, () => {
        const resultState = reducer(initialState, actionCreator());
        const controlPanel = resultState[nameCheckedParameter];
        expect(controlPanel)[nameJestMethod]();
    })
}

testReducerControlPanels('Проверяем открытие главной панели управления: ', appReducer,
    initialState, openMainControlPanelAC,
    'mainControlPanels','toBeTruthy'
);
testReducerControlPanels('Проверяем закрытие главной панели управления: ', appReducer,
    initialState, closeMainControlPanelAC,
    'mainControlPanels','toBeFalsy'
);


testReducerControlPanels('Проверяем открытие панели управления гостя страницы: ', appReducer,
    initialState, openQuestPageControlPanelAC,
    'questPageControlPanel','toBeTruthy'
);
testReducerControlPanels('Проверяем закрытие панели управления гостя страницы: ', appReducer,
    initialState, closeQuestPageControlPanelAC,
    'questPageControlPanel','toBeFalsy'
);


testReducerControlPanels('Проверяем открытие панели управления владельца страницы: ', appReducer,
    initialState, openOwnerPageControlPanelAC,
    'ownerPageControlPanel','toBeTruthy'
);
testReducerControlPanels('Проверяем закрытие панели управления владельца страницы: ', appReducer,
    initialState, closeOwnerPageControlPanelAC,
    'ownerPageControlPanel','toBeFalsy'
);