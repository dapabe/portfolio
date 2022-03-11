import SectionTechs, {
  SectionContact,
  SectionHero,
  SectionIntro,
} from "../content/HomeSections";

export default function Home() {
  return (
    <section>
      <SectionHero />
      <SectionIntro />
      <SectionTechs />
      <SectionProjects />
      <SectionContact />
    </section>
  );
}
