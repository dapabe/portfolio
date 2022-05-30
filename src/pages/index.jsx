import Head from "next/head";

//  TODO: Look for a refactor for suspended components
import Hero from "@ui/sections/home/Hero";
import Projects from "@ui/sections/home/Projects";
import Techs from "@ui/sections/home/Technologies";
import Intro from "@ui/sections/home/Introduction";
import Inspiration from "@ui/sections/home/Inspiration";
import Contact from "@ui/sections/home/Contact";

// const Projects = lazy(() => import("@ui/sections/home/Projects"));
// const Techs = lazy(() => import("@ui/sections/home/Technologies"));
// const Intro = lazy(() => import("@ui/sections/home/Introduction"));
// const Inspiration = lazy(() => import("@ui/sections/home/Inspiration"));
// const Contact = lazy(() => import("@ui/sections/home/Contact"));

// function SuspendedComponents() {
//   return sections.map((section, i) => (
//     <LoadElement key={i} component={section} />
//   ));
// }
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
