import types from './types';

const showToast = (toast) =>
    ({
        type: types.SHOW_TOAST,
        toast
    });

const hideToast = () =>
    ({
        types: types.HIDE_TOAST
    })

export default {
    showToast,
    hideToast
}