import { LOGIN_SUCCESS,LOGIN_FAILURE } from "./action_types";
export const login_success = () => {
    return{
        type: LOGIN_SUCCESS
    }
}

export const login_failure = () => {
    return{
        type:LOGIN_FAILURE
    }
}
