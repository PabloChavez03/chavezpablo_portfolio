import Layout from "../components/Layout";
import Contactame from "../components/Contactame";
import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Layout title={"Contáctame"}>
        <Contactame />
      </Layout>
    </div>
  );
}
