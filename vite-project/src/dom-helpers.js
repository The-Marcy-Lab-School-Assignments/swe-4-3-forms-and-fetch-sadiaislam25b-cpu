
const discoveredList = document.querySelector("#discovered-list");
const errorElement = document.querySelector("#error");
const successElement = document.querySelector("#success");


export function renderPokemon(pokemonObj) {
  const li = document.createElement("li");


  const nameHeading = document.createElement("h2");
  nameHeading.textContent = pokemonObj.name;


  const typesParagraph = document.createElement("p");
  typesParagraph.textContent = `Types: ${pokemonObj.types}`;


  const sprite = document.createElement("img");
  sprite.src = pokemonObj.sprite;
  sprite.alt = pokemonObj.name;


  li.append(nameHeading, typesParagraph, sprite);


  discoveredList.append(li);
}


export function renderError(msg) {
  errorElement.textContent = msg;
}


export function renderSuccess(msg) {
  successElement.textContent = msg;
}