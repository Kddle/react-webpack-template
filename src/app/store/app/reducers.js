import { SET_ERROR_MESSAGE } from './types';

const initialState = {
    error: null
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR_MESSAGE: return { ...state, error: action.payload };
        default: return state;
    }
}