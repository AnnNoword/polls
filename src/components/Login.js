import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleSetAuthedUser } from '../actions/authedUser';

const Login = (props) => {
    const { users, dispatch } = props;
    const [user, setUser] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        const user = e.target.value;
        setUser(user);
        dispatch(handleSetAuthedUser(user));
    };
    return (
        <div className="border block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-10">
            <h1 className="text-sky-800 text-3xl font-bold text-center mt-4 mb-4">Employee Polls</h1>
            <img className="shadow rounded-full w-32 h-32 border m-auto my-4" src="https://octodex.github.com/images/momtocat.png" alt="Poll alt" />
            <h2 className="text-gray-700 text-xl font-bold text-center mt-4 mb-4">Log In</h2>

            <select value={user} onChange={handleChange} className="block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-6 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none" data-testid="select">
                <option key="none" value={null}>Please select user</option>
                {users.map(user => (
                    <option key={user.toLowerCase()} value={user}>{user}</option>
                ))}
            </select>
        </div>
    );
};

Login.propTypes = {
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ users }) => {
    return {
        users: Object.keys(users)
    };
};
export default connect(mapStateToProps)(Login);
