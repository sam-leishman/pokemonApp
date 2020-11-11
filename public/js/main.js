const kantoButton = document.querySelector('[data-kanto-button]')

let fetchKantoPokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json());
fetchKantoPokemon
    .then(allpokemon => console.log(allpokemon));

kantoButton.addEventListener('click', () => {
    document.getElementById('pageContent').innerHTML = kantoPokemonHtml;
})