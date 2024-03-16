import Link from "next/link";

import { Input } from "src/app/components/ui/input";
import { Button } from "src/app/components/ui/button";
import { CardContent, Card, CardHeader } from "src/app/components/ui/card";

import { CreatePost } from "src/app/_components/create-post";
import { api } from "src/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      <div className="grid-rows-[auto 1fr auto] grid min-h-screen w-full gap-px">
        <header className="h-[60px] w-full border-b bg-white shadow-sm dark:bg-gray-950">
          <div className="container flex h-full items-center justify-between px-4">
            <Link className="flex items-center space-x-2" href="#">
              <FlagIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Recipes</span>
            </Link>
            <nav className="hidden items-center space-x-4 text-sm md:flex">
              <Link
                className="font-medium text-gray-900 dark:text-gray-100"
                href="#"
              >
                Breakfast
              </Link>
              <Link
                className="font-medium text-gray-500 dark:text-gray-500"
                href="#"
              >
                Lunch
              </Link>
              <Link
                className="font-medium text-gray-500 dark:text-gray-500"
                href="#"
              >
                Dinner
              </Link>
              <Link
                className="font-medium text-gray-500 dark:text-gray-500"
                href="#"
              >
                Dessert
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                className="text-sm font-medium text-gray-500 dark:text-gray-500"
                href="#"
              >
                Sign in
              </Link>
              <Link
                className="rounded-lg border border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:border-indigo-400 dark:bg-indigo-900 dark:text-indigo-400"
                href="#"
              >
                Sign up
              </Link>
            </div>
          </div>
        </header>
        <main className="flex flex-col gap-4 p-4 md:gap-8">
          <div className="grid md:grid-cols-3 md:gap-4">
            <div className="flex flex-col gap-2 md:col-span-2">
              <h1 className="text-2xl font-bold">Breakfast</h1>
              <p className="text-gray-500 dark:text-gray-500">
                Rise and shine with these delicious breakfast recipes.
              </p>
            </div>
            <form className="flex flex-col gap-2 md:justify-end">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <SearchIcon className="absolute inset-y-0 left-0 z-10 m-1.5 h-5 w-5 text-gray-400 dark:text-gray-600" />
                <Input
                  className="w-[250px] rounded-lg border-0 pl-8 sm:w-[200px]"
                  placeholder="Search for recipes"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Link
              className="overflow-hidden rounded-lg shadow-sm transition-colors hover:shadow-md"
              href="#"
            >
              <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800" />
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-none">
                  Blueberry Pancakes
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Fluffy pancakes filled with juicy blueberries.
                </p>
              </div>
            </Link>
            <Link
              className="overflow-hidden rounded-lg shadow-sm transition-colors hover:shadow-md"
              href="#"
            >
              <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800" />
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-none">
                  Avocado Toast
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Simple and delicious avocado toast with a sprinkle of sea
                  salt.
                </p>
              </div>
            </Link>
            <Link
              className="overflow-hidden rounded-lg shadow-sm transition-colors hover:shadow-md"
              href="#"
            >
              <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800" />
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-none">
                  Belgian Waffles
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Crispy on the outside, light and fluffy on the inside waffles.
                </p>
              </div>
            </Link>
            <Link
              className="overflow-hidden rounded-lg shadow-sm transition-colors hover:shadow-md"
              href="#"
            >
              <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800" />
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-none">
                  Breakfast Burrito
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  A hearty breakfast wrapped in a warm tortilla.
                </p>
              </div>
            </Link>
          </div>
        </main>
        <footer className="grid h-[100px] items-center gap-4 px-4 text-sm dark:text-gray-400 md:grid-cols-2">
          <div className="text-center md:text-left">
            <nav className="flex flex-col items-center space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <Link
                className="text-indigo-600 underline dark:text-indigo-400"
                href="#"
              >
                Home
              </Link>
              <Link className="text-gray-500 dark:text-gray-500" href="#">
                Recipes
              </Link>
              <Link className="text-gray-500 dark:text-gray-500" href="#">
                Contact
              </Link>
            </nav>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              © 2023 Recipes. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-4 md:justify-end">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100"
              href="#"
            >
              Terms
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
