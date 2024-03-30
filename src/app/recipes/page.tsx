"use client";

import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";
export default function Page() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'recipe']{
        title,
        _id,
        description,
        subTitle,
        "imageUrl": image.asset->url

      }`,
      )
      .then((recipes) => {
        console.log(recipes);
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error("Error fetching articles", error);
      });
  }, []);
  return (
    <>
      <div className="w-full bg-gray-50/90">
        <header className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-950">
          <div className="container py-3 md:py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold tracking-tighter">
                Recipe List
              </div>
            </div>
          </div>
        </header>
        <main className="py-6 md:py-8">
          <div className="container px-4">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {recipes.map((recipe, index) => (
                <div key={index}>
                  <div className="flex translate-y-0.5 flex-col overflow-hidden rounded-lg shadow-sm transition-transform hover:shadow">
                    <Link
                      className="flex w-full flex-col overflow-hidden hover:scale-105"
                      href={`recipes/${recipe._id}`}
                    >
                      <Image
                        alt="Thumbnail"
                        className="aspect-[1.5] object-cover"
                        height="200"
                        src={`${recipe.imageUrl}`}
                        width="300"
                      />
                      <div className="p-4">
                        <h3 className="line-clamp-2 text-lg font-bold">
                          {recipe.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                          {recipe.subTitle}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
