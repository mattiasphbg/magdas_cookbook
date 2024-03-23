import Link from "next/link";
import { GiCoconuts } from "react-icons/gi";
export default function Header() {
  return (
    <>
      <header className="mb-4 flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="/">
          <GiCoconuts className="h-8 w-8 text-orange-900" />
          <span className="sr-only">Magadas Cockbook</span>
        </Link>
        <nav className="ml-auto flex gap-4 text-black sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/recipes"
          >
            Recipes
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}
