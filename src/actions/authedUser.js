export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(userId) {
    return {
        type: SET_AUTHED_USER,
        id: userId
    };
}

export function handleSetAuthedUser(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
    };
}
