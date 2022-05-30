import { Suspense, lazy } from "react";
import { Lines } from "@ui/Fallback.jsx";
import Head from "next/head";
import Script from "next/script";
//  [NOTE]  Can't import relative paths lazily,
//  only absolute paths are accepted.
//  TODO: Look for a refactor
import Hero from "@ui/sections/home/Hero";
import Projects from "@ui/sections/home/Projects";
// const Projects = lazy(() => import("@ui/sections/home/Projects"));
import Techs from "@ui/sections/home/Technologies";
// const Techs = lazy(() => import("@ui/sections/home/Technologies"));
import Intro from "@ui/sections/home/Introduction";
// const Intro = lazy(() => import("@ui/sections/home/Introduction"));
import Inspiration from "@ui/sections/home/Inspiration";
// const Inspiration = lazy(() => import("@ui/sections/home/Inspiration"));
import Contact from "@ui/sections/home/Contact";
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
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          strategy="lazyOnload"
        />
      </Head>
      <Hero />
      <Projects />
      <Techs />
      <Intro />
      <Inspiration />
      {/* {/* <Suspense fallback={<Lines />}> */}
      <Contact />
      {/* </Suspense> */}
    </>
  );
}
