import * as actionTypes from './actionTypes';

const initialState = {
    result: [],
    isLoading: false,
    error: null,
};

const data = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_DATA_REQUEST:
            return {
                ...state,
                result: [],
                isLoading: true,
                error: null,
            };
        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                result: action.payload,
                isLoading: false,
                error: null,
            };
        case actionTypes.LOAD_DATA_ERROR:
            return {
                ...state,
                result: [],
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default data;
