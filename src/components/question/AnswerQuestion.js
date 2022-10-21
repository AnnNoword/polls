import React from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import { connect } from 'react-redux';
import { handleQuestionAnswer } from '../../actions/questions';
import { handleUserQuestionAnswer } from '../../actions/users';
import { useParams } from 'react-router-dom';
import Nav from '../Nav';

const AnswerQuestion = (props) => {
    const { question_id } = useParams();
    const { questions, dispatch, authedUser, users } = props;
    const question = questions[question_id];

    if (question === undefined) {
        return (
            <div>
                <Nav />
                <p className='text-center font-semibold'>Question is not found</p>
            </div>
        );
    }

    const userAvatar = users[question.author].avatarURL;
    const voted = users[authedUser].answers[question_id];

    const optionsMap = [
        ['optionOne', 'optionTwo'],
        ['optionTwo', 'optionOne']
    ];

    const handleAnswer = (e) => {
        e.preventDefault();
        dispatch(handleQuestionAnswer({
            authedUser,
            qid: question.id,
            answer: e.target.getAttribute('data-option')
        }));
        dispatch(handleUserQuestionAnswer({
            authedUser,
            qid: question.id,
            answer: e.target.getAttribute('data-option')
        }));
    };
    return (
        <div>
            <Nav />
            <div className=" mx-auto max-w-xl block p-6 rounded-lg shadow-lg bg-white max-w border py-6 px-6">
                <form className="text-center">
                    <h1 className="text-sky-800 text-3xl font-bold text-center mt-4 mb-4">Poll by {question.author}</h1>
                    <img src={userAvatar} alt={`Avatar of ${question.author}`} className="shadow rounded-full w-32 h-32 border m-auto my-4" />
                    <h2 className="text-gray-700 text-xl font-bold text-center mt-4 mb-4">Would you rather</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            optionsMap.map(([option, opposite]) => {
                                const votes = question[option].votes.length,
                                    oppositeVotes = question[opposite].votes.length;
                                return (
                                    <div key={option} className="border flex flex-col justify-between rounded-lg shadow-lg py-4 px-4">
                                        <p className="pb-2">{question[option].text}</p>
                                        <Button text={'Click'} dataOption={option} isChecked={voted && voted === option} onClick={handleAnswer} />
                                        {voted && (
                                            <div className="mt-4">
                                                <p className="text-center text-sm mt-1 mb-1">Number of people who voted for this option: <strong>{votes}</strong></p>
                                                <p className="text-center text-sm mt-1 mb-1">Percentage of people who voted for this option: <strong>{(votes / (votes + oppositeVotes)).toFixed(2) * 100}%
                                                </strong></p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </form>
            </div>
        </div>
    );
};

AnswerQuestion.propTypes = {
    users: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
    authedUser: PropTypes.string
};

const mapStateToProps = ({ questions, authedUser, users }) => {
    return {
        authedUser,
        users,
        questions
    };
};

export default connect(mapStateToProps)(AnswerQuestion);
