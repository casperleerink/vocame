import client from "../client";
import { gql } from "@apollo/client";
import { image } from "./partials";

export const getVrienden = async () => {
  const result = await client.query({
    query: gql`
      query vriendenQuery {
        Vrienden(id: "vriendenPage") {
          title
          textRaw
        }
      }
    `,
  });
  return result.data;
};
