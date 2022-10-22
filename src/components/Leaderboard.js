import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from './Nav';

const Leaderboard = ({ users }) => {
    const tableHeadings = ['Users', 'Answered', 'Created'];
    return (
        <div>
            <Nav />
            <div className=" max-w-xl mx-auto shadow-lg rounded-lg border p-4 flex flex-col">
                <h1 className="text-sky-800 text-3xl font-bold text-center my-4">Leaderboard</h1>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                <tr>
                                    {
                                        tableHeadings.map(h => (
                                            <th key={h.toLowerCase()} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                {h}
                                            </th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map((user) => {
                                        const questionsAnswered = Object.keys(user.answers).length,
                                            questionsAsked = user.questions.length;
                                        return (
                                            <tr key={user.id} className="border-b">
                                                <td className="flex text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                                    <img src={user.avatarURL} alt={user.name} className="rounded-full h-16 w-16" />
                                                    <div className="py-4 pl-4">
                                                        <h6 className="font-semibold">{user.name}</h6>
                                                        <i>{user.id}</i>
                                                    </div>
                                                </td>
                                                <td className="text-center text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                                    {questionsAnswered}
                                                </td>
                                                <td className="text-center text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                                    {questionsAsked}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Leaderboard.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateToProps = ({ users }) => {
    const usersList = Object.values(users);
    return {
        users: usersList.sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    };
};

export default connect(mapStateToProps)(Leaderboard);
