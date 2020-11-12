import { renderPokemon } from "./render-card.js";



export function renderKantoPokemon() {
    const allPokemonContainer = document.getElementById('poke-container');
    allPokemonContainer.innerText = '';
    fetchKantoPokemon();
}
export function renderJohtoPokemon() {
    const allPokemonContainer = document.getElementById('poke-container');
    allPokemonContainer.innerText = '';
    fetchJohtoPokemon();
}
export function renderHoennPokemon() {
    const allPokemonContainer = document.getElementById('poke-container');
    allPokemonContainer.innerText = '';
    fetchHoennPokemon();
}

function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => {
            allpokemon.results.forEach(pokemon => {
                fetchPokemonData(pokemon);
            });
        })
}
function fetchJohtoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
        .then(response => response.json())
        .then(allpokemon => {
            allpokemon.results.forEach(pokemon => {
                fetchPokemonData(pokemon);
            });
        })
}
function fetchHoennPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
        .then(response => response.json())
        .then(allpokemon => {
            allpokemon.results.forEach(pokemon => {
                fetchPokemonData(pokemon);
            });
        })
}



function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(pokeData => {
            renderPokemon(pokeData)
        })
}