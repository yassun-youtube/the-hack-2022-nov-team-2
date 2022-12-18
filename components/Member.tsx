"use client";
import React from "react";
import { PokemonImage } from "./PokemonImage";



export const Member = () => {

    const members = [
        {
            name : 'kazu',
            url : 'https://github.com/kazu-S-1110',
            pokemonId : '249'
        },
        {
            name : 'shirokuma',
            url : 'https://github.com/neka-nat',
            pokemonId : '614'
        },
        {
            name : 'moguuu_',
            url : 'https://github.com/guuma',
            pokemonId : '25'
        },
        {
            name : 'TAKI',
            url : 'https://github.com/kitaramu0401',
            pokemonId : '448'
        },
        {
            name : 'maeken',
            url : 'https://github.com/maeken6319',
            pokemonId : '835'
        },
    ];

    return (
        <div className="py-10 px-32 ">
            <h1 className="text-3xl font-bold ">
              実装メンバー
            </h1>
            <div className="py-10 px-32 flex flex-row gap-3 flex justify-center ">
                <div className="flex ">

                    {members.map((member) => (
                        <><div className="flex flex-col ">
                            <PokemonImage pokemonId={member.pokemonId} />
                            <a className=" text-2xl text-center font-bold" href={member.url}>{member.name}</a>
                        </div></>
                    ))}
                </div>
            </div>
        </div>
    );
};