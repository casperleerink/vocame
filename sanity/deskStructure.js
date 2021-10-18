import S from "@sanity/desk-tool/structure-builder";

export default () =>
  // S.list()
  //   .title("Content")
  //   .items([
  //     S.listItem()
  //       .title("Ons koor")
  //       .child(S.document().schemaType("about").documentId("aboutPage")),
  //     S.listItem()
  //       .title("Home")
  //       .child(S.document().schemaType("home").documentId("homePage")),
  //     S.listItem()
  //       .title("Zoek Nieuwe Leden")
  //       .child(
  //         S.document()
  //           .schemaType("nieuweLeden")
  //           .documentId("26c3eb5f-ab87-46c1-89ff-9ed7fc46c8e3")
  //       ),
  //     S.listItem()
  //       .title("Meezingen")
  //       .child(
  //         S.document().schemaType("meezingen").documentId("meezingenPage")
  //       ),
  //     S.listItem()
  //       .title("Vrienden")
  //       .child(S.document().schemaType("vrienden").documentId("vriendenPage")),
  //     ...S.documentTypeListItems().filter(
  //       (listItem) =>
  //         !["about", "home", "nieuweLeden", "meezingen", "vrienden"].includes(
  //           listItem.getId()
  //         )
  //     ),
  //   ]);
  S.list()
    .title("Content")
    .items([...S.documentTypeListItems()]);
