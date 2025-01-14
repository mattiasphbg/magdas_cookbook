import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: "recipe",
      name: "recipe",
      type: "document",
      fields: [
        {
          title: "title",
          name: "title",
          type: "string",
        },
        {
          title: "subtitle",
          name: "subTitle",
          type: "string",
        },
        { title: "description", name: "description", type: "string" },
        { title: "Image", name: "image", type: "image" },
        {
          title: "Meals",
          name: "meals",
          type: "string",
          options: {
            list: ["breakfast", "lunch", "dinner"],
          },
        },
        {
          title: "ingredients",
          name: "ingredients",
          type: "array",
          of: [
            {
              title: "item",
              name: "item",
              type: "object",
              fields: [
                {
                  title: "Instruction",
                  name: "instruction",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          title: "Instructions",
          name: "instructions",
          type: "array",
          of: [
            {
              title: "Step",
              name: "step",
              type: "object",
              fields: [
                {
                  title: "Step Number",
                  name: "stepNumber",
                  type: "number",
                },
                {
                  title: "Instruction",
                  name: "instruction",
                  type: "text",
                },
                {
                  title: "Image (optional)",
                  name: "image",
                  type: "image",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
