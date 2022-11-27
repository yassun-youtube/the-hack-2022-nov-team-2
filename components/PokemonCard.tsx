"use client";

import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { PokemonResponse } from "../schema";

type PokemonCardProps = {
  pokemonUrl: string;
};

export const PokemonCard = ({ pokemonUrl }: PokemonCardProps) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemon, error } = useSWR<PokemonResponse>(pokemonUrl, fetcher);
  if (error) return <div>failed to load</div>;

  return pokemon ? (
    <div className="card w-60  shadow-2xl flex items-center bg-yellow-100">
      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          fill
        />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{pokemon.name}</h2>
        <h3 className="font-semibold">[Types]</h3>
        {pokemon.types.map((type) => (
          <p>{type.type.name}</p>
        ))}
      </div>
    </div>
  ) : (
    <h1>Not found Pokemon</h1>
  );
};
