import type { NextPage } from "next";
import Layout from "../components/Layout";
import NieuwConcert from "../components/NieuwConcert";
import { getConcerten } from "../lib/query/concertenQuery";

const Concerten: NextPage = ({ data }: any) => {
  const concerten = data.allConcert;
  console.log(concerten);
  return (
    <Layout
      title={"Concerten | Voca Me"}
      description={"Bekijk de concerten van projectkoort Voca Me"}
    >
      <div className="p-5 md:p-10">
        {concerten.map((c) => {
          const date = new Date(c.date);
          if (date > new Date()) {
            return <NieuwConcert concert={c} key={c._id} />;
          } else {
            return <OudConcert concert={c} key={c._id} />;
          }
        })}
      </div>
    </Layout>
  );
};

export default Concerten;

export async function getStaticProps() {
  const data = await getConcerten();

  return {
    props: {
      data,
    },
  };
}
