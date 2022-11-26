import React, { FC } from "react";
import { pokemonPresenter } from "../lib/pokemonPresenter";
import Image from "next/image";

type PokemonCardProps = {
  pokemonNameOrId: string;
};

export const PokemonCard = ({ pokemonNameOrId }: PokemonCardProps) => {
  const { getPokemon } = pokemonPresenter();
  getPokemon(pokemonNameOrId).then((pokemon) => {
    return (
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
    );
  });
};
