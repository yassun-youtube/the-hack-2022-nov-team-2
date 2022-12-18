"use client";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { PokemonResponse } from "../types/pokemonResponse";

type PokemonImageProps = {
    pokemonId: string;
  };

export const PokemonImage = ({ pokemonId } : PokemonImageProps) => {

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: pokemonData, error } = useSWR<PokemonResponse>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
      fetcher
    );
  
    if (error) return <div>failed to load</div>;
    if (!error && !pokemonData)
      return (
        <div className="flex justify-center">
          <div className="animate-spin h-8 w-8 bg-blue-300 rounded-xl"></div>
        </div>
      );
  
    return pokemonData ? (
        <div className="flex flex-col">
            <div className="relative w-40 h-40 object-fill px-10 pt-10 p-4 cursor-pointer">

                <a href='https://github.com/kazu-S-1110'>
                    <Image 
                        src={pokemonData.sprites.other["official-artwork"].front_default}
                        alt={pokemonData.name}
                        loading="eager"
                        fill
                        sizes="150"
                        priority
                    />
                </a>
            </div>
        </div>
    ) : (
        <h1>Not found Pokemon</h1>
    );
};
  