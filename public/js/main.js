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
    pokeContainer.classList.add('card', 'col-sm-12', 'col-md-6', 'col-lg-4');

    createPokeImage(pokeData.id, pokeContainer);

    pokeName.innerText = pokeData.name;
    pokeNumber.innerText = `#${pokeData.id}`;

    pokeContainer.append(pokeName, pokeNumber);
    allPokemonContainer.appendChild(pokeContainer);
}

function createPokeImage(pokeID, containerDiv) {
    const pokeImgContainer = document.createElement('div');
    const pokeImage = document.createElement('img');

    pokeImgContainer.classList.add('poke-image')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}


function selectRegion(region) {
    document.getElementById(region).style.backgroundColor = 'black';
    document.getElementById(region).style.color = 'white';
}



function renderKantoPokemon() {
    const allPokemonContainer = document.getElementById('poke-container');
    allPokemonContainer.innerText = '';
    fetchKantoPokemon();
}
function renderJohtoPokemon() {
    const allPokemonContainer = document.getElementById('poke-container');
    allPokemonContainer.innerText = '';
    fetchJohtoPokemon();
}
function renderHoennPokemon() {
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

kantoButton.addEventListener('click', renderKantoPokemon);
johtoButton.addEventListener('click', renderJohtoPokemon);
hoennButton.addEventListener('click', renderHoennPokemon);