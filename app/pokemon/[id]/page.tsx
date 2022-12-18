'use client';

import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { PokemonDetailResponse } from '../../../types/pokemonDetailResponse';
import Image from 'next/image';

export default function PokemonDetail() {
  const pokemonId = location.pathname.split('/')[2];
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: pokemonDetailData, error: detailError } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    fetcher
  );

  if (pokemonDetailData == null) return;
  return (
    <div className="flex flex-row gap-3">
      <div className="relative w-40 h-40 object-fill px-10 pt-10">
        <Image
          src={pokemonDetailData.sprites.other['official-artwork'].front_default}
          alt={pokemonDetailData.name}
          loading="eager"
          fill
          sizes="150"
          priority
        />
      </div>

      {pokemonDetailData.sprites.other['dream_world'].front_default && (
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonDetailData.sprites.other['dream_world'].front_default ?? ''}
            alt={pokemonDetailData.name}
            loading="eager"
            fill
            sizes="150"
            priority
          />
        </div>
      )}

      {pokemonDetailData.sprites.versions['generation-ii'].crystal.front_default && (
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonDetailData.sprites.versions['generation-ii'].crystal.front_default}
            alt={pokemonDetailData.name}
            loading="eager"
            fill
            sizes="150"
            priority
          />
        </div>
      )}

      {pokemonDetailData.sprites.versions['generation-iii']['ruby-sapphire'].front_default && (
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonDetailData.sprites.versions['generation-iii']['ruby-sapphire'].front_default}
            alt={pokemonDetailData.name}
            loading="eager"
            fill
            sizes="150"
          />
        </div>
      )}

      {pokemonDetailData.sprites.versions['generation-iv']['diamond-pearl'].front_default && (
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonDetailData.sprites.versions['generation-iv']['diamond-pearl'].front_default}
            alt={pokemonDetailData.name}
            loading="eager"
            fill
            sizes="150"
          />
        </div>
      )}

      {pokemonDetailData.sprites.versions['generation-v']['black-white'].animated.front_default && (
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonDetailData.sprites.versions['generation-v']['black-white'].animated.front_default}
            alt={pokemonDetailData.name}
            loading="eager"
            fill
            sizes="150"
          />
        </div>
      )}

      {pokemonDetailData.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default && (
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pokemonDetailData.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default}
            alt={pokemonDetailData.name}
            loading="eager"
            fill
            sizes="150"
          />
        </div>
      )}
    </div>
  );
}
