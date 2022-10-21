import { saveQuestionAnswer } from '../utils/api';
import { SAVE_QUESTION_ANSWER } from './questions';
import { SAVE_QUESTION } from './questions';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users: users
    };
}

function saveUserQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    };
}

function saveUserAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    };
}

export default function handleUserQuestion(question) {
    return (dispatch) => {
        dispatch(saveUserQuestion(question))
    }
}

export function handleUserQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveUserAnswer(info));
        return saveQuestionAnswer(info).catch((e) => {
            console.warn('Error in handleQuestionAnswer: ', e);
            dispatch(saveUserAnswer(info));
            alert('There was an error. Please try again');
        });
    };
}
