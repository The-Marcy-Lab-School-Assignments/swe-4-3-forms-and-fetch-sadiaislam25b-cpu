import { getRandomPokemon, postDiscoveredPokemon } from "./fetch-helpers.js";
import { renderPokemon, renderError, renderSuccess } from "./dom-helpers.js";

//PART 1: discover a random Pokémon 
async function getAndRenderPokemon() {
  const { data, error } = await getRandomPokemon();

  if (error) {
    renderSuccess("");
    renderError(error);
    return;
  }

  renderPokemon(data);
  renderSuccess(`${data.name} was discovered!`);
  renderError("");
}

// run once on page load
getAndRenderPokemon();

// run again on button click
const discoverButton = document.querySelector("#discover-button");
discoverButton.addEventListener("click", getAndRenderPokemon);

//PART 2: capture a Pokémon via the form 
const captureForm = document.querySelector("#capture-form");

captureForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(captureForm);

  const formValues = {
    name: formData.get("name"),
    types: formData.get("types"),
    isFavorite: formData.get("isFavorite") === "on",
  };

  const { data, error } = await postDiscoveredPokemon(formValues);

  if (error) {
    renderSuccess("");
    renderError("Error: unable to capture Pokémon. Please try again later");
    return;
  }

  renderSuccess(`${formValues.name} has been captured!`);
  renderError("");
  captureForm.reset();
});