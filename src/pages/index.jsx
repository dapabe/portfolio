import Head from "next/head";

import Hero from "@src/components/interface/sections/home/Hero";
import Projects from "@src/components/interface/sections/home/Projects";
import Techs from "@src/components/interface/sections/home/Technologies";
import Intro from "@src/components/interface/sections/home/Introduction";
import Inspiration from "@src/components/interface/sections/home/Inspiration";
import Contact from "@src/components/interface/sections/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <script
          defer
          type="module"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
      </Head>
      <Hero />
      <Projects />
      <Techs />
      <Intro />
      <Inspiration />
      <Contact />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      translations: (await import(`@src/assets/locales/${locale}.json`))
        .default,
    },
  };
}
