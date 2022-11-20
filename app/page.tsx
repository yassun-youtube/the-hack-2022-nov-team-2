import { Fragment } from "react";
import { GetPokemonPikachu } from "../lib/getPokemon";

export default function Page() {
  return (
    <Fragment>
      <button className="btn btn-primary">daisyUi button</button>;
      <GetPokemonPikachu />
    </Fragment>
  );
}
