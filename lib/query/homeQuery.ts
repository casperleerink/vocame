import client from "../client";
import { gql } from "@apollo/client";
import { nieuweLeden, image } from "./partials";

export const getHome = async () => {
  const result = await client.query({
    query: gql`
      query homeQuery {
        Home(id: "homePage") {
          seo {
            title
            description
          }
          heroTitle
          heroSubtitle
          background {
            ${image}
          }
        }
        ${nieuweLeden}
      }
    `,
  });

  return result.data;
};
