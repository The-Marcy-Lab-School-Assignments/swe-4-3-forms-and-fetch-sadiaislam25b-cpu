export async function getRandomPokemon() {
  try {
    // Random ID between 1–150
    const randomId = Math.floor(Math.random() * 150) + 1;

    // Fetch Pokémon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }

    const data = await response.json();

    // Build pokemonObj
    const pokemonObj = {
      name: data.name,
      types: data.types
        .map((typeObj) => typeObj.type.name)
        .join(", "),
      sprite: data.sprites.front_default
    };

    // 4Success return format
    return { data: pokemonObj, error: null };

  } catch (error) {
    // Error return format
    return { data: null, error: error.message };
  }
}