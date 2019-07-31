import {csrf} from "./utils";
const url = "/api/formations";

export function list() {
    return fetch(url)
        .then(response => response.json());
};

export function getById(id) {
    return fetch(url + "/" + id, {
        method: 'GET',
    })
        .then(response => response.json());
}

export function add(formation) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(formation),
        headers: {
            'Content-Type': 'application/json',
            ...csrf(),
        }
    })
        .then(response => response.json());
}