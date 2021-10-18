export default {
  name: "vrienden",
  title: "Vrienden",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
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
