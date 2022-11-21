// import React from "react";
// import useSWR, { Key, Fetcher } from "swr";
// import { PokemonResponse } from "../schema";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// type getPokemonPikachu = { pikachu: PokemonResponse };

// export const GetPokemonPikachu = () => {
//   const { data, error } = useSWR(
//     `https://pokeapi.co/api/v2/pokemon?limit=200&offset=200`,
//     fetcher
//   );

//   return <h1>pokemo</h1>;
// };
