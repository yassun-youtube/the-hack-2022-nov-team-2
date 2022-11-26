import react from "react";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonResponse } from "../schema";

const getPokemon = async (pokemonName: string): Promise<PokemonResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default async function Page() {
  return <PokemonCard pokemonNameOrId="1" />;
}
