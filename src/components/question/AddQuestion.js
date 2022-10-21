import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import { connect } from 'react-redux';
import Input from '../elements/Input';
import { handleAddQuestion } from '../../actions/questions';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';

const AddQuestion = (props) => {
    const { authedUser, dispatch } = props;
    const navigate = useNavigate();

    const [options, setOptions] = useState({
            optionOne: '',
            optionTwo: ''
        }
    );

    const isDisabled = () => {
        return options.optionOne === '' || options.optionTwo === '';
    };

    const onChangeHandler = (e) => {
        const text = e.target.value;
        const option = e.target.getAttribute('data-option');
        setOptions({
            ...options,
            [option]: text
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // SEND REQUEST TO SERVER
        dispatch(handleAddQuestion({
            optionOneText: options.optionOne,
            optionTwoText: options.optionTwo,
            author: authedUser
        }));
        // SET DATA ON STOREFRONT
        setOptions({
            ...options,
            optionOne: '',
            optionTwo: ''
        });
        navigate('/');
    };
    return (
        <div>
            <Nav />
            <div className="shadow-lg block p-6 rounded-lg border bg-white max-w-md m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                        <h1 className="text-sky-800 text-3xl font-bold text-center mt-4 mb-4">Would you rather</h1>
                        <h2 className="text-gray-700 text-xl font-bold text-center mt-4 mb-4">Create your own poll</h2>
                        <Input text={'First Option'}
                               value={options.optionOne}
                               dataOption="optionOne"
                               onChange={onChangeHandler} />
                    </div>
                    <div className="form-group mb-6">
                        <Input text={'Second Option'}
                               value={options.optionTwo}
                               dataOption="optionTwo"
                               onChange={onChangeHandler} />
                    </div>
                    <Button text={'Submit'} isDisabled={isDisabled()} />
                </form>
            </div>
        </div>
    );
};

AddQuestion.propTypes = {
    props: PropTypes.object,
    authedUser: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ authedUser, dispatch }) => ({
    authedUser,
    dispatch
});

export default connect(mapStateToProps)(AddQuestion);
