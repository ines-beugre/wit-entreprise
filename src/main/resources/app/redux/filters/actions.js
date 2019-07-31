import types from './types';

const setFilters = (filters) =>
    ({
        type: types.SET_FILTERS,
        filters
    });

const isPending = (isPending = false) =>
    ({
        type: types.SET_PENDING,
        isPending
    });

export default {
    setFilters,
    isPending
}
