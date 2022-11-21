import { PokemonResponse } from "../../schema";
import Image from "next/image";

const getPokemon = async (pokemonName: string): Promise<PokemonResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default async function PokemonTop() {
  const pikachuData = await getPokemon("pikachu");

  return (
    <div>
      <h1 className="text-3xl">Pokemon</h1>
      <Image
        src={pikachuData.sprites.front_default}
        alt={pikachuData.name}
        width={100}
        height={100}
      />
    </div>
  );
}
