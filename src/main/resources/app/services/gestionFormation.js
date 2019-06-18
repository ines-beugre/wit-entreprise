const url = "/api/formations";

export function list() {
    return fetch(url)
        .then(response => response.json());
};