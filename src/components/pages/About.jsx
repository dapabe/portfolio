import { ExtLink, AbbrLang } from "@utils/text";

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
          <br />A mis 20 años tuve un "clic" por la programación, creé{" "}
          <AbbrLang title="Modificaciones">mods</AbbrLang> para juegos, por
          ejemplo{" "}
          <ExtLink href="https://steamcommunity.com/sharedfiles/filedetails/?id=2380720925">
            Starbound
          </ExtLink>
          , y luego me enfoqué en el desarrollo web.
        </p>

        <h2 className="paragraphTitle text-center underline underline-offset-4">
          al día de hoy
        </h2>
        <p>
          Cuando comencé con las herramientas básicas{" "}
          <abbr title="Hyper Text Markup Language">HTML</abbr>,{" "}
          <abbr title="Cascade Style Sheets">CSS</abbr> y JavaScript todo
          parecía ir muy lento, pero seguro, hasta que conocí{" "}
          <AbbrLang title="Marcos de trabajo">frameworks</AbbrLang> como{" "}
          <ExtLink href="https://es.reactjs.org/">React.JS</ExtLink> y{" "}
          <ExtLink href="https://nextjs.org/">NEXT.JS</ExtLink>
          , estos me despertaron la pasión por el desarrollo web.
          <br />
          <br />Y desde ello cada día he querido ir aprendiendo y ampliar más mi
          saber por las nuevas tecnologías que existen, y que existirán.
        </p>
      </section>
    </section>
  );
}
