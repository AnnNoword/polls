import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import PropTypes from 'prop-types';

const QuestionsList = ({ questions }) => {
    return (
        <ul className="flex flex-wrap justify-center">
            {
                questions.map((question) => (
                    <Question key={question.id} question={question} />
                ))
            }
        </ul>
    );
};

QuestionsList.propTypes = {
    questions: PropTypes.array.isRequired
};

const mapStateToProps = ({ questions }, { questionsIds }) => {
    const sorted = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
    return {
        questions: sorted.filter(q => questionsIds.includes(q.id))
    };
};
export default connect(mapStateToProps)(QuestionsList);
