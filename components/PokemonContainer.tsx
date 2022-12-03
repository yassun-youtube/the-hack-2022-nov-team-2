"use client";

import useSWR from "swr";
import { PokemonCard } from "./PokemonCard";

type GetPokemonsResponse = {
  count: number;
  previos: string;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
};

export const PokemonContainer = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonsData, error } = useSWR<GetPokemonsResponse>(
    "https://pokeapi.co/api/v2/pokemon?limit=100",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!pokemonsData) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-4 p-12">
      {pokemonsData.results.map((pokemon) => (
        <PokemonCard pokemonUrl={pokemon.url} />
      ))}
    </div>
  );
};
