import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS: {
            return {
                ...state,
                ...action.questions
            };
        }
        case SAVE_QUESTION_ANSWER: {
            const { qid, answer, authedUser } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    optionOne: {
                        ...state[qid].optionOne,
                        votes: state[qid].optionOne.votes.filter(qid => qid !== authedUser)
                    },
                    optionTwo: {
                        ...state[qid].optionTwo,
                        votes: state[qid].optionTwo.votes.filter(qid => qid !== authedUser)
                    },
                    [answer]: {
                        ...state[qid][answer],
                        votes: !state[qid][answer].votes.includes(authedUser)
                            ? state[qid][answer].votes.concat([authedUser])
                            : state[qid][answer].votes
                    }
                }
            };
        }
        case SAVE_QUESTION: {
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            };
        }
        default: {
            return state;
        }
    }
}
