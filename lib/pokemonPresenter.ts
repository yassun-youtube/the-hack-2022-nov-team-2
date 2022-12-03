import { ftruncate } from "fs";
import useSWR from "swr";
import { PokemonResponse } from "../schema";

export const pokemonPresenter = (): {
  getPokemon: (pokemonNameOrId: string) => Promise<PokemonResponse>;
} => {
  const getPokemon = async (
    pokemonNameOrId: string
  ): Promise<PokemonResponse> => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  };

  return {
    getPokemon,
  };
};
