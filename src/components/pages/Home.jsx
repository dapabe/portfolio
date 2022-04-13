import { LoadElement, load, SimDelay } from "@utils/common";
import { lazy } from "react";

//  [NOTE]  Can't import relative paths lazily,
//  only absolute paths are accepted.
//  TODO: Look for a refactor
import Hero from "@ui/sections/home/Hero";
const Intro = lazy(() => import("@ui/sections/home/Introduction"));
// const Intro = SimDelay("@ui/sections/home/Section");
const Techs = lazy(() => import("@ui/sections/home/Technologies"));
const Projects = lazy(() => import("@ui/sections/home/Projects"));
const Inspirations = lazy(() => import("@ui/sections/home/Inspirations"));
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
      <LoadElement>
        <Intro />
        <Techs />
        <Projects />
        <Inspirations />
        <Contact />
      </LoadElement>
    </>
  );
}
