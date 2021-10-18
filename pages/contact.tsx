import type { NextPage } from "next";
import Layout from "../components/Layout";
import { getContact } from "../lib/query/contactQuery";
import BlockContent from "@sanity/block-content-to-react";
import ContactForm from "../components/ContactForm";
const Contact: NextPage = ({ data }: any) => {
  const { title, textRaw } = data.Contact;
  return (
    <Layout
      title={"Contact | Voca Me"}
      description={"Neem contact op met Voca Me"}
    >
      <div className="p-5 md:p-10 w-full flex flex-col md:flex-row justify-between items-center md:space-x-10">
        <div className="w-full py-10">
          <h1 className="text-6xl max-w-screen-2xl pb-5">{title}</h1>
          <BlockContent
            blocks={textRaw}
            renderContainerOnSingleChild
            className="py-2 prose"
          />
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;

export async function getStaticProps() {
  const data = await getContact();

  return {
    props: {
      data,
    },
  };
}
