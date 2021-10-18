import type { NextPage } from "next";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import LedenCTA from "../components/LedenCTA";
import NieuwsItem from "../components/NieuwsItem";
import { getHome } from "../lib/query/homeQuery";

const Home: NextPage = ({ data }: any) => {
  // const { seo, hero, ledenCTA } = data.getPagesDocument.values;
  const { seo, heroTitle, heroSubtitle, background } = data.Home;
  console.log(data.NieuweLeden);
  return (
    <Layout title={seo.title} description={seo.description} overImage={true}>
      <Hero
        image={{ url: background.asset.url, alt: background.asset.url }}
        title={heroTitle}
        subtitle={heroSubtitle}
        button={{ text: "Aanstaande concerten", url: "/concerten" }}
      />
      {data.NieuweLeden.zoekNieuweLeden && (
        <LedenCTA
          text={"Wij zijn opzoek naar nieuwe leden! Lijkt je dit wat?"}
          button={{ text: "Lees hier meer", url: "/meezingen" }}
        />
      )}
      <section className="w-full max-w-screen-2xl px-10 py-10">
        <h1 className="text-6xl pb-10">Nieuws</h1>
        <div>
          <NieuwsItem
            title="Voca Me gaat door als Projectkoor"
            content="Voca Me gaat vanaf 10 oktober verder als Projectkoor Voca Me! Op 10 oktober is ons laatste concert als vrouwenkamerkoor. Meer informatie hier. Daarna gaan we zingen in projecten, natuurlijk onder leiding van Yt Nicolai, waarin we zeer divers repetoire ten gehore zullen brengen. Ons eerste project is: Messiah van Händel, 23 januari 2022, in de Bergkerk in Deventer! Ruth Houtman en haar fantastische barokensemble: Capella di San Giovanni zorgen voor de muzikale begeleiding. Solisten zijn: Heleen Koele: Sopraan; David van Laar: Altus; Twan van der Wolde: Tenor; Roele Kok: Bas. We zoeken hiervoor mannen en vrouwen met een geoefende zangstem en koorervaring. Belangstellenden die auditie willen doen kunnen een mail sturen naar: info@vocame.nl.  We repeteren in november (3, 10, 17 en 24) en december (8, 15, 22). In januari 2022 is er een repetitieweekend op 8 en 9 januari. 19 januari repeteren we in de Bergkerk en de Generale repetitie is 22 januari."
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getHome();

  return {
    props: {
      data,
    },
  };
}
