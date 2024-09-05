"use client"

import { useState } from "react";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());

    const allPokemons = Array.from(
      document.getElementsByClassName("noptext-2xl font-semibold")
    );

    allPokemons.forEach((pokemon) => {
      const pokemonName = pokemon.textContent?.toLowerCase() || "";
      if (pokemonName.includes(term.toLowerCase())) {
        pokemon.parentElement?.classList.remove("hidden");
      } else {
        pokemon.parentElement?.classList.add("hidden");
      }
    });
  };

    return (
    <input
      onChange={(event) => handleSearch(event.target.value)}
      className="search-bar"
      placeholder={placeholder}
    />
  );
}