export default {
  name: "home",
  title: "Home",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "seo",
      title: "Search Engine Optimization",
      type: "seo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroTitle",
      title: "Hero Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "text",
    },
    {
      name: "background",
      title: "Achtergrond",
      type: "image",
    },
  ],
};
