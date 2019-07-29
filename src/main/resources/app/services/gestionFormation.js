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

export function add() {
    return fetch(url, {
        method: 'POST',
    })
        .then(response => response.json());
}