export default {
  name: "about",
  title: "Ons Koor",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "seo",
      title: "Search Engine Optimization",
      type: "seo",
    },
    {
      name: "dirigentTitle",
      title: "Dirigent Naam",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dirigentImage",
      title: "Dirigent Foto",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dirigentText",
      title: "Dirigent text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ledenTitle",
      title: "Leden Titel",
      type: "string",
    },
    {
      name: "ledenImage",
      title: "Leden Foto",
      type: "image",
    },
    {
      name: "ledenText",
      title: "Leden text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
