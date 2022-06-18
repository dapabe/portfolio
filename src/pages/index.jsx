import Head from "next/head";
import componentMapper from "@src/components/HOC/componentMapper";

import Hero from "@ui/sections/home/Hero";
import Projects from "@ui/sections/home/Projects";
import Techs from "@ui/sections/home/Technologies";
import Intro from "@ui/sections/home/Introduction";
import Inspiration from "@ui/sections/home/Inspiration";
import Contact from "@ui/sections/home/Contact";

const sections = [
  <Hero />,
  <Projects />,
  <Techs />,
  <Intro />,
  <Inspiration />,
  <Contact />,
];

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
      {componentMapper(sections)}
    </>
  );
}
