import client from "../client";
import { gql } from "@apollo/client";
import { image } from "./partials";

export const getConcerten = async () => {
  const result = await client.query({
    query: gql`
      query concertenQuery {
        allConcert {
          _id
          title
          textRaw
          date
          image {
            ${image}
          }
          bestelLink
        }
      }
    `,
  });

  return result.data;
};
