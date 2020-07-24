import { SET_ERROR_MESSAGE } from './types';

export function setErrorMessage(message) {
    return {
        type: SET_ERROR_MESSAGE,
        payload: message
    };
}