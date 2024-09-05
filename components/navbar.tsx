import Link from "next/link";
import SearchBar from "./searchbar";

export default function Navbar(){
  return (
    <nav className="flex flex-col items-center justify-between nav-bar">
      <Link href="/" className="mt-6">
        <h1 className="title">Poke Desck</h1>
      </Link>

      <SearchBar placeholder="Busca tu pokemon" />
    </nav>
  );
};