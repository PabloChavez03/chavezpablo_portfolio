import Layout from "../components/Layout";
import SobreMi from "../components/SobreMi/SobreMi";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Layout title={"Sobre mi"}>
        <SobreMi />
      </Layout>
    </div>
  );
}
