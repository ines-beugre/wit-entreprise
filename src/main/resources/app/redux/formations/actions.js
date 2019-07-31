import types from "./types";

const setFormation = (formation) =>
    ({
        type: types.SET_FORMATION,
        formation
    });

const setFormations = (formations) =>
    ({
        type: types.SET_FORMATIONS,
        formations
    });

const setPending = (isPending = false) =>
    ({
        type: types.SET_PENDING,
        isPending
    })

export default {
    setFormation,
    setFormations,
    setPending
}

