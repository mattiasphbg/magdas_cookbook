"use client";

import React from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";

import { Input } from "src/app/components/ui/input";
import Link from "next/link";

type Meal = {
  title: string;
  _id: string;
  subTitle: string;
  description: string;
  imageUrl: string;
};

export default function BreakfastPage() {
  const [recipes, setRecipes] = useState<Meal[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[meals == "breakfast"]{
          title,
          _id,
          subTitle,
          description,
          "imageUrl": image.asset->url,
        }`,
      )
      .then((recipes: Meal[]) => {
        console.log(recipes);
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error("Error fetching articles", error);
      });
  }, []);

  return (
    <>
      <div className="grid gap-6 lg:gap-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Breakfast Recipes
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Start your day with a delicious breakfast. Browse our collection
              of breakfast recipes to find the perfect dish.
            </p>
            <div className="mt-4.5 w-full max-w-[400px]">
              <Input
                className="w-full border-gray-200 shadow-sm dark:border-gray-800"
                placeholder="Search recipes"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="xl:grid-cols-3xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <div key={index}>
                <Link
                  className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md dark:border-gray-800"
                  href={`recipes/${recipe._id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      alt="Thumbnail"
                      className="h-400 aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                      height="300"
                      src={recipe.imageUrl}
                      width="400"
                    />
                    <div className="bg-rgba-0000/70 absolute inset-0 flex items-center justify-center p-4 text-center transition-colors">
                      <ChevronRightIcon className="h-6 w-6 translate-x-2 text-gray-50 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-xl font-semibold">
                      {recipe.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                      {recipe.subTitle}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
