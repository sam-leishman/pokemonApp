export function renderPokemon(pokeData) {
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