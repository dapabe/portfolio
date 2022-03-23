import {
  Contact,
  Hero,
  Intro,
  Projects,
  Techs,
} from "../core-ui/HomeSections/exports";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      {/* <Techs /> */}
      <Projects />
      <Contact />
    </>
  );
}
