export default {
  name: "seo",
  title: "Seo",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Pagina titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Pagina omschrijving",
      type: "text",
    },
  ],
};
