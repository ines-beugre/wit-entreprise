import {add, getById, list} from '../../services/gestionFormation';
import actions from "./actions";
import {sendToast} from "../toast/dispatch";

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

export const getFormation = (id) => {
    return (dispatch) => {
        dispatch(actions.setPending(true));
        getById(id)
            .then(formation => {
                dispatch(actions.setFormation(formation));
                dispatch(actions.setPending(false));
                return Promise.resolve();
            })
            .catch(error => {
                console.log(error);
                dispatch(actions.setPending(false));
                Promise.reject(error);
            })
    }
};

export const addFormation = (formation) => {
    return (dispatch) => {
        dispatch(actions.setPending(true));
        return add(formation)
            .then((formation) => {
                dispatch(actions.setFormation(formation));
                dispatch(actions.setPending(false));
                dispatch(sendToast("success", "Formation ajoutée avec succès"));
                return Promise.resolve();
            })
            .catch(error => {
                console.log("error", error);
                dispatch(actions.setPending(false));
                dispatch(sendToast("failed", "Erreur lors de l'ajout de la formation: " + error.message));
                return Promise.reject(error);
            })
    }
}