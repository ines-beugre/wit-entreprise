import types from "./types";

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
    setFormations,
    setPending
}

