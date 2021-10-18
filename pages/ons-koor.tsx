import type { NextPage } from "next";
import Layout from "../components/Layout";
import LedenCTA from "../components/LedenCTA";
import Dirigent from "../components/Dirigent";
import Leden from "../components/Leden";
import { getAbout } from "../lib/query/aboutQuery";
const OnsKoor: NextPage = ({ data }: any) => {
  const {
    seo,
    dirigentTitle,
    dirigentImage,
    dirigentTextRaw,
    ledenTitle,
    ledenTextRaw,
    ledenImage,
  } = data.About;
  const { zoekNieuweLeden } = data.NieuweLeden;
  return (
    <Layout title={seo.title} description={seo.description}>
      <h1 className="text-6xl py-10 px-10 max-w-screen-2xl">Ons Koor</h1>
      <Dirigent
        title={dirigentTitle}
        text={dirigentTextRaw}
        image={dirigentImage}
      />
      {zoekNieuweLeden && (
        <LedenCTA
          text={"Wij zijn opzoek naar nieuwe leden! Lijkt je dit wat?"}
          button={{ text: "Lees hier meer", url: "/meezingen" }}
        />
      )}
      <Leden title={ledenTitle} text={ledenTextRaw} image={ledenImage} />
    </Layout>
  );
};

export default OnsKoor;

export async function getStaticProps() {
  const data = await getAbout();

  return {
    props: {
      data,
    },
  };
}
