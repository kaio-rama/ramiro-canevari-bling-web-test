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
    console.log(pokemonData)

    return(
        <>
            <div className={centeredItems}>                
                <h1 className="title">{pokemonName.toUpperCase()}</h1>
                <SwitchSkin />
                    <Suspense fallback ={LoadingPokePage()} >
                        <Image 
                            src={pokemonData.sprites.other['official-artwork'].front_default}
                            alt={"Illustration of " + pokemonName}
                            width={400}
                            height={400}
                        />
                        <label> Default Skin </label>
                        <Image 
                            src={pokemonData.sprites.other['official-artwork'].front_shiny}
                            alt={"Illustration of " + pokemonName}
                            width={400}
                            height={400}
                            hidden
                        />
                        <label hidden> Shiny Skin </label>
                        <p> Pokemon ID : {pokemonData.id} </p>
                        <p> Pokemon types : {pokemonData.types.map(( type : any) => type.type.name )} </p>
                        <p> Pokemon height : {pokemonData.height} </p>
                        <p> Pokemon weight : {pokemonData.weight} </p>
                        <p> Pokemon Abilities: </p>
                        <ul> 
                            {pokemonData.abilities.map(( ability: any) => 
                                <li> {ability.ability.name} </li> )}
                        </ul>
                        <p> Pokemon Stats: </p>
                        <ul>
                        {pokemonData.stats.map(( stats: any) => 
                                <li> {stats.stat.name} : {stats.base_stat} </li> )}
                        </ul>
                    </Suspense>
                <Link href={"/"} className={styleCards}> Come Back </Link>
            </div>
        </>
    )

}

