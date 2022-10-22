import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionsList from './question/QuestionsList';
import Nav from './Nav';
import Button from './elements/Button';

const Dashboard = ({ userAnswers, pendingAnswers }) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    };

    const buttonText = toggle ? 'Show New questions' : 'Show answered questions';
    const headingText = toggle ? 'Done': 'New questions' ;
    const answers = toggle ? userAnswers : pendingAnswers;

    return (
        <div>
            <Nav />
            <div className="rounded-lg border p-4 max-w-xl mx-auto shadow-lg">
                <h1 className="text-sky-800 text-sky-800 text-3xl font-bold text-center my-4">Dashboard</h1>
                <Button text={buttonText} onClick={handleToggle} />
                <section className="border rounded-lg pt-4 mt-4">
                    <h2 className="text-gray-700 text-xl font-bold text-center mb-4">{headingText}</h2>
                    <QuestionsList questionsIds={answers} />
                    {answers.length ? null : <p className="text-center pb-4">All done!</p>}
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
