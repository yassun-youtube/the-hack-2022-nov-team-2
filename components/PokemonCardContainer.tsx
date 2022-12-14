"use client";

import { useState } from "react";
import useSWR from "swr";
import { Pagination } from "./Pagination";
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

export const PokemonCardContainer = () => {
  const [page, setPage] = useState<number>(0);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonsData, error } = useSWR<GetPokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page * 100}`,
    fetcher
  );

  if (!pokemonsData)
    return (
      <div className="flex justify-center">
        <div className="animate-spin h-8 w-8 bg-blue-300 rounded-xl"></div>
      </div>
    );
  if (error) return <div>failed to load</div>;

  return (
    <div className="py-10 px-28">
      <Pagination page={page} setPage={setPage} />
      <div className="flex flex-col shrink gap-4 p-8">
        {pokemonsData.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
