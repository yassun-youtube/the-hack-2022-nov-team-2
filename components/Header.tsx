import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <nav className="p-2 flex  row space-x-4 justify-between w-full bg-pokeBlend4">
        <h1 className="text-5xl text-pokeBlend2 font-bold flex items-center">
          P
          <Image src="/PokeBall.svg" alt={"ball"} width={40} height={40} />
          KE BLEND
        </h1>

        <ul className="flex items-center justify-end space-x-2">
          <li>
            <button className="btn  bg-pokeBlend3  btn-sm">
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className="btn bg-pokeBlend3 btn-sm">
              <Link href="/about">About</Link>
            </button>
          </li>
          {/* <li>
            <button className="btn bg-pokeBlend3 btn-sm">
              <Link href="/pokemon">Pokemon</Link>
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
