import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILER } from '../constants'


export const authRequest = () => ({
    type: AUTH_REQUEST,
})

export const authSuccess = () => ({
    type: AUTH_SUCCESS
})

export const authFailer = (error) => ({
    type: AUTH_FAILER,
    error: error
})