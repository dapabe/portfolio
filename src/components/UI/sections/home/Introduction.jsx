import ShortAbout from "./IntroUI/ShortAbout";
import Focus from "./IntroUI/Focus";

export default function SectionIntro() {
  return (
    <section className="introSection noMaxWidth">
      <ShortAbout />
      <Focus />
    </section>
  );
}
