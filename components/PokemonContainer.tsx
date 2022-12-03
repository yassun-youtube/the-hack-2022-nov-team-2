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

export const PokemonContainer = () => {
  const [page, setPage] = useState<number>(0);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonsData, error } = useSWR<GetPokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page * 100}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!pokemonsData) return <div>loading...</div>;

  return (
    <div className="p-4">
      <Pagination page={page} setPage={setPage} />
      <div className="flex flex-col gap-4 p-12">
        {pokemonsData.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
