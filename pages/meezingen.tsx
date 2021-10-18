import type { NextPage } from "next";
import Layout from "../components/Layout";
import Yt from "../assets/img/yt-nicolai.jpg";
import LedenCTA from "../components/LedenCTA";
import Dirigent from "../components/Dirigent";
import Leden from "../components/Leden";
import LedenFoto from "../assets/img/koor-leden.jpg";
import { getMeezingen } from "../lib/query/meezingenQuery";
import BlockContent from "@sanity/block-content-to-react";
const Meezingen: NextPage = ({ data }: any) => {
  const { title, image, textRaw } = data.Meezingen;
  return (
    <Layout
      title="Meezingen | Voca Me"
      description="Vrouwenkamerkoor Voca Me is een ambitieus vrouwenkoor voor zangeressen met koorervaring en/of zangles uit Overijssel en omstreken."
    >
      <div className="py-10 px-10">
        <h1 className="text-6xl max-w-screen-2xl pb-5">{title}</h1>
        <BlockContent
          blocks={textRaw}
          renderContainerOnSingleChild
          className="py-2 prose"
        />
      </div>
    </Layout>
  );
};

export default Meezingen;

export async function getStaticProps() {
  const data = await getMeezingen();

  return {
    props: {
      data,
    },
  };
}
