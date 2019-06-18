const url = "/api/formations";

export function list() {
    return fetch(url)
        .then(response => response.json());
};

export function getById(id) {
    console.log("id",id);
    return fetch(url + "/" + id, {
        method: 'GET',
    })
        .then(response => response.json());

}