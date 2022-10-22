import React from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import { formatDate } from '../../_DATA';
import { useNavigate } from 'react-router-dom';

const Question = ({ question }) => {
    const navigate = useNavigate();

    if (question === null) {
        return <p>This question does not exist</p>;
    }

    const { id, author, timestamp } = question;
    const navigateToQuestion = (e) => {
        e.preventDefault();
        navigate(`/questions/${id}`);
    };

    return (
        <li key={id} className="py-4">
            <div className="border mx-3 px-4 py-4 block rounded-lg bg-white max-w-sm">
                <p className="text-sm font-medium text-gray-900 text-center">{author}</p>
                <p className="text-sm text-gray-500 py-4">{formatDate(timestamp)}</p>
                <Button text={'Show'} onClick={navigateToQuestion} />
            </div>
        </li>
    );
};

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;
