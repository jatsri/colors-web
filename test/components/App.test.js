import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from '../../components/App';
import * as getColors from '../../services/getColors';

const mockStore = configureMockStore();
const store = mockStore({
    receivedColors: [],
    addedColors: [],
    isFormValid: false,
    errors: {}
});

jest.mock('../../services/getColors', () => ({
    __esModule: true,
    getColors: jest.fn().mockReturnValue(10)
}))

test('should render the App component', () => {
    const component = renderer.create(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    expect(component).toMatchSnapshot()
})
