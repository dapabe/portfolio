import { ExtLink, AbbrLang } from "@utils/text";

export default function About() {
  return (
    <section className="about noMaxWidth">
      <section className="mx-auto mt-10 max-w-[75ch] space-y-6 px-4">
        <h1 className="paragraphTitle text-center underline underline-offset-4">
          COMO EMPECE
        </h1>
        <p>
          Mi interés por la programación proviene desde el primer contacto que
          tuve con una computadora, me pregunté como es que funcionaban las
          herramientas y programas en ella. <br /> <br />
          Gracias a mis estudios y el aprender el idioma Inglés pude comprender
          como eran posibles estas máquinas, ya que mucha de esta información
          existe en ese lenguaje.
          <br />
          <br />A mis 20 años tuve interés en crear modificaciones para juegos y
          comprendí como funcionaba la{" "}
          <ExtLink
            href="https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos"
            title="Ir a la definición de que es OOP"
          >
            <abbr title="Object-oriented programming">OOP</abbr>
          </ExtLink>
          ; programación orientada a objetos.
        </p>
        <h2 className="paragraphTitle text-center underline underline-offset-4">
          AL DÍA DE HOY
        </h2>
        <p>
          Deje a un lado mi{" "}
          <AbbrLang title="Afición u ocupación">hobby</AbbrLang> de crear{" "}
          <AbbrLang title="Modificaciones">mods</AbbrLang> para juegos y me
          especialice en el desarrollo web. <br />
          Al dominar <abbr title="Hyper Text Markup Language">HTML</abbr>,{" "}
          <abbr title="Cascade Style Sheets">CSS</abbr> y JavaScript, decidí
          investigar que herramientas de desarrollo web o{" "}
          <AbbrLang title="Marcos de trabajo">frameworks</AbbrLang> eran los más
          utilizados, así es como me enfoque en{" "}
          <ExtLink href="https://es.reactjs.org/">React.JS</ExtLink> y{" "}
          <ExtLink href="https://nextjs.org/">NEXT.JS</ExtLink>.
          <br />
          <br />
          Ahora estoy en camino de dominar estos y aprender más lenguajes, y
          frameworks ampliando más mi conocimiento junto con otras herramientas
          de diseño.
          <br /> <br />
          Siguiente objetivo:{" "}
          <ExtLink href="https://angularjs.org/">Angular.JS</ExtLink>
        </p>
      </section>
    </section>
  );
}
