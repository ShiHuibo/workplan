const LOGIN_REQUEST = 'authentication/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'authentication/LOGIN_FAILURE';
const LOGOUT_REQUEST = 'authentication/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'authentication/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'authentication/LOGOUT_FAILURE';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${creds.username}&password=${creds.password}`
    };

    return dispatch => {
        // dispatch 请求开始状态
        dispatch(requestLogin(creds));

        return fetch('http://localhost:8080/sessions/create', config)
            .then(response =>
                response.json().then(user => ({user, response}))
            ).then(({user, response}) => {
                if (!response.ok) {
                    // dispatch 错误状态
                    dispatch(loginError(user.message));
                    return Promise.reject(user)
                } else {
                    // 登录成功后，将token存到local storage中，当然也可以放至session storage中
                    localStorage.setItem('id_token', user.id_token);
                    // dispatch 成功状态
                    dispatch(receiveLogin(user))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout())
    }
}

const initialState = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token')
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state;
    }
}