import Head from "next/head";

import Hero from "@ui/sections/home/Hero";
import Projects from "@ui/sections/home/Projects";
import Techs from "@ui/sections/home/Technologies";
import Intro from "@ui/sections/home/Introduction";
import Inspiration from "@ui/sections/home/Inspiration";
import Contact from "@ui/sections/home/Contact";

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
      translations: (await import(`@src/assets/locales/${locale}.json`)).default
    },
  };
}
