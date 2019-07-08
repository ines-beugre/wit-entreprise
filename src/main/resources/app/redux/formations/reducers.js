import types from "./types";

const defaultState = {
    formation: {
        name: '',
        date: '',
        place: '',
        price: '',
        target: '',
        email: '',
        deadline: '',
        formers: [],
        suscribers: [],
        goals: '',
        description: '',
        modules: [],
        theme: '',
        phone: '',
        transfertPhone: '',
        image: '',
        logo: '',
    },
    formations: [],
    isPending: false
};

const formationsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_FORMATION:
            return {
                ...state,
                formation: action.formation
            };

        case types.SET_FORMATIONS:
            return {
                ...state,
                formations: action.formations
            };

        case types.SET_PENDING:
            return {
                ...state,
                isPending: action.isPending
            }

        default:
            return state;
    }
};

export default formationsReducer;