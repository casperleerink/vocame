export default {
  name: "nieuweLeden",
  title: "Nieuwe leden",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "zoekNieuweLeden",
      title: "Zoek nieuwe leden",
      type: "boolean",
    },
  ],
};
