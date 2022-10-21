import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionsList from './question/QuestionsList';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading-bar';

const Dashboard = ({ userAnswers, pendingAnswers }) => {
    return (
        <div>
            <LoadingBar scope="sectionBar" />
            <Nav />
            <div className="rounded-lg border px-4 py-4 max-w-xl mx-auto">
                <h1 className="text-sky-800 text-sky-800 text-3xl font-bold text-center mt-4 mb-4 text-">Dashboard</h1>
                <section className="border rounded pt-4 my-4">
                    <h2 className="text-gray-700 text-xl font-bold text-center mb-4">New questions</h2>
                    {pendingAnswers.length
                        ? <QuestionsList questionsIds={pendingAnswers} />
                        : <p className='text-center pb-4'>All done!</p>}
                </section>
                <section className="border rounded pt-4">
                    <h2 className="text-gray-700 text-xl font-bold text-center mb-4">Done</h2>
                    <QuestionsList questionsIds={userAnswers} />
                </section>
            </div>
        </div>
    );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
    const userAnswers = Object.keys(Object.values(users).filter(user => user.id === authedUser)[0].answers),
        pendingAnswers = Object.keys(questions).filter(question => !userAnswers.includes(question));
    return {
        userAnswers,
        pendingAnswers
    };
};

Dashboard.propTypes = {
    userAnswers: PropTypes.array.isRequired,
    pendingAnswers: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Dashboard);
