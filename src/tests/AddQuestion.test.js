/* eslint-disable */
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import AddQuestion from '../components/question/AddQuestion';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';

describe('AddQuestion', () => {
    const store = createStore(reducer, middleware);

    it('should show two options inputs on the page', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <AddQuestion />
                </Provider>
            </MemoryRouter>
        );
        const firstOptionInput = component.getByPlaceholderText('First Option'),
            secondOptionInput = component.getByPlaceholderText('Second Option');
        const submitQuestionButton = component.getByText('Submit question');

        expect(firstOptionInput).toBeInTheDocument();
        expect(secondOptionInput).toBeInTheDocument();
        expect(submitQuestionButton).toBeInTheDocument();
    });

    it('should disable the Submit button if input fields are empty', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <AddQuestion />
                </Provider>
            </MemoryRouter>);
        const submitQuestionButton = component.getByText('Submit question');
        expect(submitQuestionButton).toBeDisabled();
    });

    it('should enable the Submit button if input fields are not empty', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <AddQuestion />
                </Provider>
            </MemoryRouter>);

        const firstOptionInput = component.getByPlaceholderText('First Option'),
            secondOptionInput = component.getByPlaceholderText('Second Option');
        fireEvent.change(firstOptionInput, {
            target: {
                value: 'First option'
            }
        });
        fireEvent.change(secondOptionInput, {
            target: {
                value: 'Second option'
            }
        });
        const submitQuestionButton = component.getByText('Submit question');
        expect(submitQuestionButton).not.toBeDisabled();
    });
});
