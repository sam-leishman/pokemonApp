const kantoButton = document.querySelector('[data-kanto-button]')
const johtoButton = document.querySelector('[data-johto-button]')
const hoennButton = document.querySelector('[data-hoenn-button]')


function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(pokeData => {
            renderPokemon(pokeData)
        })
}


function renderPokemon(pokeData) {
    const allPokemonContainer = document.getElementById('poke-container');
    const pokeContainer = document.createElement('div');
    const pokeName = document.createElement('h4');
    const pokeNumber = document.createElement('p');

    pokeName.innerText = pokeData.name;
    pokeNumber.innerText = `#${pokeData.id}`;

    pokeContainer.append(pokeName, pokeNumber);
    allPokemonContainer.appendChild(pokeContainer);
}

function renderAllPokemon() {
    const allPokemonContainer = document.getElementById('poke-container');
    allPokemonContainer.innerText = '';
    fetchKantoPokemon();
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

kantoButton.addEventListener('click', renderAllPokemon)
johtoButton.addEventListener('click', renderAllPokemon);
hoennButton.addEventListener('click', () => {
    document.getElementById('pageContent').innerHTML = hoennPokemonHtml;
    fetchHoennPokemon
        .then(allpokemon => document.getElementById('regionPokemon').innerHTML = allpokemon)
})