import client from "../client";
import { gql } from "@apollo/client";
import { nieuweLeden, image } from "./partials";

export const getAbout = async () => {
  const result = await client.query({
    query: gql`
      query aboutQuery {
        About(id: "aboutPage") {
          seo {
            title
            description
          }
          dirigentTitle
          dirigentImage {
            ${image}
          }
          dirigentTextRaw
          ledenTitle
          ledenImage {
            ${image}
          }
          ledenTextRaw
        }
        ${nieuweLeden}
      }
    `,
  });

  return result.data;
};
