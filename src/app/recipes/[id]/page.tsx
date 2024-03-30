"use client";

import React from "react";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { useEffect, useState } from "react";
function Page({ params }: { params: { id: string } }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_id == "${params.id}"]{
          title,
          subTitle,
          description,
          "imageUrl": image.asset->url,
          instructions,
          "imageUrls": instructions[].image.asset->url,
          ingredients
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
      {recipes.map((recipe, index) => (
        <div key={index}>
          <div className="mx-auto grid max-w-3xl gap-4 px-4 py-6 lg:gap-8">
            <div className="grid items-start gap-2">
              <h1 className="text-3xl font-bold">{recipe.title}</h1>
              <p className="text-sm text-clTwo text-muted">{recipe.subTitle}</p>
            </div>
            <div className="grid gap-4">
              <Image
                alt="Perfect Chocolate Chip Cookies"
                className="aspect-[2/1] overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                height={320}
                src={`${recipe.imageUrl}`}
                width={640}
              />
              <div className="grid gap-4 text-base leading-loose">
                <h2 className="text-xl font-bold">Description</h2>
                <p>{recipe.description}</p>
              </div>
              <div className="grid gap-4">
                <h2 className="text-xl font-bold">Ingredients</h2>
                {recipe.ingredients.map((items, i) => (
                  <div key={i}>
                    <ul className="grid list-outside list-disc gap-2">
                      <li>{items.instruction}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="grid gap-4">
                <h2 className="text-xl font-bold">Instructions</h2>
                <ol className="grid list-outside list-decimal gap-2">
                  {recipe.instructions.map((items, i) => (
                    <div key={i}>
                      <li>
                        {items.instruction}
                        {recipe.imageUrls[i] && (
                          <Image
                            alt=""
                            className="aspect-[2/1] overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                            height={320}
                            src={recipe.imageUrls[i]}
                            width={640}
                          />
                        )}
                      </li>
                    </div>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Page;
