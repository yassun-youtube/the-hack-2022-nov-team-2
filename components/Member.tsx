"use client";

import React from "react";
import { PokemonImage } from "./PokemonImage";

type MemberType = {
  id: number;
  name: string;
  url: string;
  pokemonId: string;
};

export const Member = () => {
  const members: MemberType[] = [
    {
      id: 0,
      name: "kazu",
      url: "https://github.com/kazu-S-1110",
      pokemonId: "249",
    },
    {
      id: 1,
      name: "shirokuma",
      url: "https://github.com/neka-nat",
      pokemonId: "614",
    },
    {
      id: 2,
      name: "moguuu_",
      url: "https://github.com/guuma",
      pokemonId: "25",
    },
    {
      id: 3,
      name: "TAKI",
      url: "https://github.com/kitaramu0401",
      pokemonId: "448",
    },
    {
      id: 4,
      name: "maeken",
      url: "https://github.com/maeken6319",
      pokemonId: "835",
    },
  ];

  return (
    <div className="py-10 px-32">
      <h1 className="text-3xl font-bold text-center text-pokeBlend1">
        実装メンバー
      </h1>
      <div className="py-10 px-32 flex flex-row gap-3 justify-center">
        <div className="flex gap-3">
          {members.map((member) => (
            <div className="flex flex-col" key={member.id}>
              <a
                className=" text-2xl text-center font-bold text-pokeBlend3"
                href={member.url}
              >
                <PokemonImage pokemonId={member.pokemonId} />
                {member.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
