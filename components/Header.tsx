import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="p-2 flex  row space-x-4 justify-between w-full ">
        <h1 className="text-5xl text-blue-600 font-bold">Poke Blend</h1>

        <ul className="flex items-center justify-end space-x-2">
          <li>
            <button className="btn btn-outline btn-primary glass btn-sm">
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-outline btn-info glass btn-sm">
              <Link href="/about">About</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-outline btn-warning glass btn-sm">
              <Link href="/pokemon">Pokemon</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
