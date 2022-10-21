/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Leaderboard from '../components/Leaderboard';
import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
import { Provider } from 'react-redux';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const store = createStore(reducer, middleware);

test('render Leaderboard component', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Leaderboard />
            </Provider>
        </MemoryRouter>
    );
    screen.debug();
});

describe('Leaderboard', () => {
    const component = render(
        <MemoryRouter>
            <Provider store={store}>
                <Leaderboard />
            </Provider>
        </MemoryRouter>);
    expect(component).toMatchSnapshot();
});
