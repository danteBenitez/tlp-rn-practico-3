const PRODUCT_API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharacters() {
    return fetch(PRODUCT_API_URL)
        .then(res => res.json())
        .then(data => data.results)
        .then(data => normalizeCharacters(data));
}

async function normalizeCharacters(data) {
    const characters = await data;
    return Promise.all(characters.map(ch => {
        return {
            id: ch.id,
            url: ch.url,
            name: ch.name,
            status: ch.status,
            species: ch.species,
            gender: ch.gender,
            image: ch.image,
            origin: {
                name: ch.origin.name,
                url: ch.origin.url
            },
            location: {
                name: ch.location.name,
                url: ch.origin.url
            }
        }
    }));
}
