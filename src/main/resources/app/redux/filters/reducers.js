import types from './types';

const defaultState = {
    filters: {
        search: "",
    }
};

const filtersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_FILTERS:
            return {
                ...state,
                filters: action.filters,
            }
        case types.SET_PENDING:
            return {
               ...state,
                filters: action.isPending
            }
        default:
            return state;
    }
};

export default filtersReducer;