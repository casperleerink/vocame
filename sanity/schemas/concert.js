export default {
  name: "concert",
  title: "Concert",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Omschrijving",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "bestelLink",
      title: "Bestel kaarten link",
      type: "string",
      description:
        "💡 vul alleen in als kaartenbestelling al kan, anders later weizigen",
    },
  ],
};
