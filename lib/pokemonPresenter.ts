import { PokemonResponse } from "../types/pokemonResponse";
import { PokemonDetailResponse } from "../types/pokemonDetailResponse";
import { useMemo } from "react";

export const JACODE = "ja-Hrkt";

export const pokemonPresenter = (): {
  getPokemon: (pokemonNameOrId: string) => Promise<PokemonResponse>;
  usePokemonData: (pokemonSpeciesData: PokemonDetailResponse | undefined) => {
    pokemonName: string | undefined;
    pokemonGenus: string | undefined;
    pokemonFlavorText: string | undefined;
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

  const usePokemonData = (pokemonData: PokemonDetailResponse | undefined) => {
    const pokemonName = useMemo(() => {
      if (!pokemonData) return;

      return pokemonData?.names?.find((n) => n.language.name === JACODE)?.name;
    }, [pokemonData]);

    const pokemonGenus = useMemo(() => {
      if (!pokemonData) return;

      return pokemonData?.genera?.find((n) => n.language.name === JACODE)
        ?.genus;
    }, [pokemonData]);

    const pokemonFlavorText = useMemo(() => {
      if (!pokemonData) return;

      return pokemonData.flavor_text_entries.find(
        (f) => f.language.name === JACODE
      )?.flavor_text;
    }, [pokemonData]);

    return { pokemonName, pokemonGenus, pokemonFlavorText };
  };

  return {
    getPokemon,
    usePokemonData,
  };
};
