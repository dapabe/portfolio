import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section className="about noMaxWidth ">
      <section className="mx-auto mt-10 max-w-xl space-y-6">
        <h1 className="paragraphTitle text-center underline underline-offset-4">
          como empece
        </h1>
        <p>
          Desde pequeño me interesé por las computadoras gracias a eso he podido
          aprender inglés desde muy temprana edad y adentrarme aún más en este
          mundo.
          <br />
          <br />A los 20 años tuve un "click" por la programación, creé mods
          para juegos, por ejemplo{" "}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=2380720925"
            target="_blank"
            rel="noopener noreferrer"
          >
            Starbound
            <ExternalLinkIcon className="inline w-5" />
          </a>
          , y luego me enfoqué en el desarrollo web.
        </p>

        <h2 className="paragraphTitle text-center underline underline-offset-4">
          al día de hoy
        </h2>
        <p>
          Cuando comencé con las herramientas básicas{" "}
          <abbr title="Hyper Text Markup Language">HTML</abbr>,{" "}
          <abbr title="Cascade Style Sheets">CSS</abbr> y JavaScript todo
          parecía ir muy lento pero seguro, hasta que conocí framworks como
          ReactJS y NextJS, estos me despertaron la pasión por el desarrollo
          web.
          <br />
          <br />Y desde ello cada día he querido ir aprendiendo y ampliar más mi
          saber por las nuevas tecnologías que hay, y vendran.
        </p>
      </section>
    </section>
  );
}
