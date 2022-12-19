"use client";

import useSWR from "swr";
import { PokemonDetailResponse } from "../../../types/pokemonDetailResponse";
import Image from "next/image";
import { pokemonPresenter } from "../../../lib/pokemonPresenter";
import { PokemonResponse } from "../../../types/pokemonResponse";

export default function PokemonDetail() {
  const pokemonId = location.pathname.split("/")[2];
  const { usePokemonData } = pokemonPresenter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonData, error } = useSWR<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    fetcher
  );

  const { data: pokemonSpeciesData, error: speciesError } =
    useSWR<PokemonDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
      fetcher
    );

  const { pokemonName, pokemonGenus, pokemonFlavorText } =
    usePokemonData(pokemonSpeciesData);

  if (!pokemonData || !pokemonSpeciesData)
    return (
      <div className="flex justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );

  return (
    <div className="p-10">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold flex justify-center text-pokeBlend3">
          {pokemonName}
        </h1>

        <h4 className="text-xl font-semibold flex justify-center text-pokeBlend3 pt-3">
          {pokemonGenus}
        </h4>

        <h6 className="text-lg flex justify-center text-pokeBlend3 pt-5">
          {pokemonFlavorText}
        </h6>
      </div>

      <div className="grid grid-cols-3 mx-40 mt-10 gap-8">
        <MiniCard
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemonData.name}
          label="official_artwork"
        />

        <MiniCard
          src={pokemonData.sprites.other["dream_world"].front_default}
          alt={pokemonData.name}
          label="dream_world"
        />

        <MiniCard
          src={pokemonData.sprites.other["home"].front_default}
          alt={pokemonData.name}
          label="home"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_default
          }
          alt={pokemonData.name}
          label="generation-i.red-blue"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-i"].yellow.front_default
          }
          alt={pokemonData.name}
          label="generation-i.yellow"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-ii"].crystal.front_default
          }
          alt={pokemonData.name}
          label="generation-ii.crystal"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-ii"].silver.front_default
          }
          alt={pokemonData.name}
          label="generation-ii.silver"
        />

        <MiniCard
          src={pokemonData.sprites.versions["generation-ii"].gold.front_default}
          alt={pokemonData.name}
          label="generation-ii.gold"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
              .front_default
          }
          alt={pokemonData.name}
          label="generation-iii.ruby-sapphire"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-iii"]["emerald"]
              .front_default
          }
          alt={pokemonData.name}
          label="generation-iii.emerald"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
              .front_default
          }
          alt={pokemonData.name}
          label="generation-iii.firered-leafgreen"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_default
          }
          alt={pokemonData.name}
          label="generation-iv.diamond-pearl"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-iv"][
              "heartgold-soulsilver"
            ].front_default
          }
          alt={pokemonData.name}
          label="generation-iv.heartgold-soulsilver"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-iv"]["platinum"]
              .front_default
          }
          alt={pokemonData.name}
          label="generation-iv.platinum"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={pokemonData.name}
          label="generation-v.black-white"
        />
        <MiniCard
          src={
            pokemonData.sprites.versions["generation-vi"][
              "omegaruby-alphasapphire"
            ].front_default
          }
          alt={pokemonData.name}
          label="generation-vi.omegaruby-alphasapphire"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-vi"]["x-y"].front_default
          }
          alt={pokemonData.name}
          label="generation-vi.x-y"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-vii"][
              "ultra-sun-ultra-moon"
            ].front_default
          }
          alt={pokemonData.name}
          label="generation-vii.ultra-sun-ultra-moon"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-vii"].icons.front_default
          }
          alt={pokemonData.name}
          label="generation-vii.icons"
        />

        <MiniCard
          src={
            pokemonData.sprites.versions["generation-viii"].icons.front_default
          }
          alt={pokemonData.name}
          label="generation-viii.icons"
        />
      </div>
    </div>
  );
}

type MiniCardProps = {
  src?: string;
  alt: string;
  label: string;
};

const MiniCard = ({ src, alt, label }: MiniCardProps) => {
  return src ? (
    <div className="flex flex-row items-center gap-5">
      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image src={src} alt={alt} loading="eager" fill sizes="150" priority />
      </div>
      <h4 className="text-xl font-bold flex justify-center text-pokeBlend3 pt-3">
        {label}
      </h4>
    </div>
  ) : null;
};
