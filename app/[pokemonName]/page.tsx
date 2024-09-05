import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { Suspense } from "react";
import { centeredItems, styleCards } from "@/app/ui/classes";
import LoadingPokePage from "./loading";
import { Metadata } from "next";
import Link from "next/link";


export async function generateMetadata({ params } : { params : { pokemonName : string }}): Promise<Metadata> {
    const { pokemonName } = params;
    return {
        title: pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1),
    };
}

export default async function PokemonPage({ params } : { params : { pokemonName : string }}){
    const { pokemonName } = params;
    const pokemonData = await getPokemon(pokemonName);

    return(
        <>
            <div className={centeredItems}>                
                <h1 className="title">{pokemonName.toUpperCase()}</h1>
                    <Suspense fallback ={LoadingPokePage()} >
                        <Image 
                            src={pokemonData.sprites.other['official-artwork'].front_default}
                            alt={"Illustration of " + pokemonName}
                            width={400}
                            height={400}
                        />
                    </Suspense>
                <Link href={"/"} className={styleCards}> Come Back </Link>
            </div>
        </>
    )

}

