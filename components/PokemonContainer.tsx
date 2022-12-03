"use client";

import { useState } from "react";
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
  const [page, setPage] = useState<number>(0);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonsData, error } = useSWR<GetPokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page * 100}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!pokemonsData) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-4 p-12">
      {pokemonsData.results.map((pokemon) => (
        <PokemonCard pokemonUrl={pokemon.url} />
      ))}
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            disabled={page === 0}
            className="btn bg-pokeBlend3"
            onClick={() => setPage((prev) => prev - 1)}
          >
            «
          </button>
          <button className="btn bg-pokeBlend3 cursor-auto">
            Page {page ? page + 1 : 1}
          </button>
          <button
            className="btn bg-pokeBlend3"
            onClick={() => setPage((prev) => prev + 1)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};
