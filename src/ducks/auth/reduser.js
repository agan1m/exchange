import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILER} from '../constants'


const initState = {
    isAuth: false,
    isLoading: false,
    error: null
}


const AuthReducer = (state=initState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false
            };
        case AUTH_FAILER:
            return {
                ...state,
                isAuth: false,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
}

export default AuthReducer