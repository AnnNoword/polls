import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import { handleSetAuthedUser } from '../actions/authedUser';

const Nav = (props) => {
    const { authedUser, userAvatar, userName, dispatch } = props;

    const handleUserLogout = (e) => {
        e.preventDefault();
        dispatch(handleSetAuthedUser(null));
    };
    const navLinksMap = [
        ['Home', '/', true],
        ['Leaderboard', '/leaderboard', false],
        ['New', '/add', false]
    ];

    return (
        <div className="flex justify-between space-x-4 border-b mb-8 items-center pb-4 mt-8">
            <nav className="space-x-4 py-1">
                {
                    navLinksMap.map(([title, url, end]) => (
                        <NavLink key={title.toLowerCase()} to={url} end={end} className={({ isActive }) => (isActive ? 'bg-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium' : 'link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900')}>{title}</NavLink>
                    ))}
            </nav>
            <nav className="justify-end ml-8">
                {authedUser && (
                    <div className="flex items-center">
                        <img src={userAvatar} alt={`Avatar of ${authedUser}`} className="shadow rounded-full w-8 h-8 border m-auto mr-2" />
                        <p>{`Hello, ${userName}!`}</p>
                        <Link key="logout" to="/" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ml-2" onClick={handleUserLogout}><FiLogOut /></Link>
                    </div>
                    )
                }
            </nav>
        </div>
    );
};

Nav.propTypes = {
    authedUser: PropTypes.string,
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ authedUser, users }) => {
    const userAvatar = authedUser ? users[authedUser].avatarURL : null,
        userName = authedUser ? users[authedUser].name : null;

    return {
        authedUser,
        userAvatar,
        userName
    };
};
export default connect(mapStateToProps)(Nav);
