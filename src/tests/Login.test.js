/* eslint-disable */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
import { Provider } from 'react-redux';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

const store = createStore(reducer, middleware);

describe('Login form', () => {
    it('should show dropdown for user select', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        expect(component.getByTestId('select')).toBeInTheDocument();
    });
});

