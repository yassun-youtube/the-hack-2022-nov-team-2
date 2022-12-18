import { LogoAnimation } from "../components/LogoAnimation";
import { PokemonCardContainer } from "../components/PokemonCardContainer";

export default async function Page() {
  return (
    <div>
      <LogoAnimation />
      <PokemonCardContainer />
    </div>
  );
}
