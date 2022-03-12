import {
  Contact,
  Hero,
  Intro,
  Projects,
  Techs,
} from "../core-ui/HomeSections/exports";

export default function Home() {
  return (
    <section>
      <Hero />
      <Intro />
      {/* <Techs /> */}
      <Projects />
      <Contact />
    </section>
  );
}
