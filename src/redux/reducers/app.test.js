import appReducer from "../reducers/app-reducer";
import {
    openMainControlPanelAC,
    closeMainControlPanelAC,
    openQuestPageControlPanelAC,
    closeQuestPageControlPanelAC,
    openOwnerPageControlPanelAC,
    closeOwnerPageControlPanelAC, initializeTheApplicationAC, refreshRequestsAC, toggleNavAC
} from "../actions/creators/app-creator";

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

test('Тестируем инициализацию всего приложения: ', () => {
    const resultState = appReducer(initialState, initializeTheApplicationAC());
    const initializeTheApplication = resultState.initializeTheApplication;
    expect(initializeTheApplication).toBeTruthy();
});

test('Тестируем обновление всех запросов страницы: ', () => {
    const refreshRequestsBeforeValue = initialState.refreshRequests;
    const resultState = appReducer(initialState, refreshRequestsAC());
   const refreshRequestsAfterValue = resultState.refreshRequests;
   expect(refreshRequestsAfterValue).not.toBe(refreshRequestsBeforeValue);
});

const testNavigationPanel = () => {

}
test('Тестируем отображение/скрытие навигационной панели для пк/мобил: ', () => {
    const navigationPanelVisibilityBefore = initialState.navigationPanelVisibility;
    let resultState = appReducer(initialState, toggleNavAC());
    let navigationPanelVisibilityAfter = resultState.navigationPanelVisibility;
    expect(navigationPanelVisibilityBefore).not.toBe(navigationPanelVisibilityAfter);

    resultState = appReducer(resultState, toggleNavAC());
    navigationPanelVisibilityAfter = resultState.navigationPanelVisibility;
    expect(navigationPanelVisibilityBefore).toBe(navigationPanelVisibilityAfter);
});