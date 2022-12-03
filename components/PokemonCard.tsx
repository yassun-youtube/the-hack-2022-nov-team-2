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
    <div className="flex justify-start items-center border-4 border-pokeBlend1 rounded-lg p-4 cursor-pointer">
      <div className="card-body  text-center">
        <h1 className="card-title">{pokemon.name}</h1>
      </div>
      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={
            pokemon.sprites.other["official-artwork"].front_default ?? undefined
          }
          alt={pokemon.name}
          fill
        />
      </div>

      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={pokemon.sprites.other["dream_world"].front_default ?? undefined}
          alt={pokemon.name}
          fill
        />
      </div>

      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={
            pokemon.sprites.versions["generation-ii"].crystal.front_default ??
            undefined
          }
          alt={pokemon.name}
          fill
        />
      </div>

      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={
            pokemon.sprites.versions["generation-iii"]["ruby-sapphire"]
              .front_default ?? undefined
          }
          alt={pokemon.name}
          fill
        />
      </div>

      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={
            pokemon.sprites?.versions["generation-iv"]["diamond-pearl"]
              ?.front_default ?? undefined
          }
          alt={pokemon.name}
          fill
        />
      </div>
      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default ?? undefined
          }
          alt={pokemon.name}
          fill
        />
      </div>
      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={
            pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
              .front_default ?? undefined
          }
          alt={pokemon.name}
          fill
        />
      </div>
    </div>
  ) : (
    <h1>Not found Pokemon</h1>
  );
};
