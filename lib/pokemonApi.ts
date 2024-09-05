const POKEMON_API = 'https://pokeapi.co/api/v2/'

// Type for Pokemon
export interface Pokemon {
    name: string;
    url: string;
}

// Type for Pokemon Response
interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export async function getPokemons(offset: number = 0, limit: number = 20) {
    const res = await fetch(`${POKEMON_API}pokemon?limit=${limit}&offset=${offset}`);
    const data: PokemonResponse = await res.json();
    return data.results;
}


export async function getPokemon( name : string ){
    const res = await fetch(POKEMON_API + 'pokemon/' + name);
    const data = await res.json();
    return data;
}
