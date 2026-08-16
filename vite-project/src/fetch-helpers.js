//PART 1: fetch a random Pokémon
export async function getRandomPokemon() {
  try {
    const randomId = Math.floor(Math.random() * 150) + 1;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }

    const data = await response.json();

    const pokemonObj = {
      name: data.name,
      types: data.types.map((typeObj) => typeObj.type.name).join(", "),
      sprite: data.sprites.front_default,
    };

    return { data: pokemonObj, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}

//PART 2: post a captured Pokémon to Formspree
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export async function postDiscoveredPokemon(formData) {
  try {
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to capture Pokémon");
    }

    const responseData = await response.json();
    return { data: responseData, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}
