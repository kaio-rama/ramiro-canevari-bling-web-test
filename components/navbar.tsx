import Link from "next/link";
import SearchBar from "./searchbar";

export default function Navbar () {
    return(
        <div className="flex flex-col items-center justify-between nav-bar">
            
            <Link href={"/"} style={{marginTop:"25px"}} >
                <h1 className="title"> Poke Desck </h1>
            </Link>

            <SearchBar placeholder="Busca tu pokemon"/>
        </div>
    )
}