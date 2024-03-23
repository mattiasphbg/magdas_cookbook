import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-4 flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Magdas Cockbook. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#"
          ></Link>
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#"
          ></Link>
        </nav>
      </footer>
    </>
  );
}
