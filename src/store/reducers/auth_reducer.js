import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../actions/action_types";

const initialState = {
    is_authenticated: false
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                is_authenticated: true
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                is_authenticated: false
            }
        default:
            return state
    }
}

export default AuthReducer;