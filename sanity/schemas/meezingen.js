export default {
  name: "meezingen",
  title: "Meezingen",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Tekst",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
