import Layout from "../components/Layout";
import SobreMi from "../components/SobreMi/SobreMi";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Sobre mí</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logopc.png" />
      </Head>
      <Layout>
        <SobreMi />
      </Layout>
    </div>
  );
}
