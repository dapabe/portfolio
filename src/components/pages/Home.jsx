import { slowImport } from "@utils/common";
import { Suspense, lazy } from "react";
import { Lines } from "@fallback";

//  [NOTE]  Can't import relative paths lazily,
//  only absolute paths are accepted.
//  TODO: Look for a refactor
import Hero from "@ui/sections/home/Hero";
const Intro = lazy(() => import("@ui/sections/home/Introduction"));
const Techs = lazy(() => import("@ui/sections/home/Technologies"));
const Projects = lazy(() => import("@ui/sections/home/Projects"));
const Inspiration = lazy(() => import("@ui/sections/home/Inspiration"));
const Contact = lazy(() => import("@ui/sections/home/Contact"));

// function SuspendedComponents() {
//   return sections.map((section, i) => (
//     <LoadElement key={i} component={section} />
//   ));
// }
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Lines />}>
        <Intro />
        <Techs />
        <Projects />
        <Inspiration />
        <Contact />
      </Suspense>
    </>
  );
}
