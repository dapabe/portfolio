import {
  Contact,
  Hero,
  Intro,
  Projects,
  Techs,
  Inspirations,
} from "@ui/HomeSections/exports";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Techs />
      <Projects />
      <Inspirations />
      <Contact />
    </>
  );
}
