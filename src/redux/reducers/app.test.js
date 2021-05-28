import appReducer from "../reducers/app-reducer";
import {
    openMainControlPanelAC,
    openQuestPageControlPanelAC,
    openOwnerPageControlPanelAC,
    initializeTheApplicationAC,
    refreshRequestsAC, toggleNavigationPanelAC,
} from "../actions/creators/app-creator";

let initialState = {
    initializeTheApplication: false,
    refreshRequests: false,
    navigationPanel: false,
    mainControlPanel: false,
    questPageControlPanel: false,
    ownerPageControlPanel: false,
};

const testReducerControlPanels = (descriptionTest,
                                  reducer,
                                  initialState,
                                  actionCreator,
                                  nameCheckedParameter,
                                  nameJestMethod,
                                  flag) => {
    test(descriptionTest, () => {
        const resultState = reducer(initialState, actionCreator(flag));
        const controlPanel = resultState[nameCheckedParameter];
        expect(controlPanel)[nameJestMethod]();
    })
}

testReducerControlPanels('Проверяем открытие главной панели управления: ', appReducer,
    initialState, openMainControlPanelAC,
    'mainControlPanel', 'toBeTruthy',
    true
);
testReducerControlPanels('Проверяем закрытие главной панели управления: ', appReducer,
    initialState, openMainControlPanelAC,
    'mainControlPanel', 'toBeFalsy',
    false
);

testReducerControlPanels('Проверяем открытие панели управления гостя страницы: ', appReducer,
    initialState, openQuestPageControlPanelAC,
    'questPageControlPanel', 'toBeTruthy',
    true
);
testReducerControlPanels('Проверяем закрытие панели управления гостя страницы: ', appReducer,
    initialState, openQuestPageControlPanelAC,
    'questPageControlPanel', 'toBeFalsy',
    false
);

testReducerControlPanels('Проверяем открытие панели управления владельца страницы: ', appReducer,
    initialState, openOwnerPageControlPanelAC,
    'ownerPageControlPanel', 'toBeTruthy',
    true
);
testReducerControlPanels('Проверяем закрытие панели управления владельца страницы: ', appReducer,
    initialState, openOwnerPageControlPanelAC,
    'ownerPageControlPanel', 'toBeFalsy',
    false
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

test('Тестируем отображение/скрытие навигационной панели для пк/мобил: ', () => {
    const navigationPanelBefore = initialState.navigationPanel;
    let resultState = appReducer(initialState, toggleNavigationPanelAC());
    let navigationPanelAfter = resultState.navigationPanel;
    expect(navigationPanelBefore).not.toBe(navigationPanelAfter);
    resultState = appReducer(resultState, toggleNavigationPanelAC());
    navigationPanelAfter = resultState.navigationPanel;
    expect(navigationPanelBefore).toBe(navigationPanelAfter);
});

test('Тестируем возвращаемое значение при неизвестном action (должно остаться неизменным):', () => {
    const resultState = appReducer(initialState, {type: undefined});
    expect(resultState).toEqual(initialState);
})