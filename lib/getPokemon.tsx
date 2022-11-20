import React from "react";
import useSWR, { Key, Fetcher } from "swr";
import { PokemonResponse } from "../schema";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type getPokemonPikachu = { pikachu: PokemonResponse };

export const GetPokemonPikachu = () => {
  const { data, error } = useSWR<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon/pikachu`,
    fetcher
  );

  console.log(data);

  return <h1>pokemo</h1>;
};
