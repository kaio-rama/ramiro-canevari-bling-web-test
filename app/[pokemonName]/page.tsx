//     Data Display:
// Load and display both images front_default and front_shiny from the official-artwork object.
// Include additional data such as name, ID number, abilities list, weight, height, and stats list. There is no need to include all data, but
// provide a representative sample in an appropriate design.

import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { Suspense } from "react";
import { centeredItems, styleCards } from "@/app/ui/classes";
import LoadingPokePage from "./loading";
import { Metadata } from "next";
import Link from "next/link";
import SwitchSkin from "@/components/switch-skin";

export async function generateMetadata({ params } : { params : { pokemonName : string }}): Promise<Metadata> {
    const { pokemonName } = params;
    return {
        title: pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1),
    };
}

export default async function PokemonPage({ params } : { params : { pokemonName : string }}){
    const { pokemonName } = params;
    const pokemonData = await getPokemon(pokemonName);
    const { sprites, id, types, height, weight, abilities, stats } = pokemonData;

    return (
        <>
            <div className={centeredItems}>                
                <Suspense fallback={<LoadingPokePage />} >
                    <div className={styleCards}>
                        <h1 className="title">{pokemonName.toUpperCase()}</h1>
                        <SwitchSkin />
                        <Image 
                            src={sprites.other['official-artwork'].front_default}
                            alt={`Illustration of ${pokemonName}`}
                            width={400}
                            height={400}
                        />
                        <label> Default Skin </label>
                        <Image 
                            src={sprites.other['official-artwork'].front_shiny}
                            alt={`Shiny illustration of ${pokemonName}`}
                            width={400}
                            height={400}
                            hidden
                        />
                        <label hidden> Shiny Skin </label>
                        <div style={{ textAlign: "justify", padding: "12px" }}>
                            <p>Pokemon ID: {id}</p>
                            <p>Pokemon types: {types.map((type: { type: { name: string }}) => type.type.name).join(', ')}</p>
                            <p>Pokemon height: {height}</p>
                            <p>Pokemon weight: {weight}</p>
                            <p>Pokemon Abilities:</p>
                            <ul>
                                {abilities.map((ability: { ability: { name: string }}) => (
                                    <li key={ability.ability.name}>{ability.ability.name}</li>
                                ))}
                            </ul>
                            <p>Pokemon Stats:</p>
                            <ul>
                                {stats.map((stat: { stat: { name: string }, base_stat: number }) => (
                                    <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Suspense>
                <Link href="/" className={styleCards}>Come Back</Link>
            </div>
        </>
    );
}
