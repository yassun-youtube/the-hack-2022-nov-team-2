import { PokemonResponse } from "../../schema";
import Image from "next/image";
import { pokemonPresenter } from "../../lib/pokemonPresenter";

export default async function PokemonTop() {
  const { getPokemon } = pokemonPresenter();
  const pikachuData = await getPokemon("pikachu");

  return (
    <div>
      <h1 className="text-3xl">Pokemon</h1>
      <div className="card w-60  shadow-2xl flex items-center bg-yellow-100">
        <div className="relative w-40 h-40 object-fill px-10 pt-10">
          <Image
            src={pikachuData.sprites.other["official-artwork"].front_default}
            alt={pikachuData.name}
            fill
          />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{pikachuData.name}</h2>
          <h3 className="font-semibold">[Types]</h3>
          {pikachuData.types.map((type) => (
            <p>{type.type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
