"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { PokemonResponse } from "../types/pokemonResponse";
import { PokemonDetailResponse } from "../types/pokemonDetailResponse";
import { pokemonPresenter } from "../lib/pokemonPresenter";

type PokemonCardProps = {
  pokemonUrl: string;
};

export const PokemonCard = ({ pokemonUrl }: PokemonCardProps) => {
  const { usePokemonData } = pokemonPresenter();
  const pokemonId = useMemo(() => {
    if (!pokemonUrl) return;

    const arr = pokemonUrl.split("/");
    return arr[arr.length - 2];
  }, [pokemonUrl]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonData, error } = useSWR<PokemonResponse>(
    pokemonUrl,
    fetcher
  );

  const { data: pokemonDetailData, error: detailError } =
    useSWR<PokemonDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
      fetcher
    );
  const { pokemonName, pokemonGenus } = usePokemonData(pokemonDetailData);

  if (!pokemonData || !pokemonDetailData)
    return (
      <div className="flex justify-center">
        <div className="animate-spin h-8 w-8 bg-blue-300 rounded-xl"></div>
      </div>
    );
  if (error && detailError) return <div>failed to load</div>;

  return pokemonData ? (
    <div className="flex justify-between items-center border-4 border-pokeBlend1 rounded-lg p-4 cursor-pointer">
      <div className="flex flex-col gap-3 ml-3">
        <div className="card-body text-center ">
          <h1 className="card-title whitespace-nowrap">{pokemonName}</h1>
        </div>
        {pokemonGenus && (
          <p className="text-center whitespace-nowrap">{pokemonGenus}</p>
        )}
      </div>
      <Link href={`/pokemon/${pokemonId}`}>
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
                src={
                  pokemonData.sprites.other["dream_world"].front_default ?? ""
                }
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
                  pokemonData.sprites.versions["generation-iii"][
                    "ruby-sapphire"
                  ].front_default
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
        </div>
      </Link>
    </div>
  ) : (
    <h1>Not found Pokemon</h1>
  );
};
