import React, { Fragment, useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import AddQuestion from './question/AddQuestion';
import AnswerQuestion from './question/AnswerQuestion';
import LoadingBar from 'react-redux-loading-bar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';

const App = (props) => {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);
    return (
        <Fragment>
            <LoadingBar />
            <div className="App px-4 mx-auto">
                {props.loading === true ? null : (
                    <Routes>
                        <Route path="/" exact element={
                            props.authedUser ? <Dashboard /> : <Login />
                        } />
                        <Route path="/leaderboard" exact element={
                            props.authedUser ? <Leaderboard /> : <Login />
                        } />
                        <Route path="/add" exact element={
                            props.authedUser ? <AddQuestion /> : <Login />
                        } />
                        <Route path="questions/:question_id" exact element={
                            props.authedUser ? <AnswerQuestion /> : <Login />
                        } />
                        <Route path="*" exact element={
                            props.authedUser ? <Navigate to={'/'} /> : <Login />
                        } />
                    </Routes>
                )}
            </div>
        </Fragment>
    );
};

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    authedUser: PropTypes.any
};

const mapStateToProps = (props) => ({
    loading: props.users && Object.keys(props.users).length === 0,
    authedUser: props.authedUser
});

export default connect(mapStateToProps)(App);
