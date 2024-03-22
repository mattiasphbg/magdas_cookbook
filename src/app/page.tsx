import Link from "next/link";

import { api } from "src/trpc/server";
import Image from "next/image";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      <div className="grid-rows-[auto 1fr auto] grid min-h-screen w-full gap-px">
        <main className="flex flex-col gap-4 p-4 md:gap-8">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center space-y-4 px-4 text-center md:flex-row md:space-x-10 md:space-y-0 md:px-6 lg:space-x-20">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Cooking Inspiration
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover new recipes and cooking tips. From quick and easy
                  meals to gourmet dishes.
                </p>
              </div>
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center md:w-[500px] lg:order-last"
                height="400"
                src="https://source.unsplash.com/random/900×700/?food"
                width="600"
              />
            </div>
          </section>
          <section className="w-full border-t py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center sm:grid-cols-2 sm:gap-10 md:px-6 lg:grid-cols-3 lg:gap-6 xl:gap-10">
              <Link
                className="aspect-card overflow-hidden rounded-xl"
                href="/breakfast"
              >
                <Image
                  alt="Breakfast"
                  className="object-cover object-center"
                  height="300"
                  src="https://source.unsplash.com/random/900×700/?breakfast"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-4">
                  <h3 className="font-bold">Breakfast</h3>
                  <p className="text-sm text-gray-500">Start your day right</p>
                </div>
              </Link>
              <Link
                className="aspect-card overflow-hidden rounded-xl"
                href="/lunch"
              >
                <Image
                  alt="Lunch"
                  className="object-cover object-center"
                  height="300"
                  src="https://source.unsplash.com/random/900×700/?Lunch"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-4">
                  <h3 className="font-bold">Lunch</h3>
                  <p className="text-sm text-gray-500">
                    Delicious mid-day meals
                  </p>
                </div>
              </Link>
              <Link
                className="aspect-card overflow-hidden rounded-xl"
                href="/dinner"
              >
                <Image
                  alt="Dinner"
                  className="object-cover object-center"
                  height="300"
                  src="https://source.unsplash.com/random/900×700/?Dinner"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-4">
                  <h3 className="font-bold">Dinner</h3>
                  <p className="text-sm text-gray-500">
                    Family dinner favorites
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
