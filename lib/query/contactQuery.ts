import client from "../client";
import { gql } from "@apollo/client";
import { image } from "./partials";

export const getContact = async () => {
  const result = await client.query({
    query: gql`
      query contactQuery {
        Contact(id: "98cb082d-77fc-40dc-b66b-a47d197e293e") {
          title
          textRaw
        }
      }
    `,
  });

  return result.data;
};
