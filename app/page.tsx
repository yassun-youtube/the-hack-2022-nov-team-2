import { LogoAnimation } from "../components/LogoAnimation";
import { PokemonContainer } from "../components/PokemonContainer";

export default async function Page() {
  return (
    <div>
      <LogoAnimation />
      <PokemonContainer />
    </div>
  );
}
