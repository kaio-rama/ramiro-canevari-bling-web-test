 "use client";
 
import React, { useState } from "react";
import { getPokemons, Pokemon } from "@/lib/pokemonApi";
import { PokemonCard } from "./pokemon-card";
import { styleCards } from "@/app/ui/classes";

// UseStates for cheking previous state of the ofset and pokemons of the array
export default function LoadMorePokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(20);
    const [loading, setLoading] = useState(false);

    
    const handleClick = async () => {
        setLoading(true);
        const newPokemons = await getPokemons(offset, 20);
        setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
        setOffset(offset + 20);
        setLoading(false);
    };

    return (
        <div className="w-full flex flex-col items-center">
           
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} />
                ))}
            
            <button className={`${styleCards} -ab`}style={{marginTop: "82px"}} onClick={handleClick}>
                {loading ? "Cargando..." : "CARGAR MÁS POKEMONES"}
            </button>
        </div>
    );
}