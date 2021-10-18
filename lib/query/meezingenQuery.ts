import client from "../client";
import { gql } from "@apollo/client";
import { image } from "./partials";

export const getMeezingen = async () => {
  const result = await client.query({
    query: gql`
      query meezingenQuery {
        Meezingen(id: "4edaf8a1-54f4-4a04-93e2-c06807835789") {
          title
          image {
            ${image}
          }
          textRaw
        }
      }
    `,
  });

  return result.data;
};
