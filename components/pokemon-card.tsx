import { styleCards } from "@/app/ui/classes";
import Link from "next/link"


interface PokemonCardProps {
    name: string

}

export function PokemonCard({name}:PokemonCardProps){
    console.log()
    return(
            <Link
                href={name}
                className={styleCards}
                key={name + "Card"}      
            >
                <h2 className="noptext-2xl font-semibold">
                    {name.toUpperCase()}
                </h2>
            </Link>
)}