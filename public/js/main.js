import { renderKantoPokemon, renderJohtoPokemon, renderHoennPokemon } from "./render-region-pokemon.js";


const kantoButton = document.querySelector('[data-kanto-button]')
const johtoButton = document.querySelector('[data-johto-button]')
const hoennButton = document.querySelector('[data-hoenn-button]')

kantoButton.addEventListener('click', renderKantoPokemon);
johtoButton.addEventListener('click', renderJohtoPokemon);
hoennButton.addEventListener('click', renderHoennPokemon);


function selectRegion(region) { // Makes it so clicked region's bottom border is black
    Array(...document.getElementById('regions').children).forEach(element => {
        element.style.borderBottom = "1px solid black";
    });

    document.getElementById(region).style.borderBottom = '5px solid black';
}
window.selectRegion = selectRegion;