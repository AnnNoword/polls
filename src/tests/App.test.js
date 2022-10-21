/* eslint-disable */
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
import { Provider } from 'react-redux';
import React from 'react';

const store = createStore(reducer, middleware);
/**
 * @jest-environment jsdom
 */

test('render App component', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    screen.debug();
});

describe('App', () => {
    const component = render(
        <Provider store={store}>
            <App />
        </Provider>);
    expect(component).toMatchSnapshot();
});
