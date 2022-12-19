"use client";

import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import useSWR from "swr";
import { PokemonDetailResponse } from "../../../types/pokemonDetailResponse";
import Image from "next/image";
import { JACODE, pokemonPresenter } from "../../../lib/pokemonPresenter";

export default function PokemonDetail() {
  const pokemonId = location.pathname.split("/")[2];
  const { usePokemonData } = pokemonPresenter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonData, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    fetcher
  );

  const { data: pokemonSpeciesData, error: speciesError } =
    useSWR<PokemonDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
      fetcher
    );

  const { pokemonName, pokemonGenus } = usePokemonData(pokemonSpeciesData);

  if (!pokemonData || !pokemonSpeciesData)
    return (
      <div className="flex justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold flex justify-center text-pokeBlend3">
        {pokemonName}
      </h1>

      <h4></h4>

      <div className="flex flex-row gap-3">
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt={pokemonData.name}
            loading="eager"
            fill
            sizes="150"
            priority
          />
        </div>

        {pokemonData.sprites.other["dream_world"].front_default && (
          <div className="relative w-40 h-40 object-fill px-10 pt-10">
            <Image
              src={pokemonData.sprites.other["dream_world"].front_default ?? ""}
              alt={pokemonData.name}
              loading="eager"
              fill
              sizes="150"
              priority
            />
          </div>
        )}

        {pokemonData.sprites.versions["generation-ii"].crystal
          .front_default && (
          <div className="relative w-40 h-40 object-fill px-10 pt-10">
            <Image
              src={
                pokemonData.sprites.versions["generation-ii"].crystal
                  .front_default
              }
              alt={pokemonData.name}
              loading="eager"
              fill
              sizes="150"
              priority
            />
          </div>
        )}

        {pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
          .front_default && (
          <div className="relative w-40 h-40 object-fill px-10 pt-10">
            <Image
              src={
                pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
                  .front_default
              }
              alt={pokemonData.name}
              loading="eager"
              fill
              sizes="150"
            />
          </div>
        )}

        {pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
          .front_default && (
          <div className="relative w-40 h-40 object-fill px-10 pt-10">
            <Image
              src={
                pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .front_default
              }
              alt={pokemonData.name}
              loading="eager"
              fill
              sizes="150"
            />
          </div>
        )}

        {pokemonData.sprites.versions["generation-v"]["black-white"].animated
          .front_default && (
          <div className="relative w-40 h-40 object-fill px-10 pt-10">
            <Image
              src={
                pokemonData.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default
              }
              alt={pokemonData.name}
              loading="eager"
              fill
              sizes="150"
            />
          </div>
        )}

        {pokemonData.sprites.versions["generation-vi"][
          "omegaruby-alphasapphire"
        ].front_default && (
          <div className="relative w-40 h-40 object-fill px-10 pt-10">
            <Image
              src={
                pokemonData.sprites.versions["generation-vi"][
                  "omegaruby-alphasapphire"
                ].front_default
              }
              alt={pokemonData.name}
              loading="eager"
              fill
              sizes="150"
            />
          </div>
        )}
      </div>
    </div>
  );
}
