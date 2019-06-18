import {list} from '../../services/gestionFormation';
import actions from "./actions";

export const getFormations = () => {
    return (dispatch) => {
        dispatch(actions.setPending(true));
        list()
            .then(formations => {
                dispatch(actions.setFormations(formations));
                dispatch(actions.setPending(false));
                return Promise.resolve();
            })
            .catch((error) => {
                console.log(error);
                dispatch(actions.setPending(false));
                return Promise.reject(error);
            })
    }
};