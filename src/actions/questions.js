import { saveQuestionAnswer } from '../utils/api';
import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

function saveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    };
}

function saveNewQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    };
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
    return (dispatch) => {
        dispatch(showLoading('sectionBar'));
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
            .then((question) => dispatch(saveNewQuestion(question)))
            .then(() => dispatch(hideLoading('sectionBar')));
    };
}

export function handleQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveAnswer(info));
        return saveQuestionAnswer(info).catch((e) => {
            console.warn('Error in handleQuestionAnswer: ', e);
            dispatch(saveAnswer(info));
            alert('There was an error. Please try again');
        });
    };
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}
