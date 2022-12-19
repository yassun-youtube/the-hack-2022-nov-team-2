import { PokemonResponse } from "../types/pokemonResponse";
import { PokemonDetailResponse } from "../types/pokemonDetailResponse";
import { useMemo } from "react";

export const JACODE = "ja-Hrkt";

export const pokemonPresenter = (): {
  getPokemon: (pokemonNameOrId: string) => Promise<PokemonResponse>;
  usePokemonData: (pokemonSpeciesData: PokemonDetailResponse | undefined) => {
    pokemonName: string | undefined;
    pokemonGenus: string | undefined;
  };
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

  const usePokemonData = (
    pokemonSpeciesData: PokemonDetailResponse | undefined
  ) => {
    const pokemonName = useMemo(() => {
      if (!pokemonSpeciesData) return;

      return pokemonSpeciesData?.names?.find((n) => n.language.name === JACODE)
        ?.name;
    }, [pokemonSpeciesData]);

    const pokemonGenus = useMemo(() => {
      if (!pokemonSpeciesData) return;

      return pokemonSpeciesData?.genera?.find((n) => n.language.name === JACODE)
        ?.genus;
    }, [pokemonSpeciesData]);

    return { pokemonName, pokemonGenus };
  };

  return {
    getPokemon,
    usePokemonData,
  };
};
