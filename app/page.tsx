import LoadMorePokemons from "@/components/load-pokemons";
import { PokemonCard } from "@/components/pokemon-card";
import { getPokemons, Pokemon } from "@/lib/pokemonApi";

export default async function Home() {
  const pokemonList = await getPokemons();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {pokemonList.map((pokemon : Pokemon) => {
          return (
            <PokemonCard key={pokemon.name + "key"} name={pokemon.name}/>          
          )
        })}
        <LoadMorePokemons /> 
    </main>
  );
}