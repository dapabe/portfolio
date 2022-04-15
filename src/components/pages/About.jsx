export default function About() {
  const ABBR = ({ children, title }) => {
    return (
      <abbr className="no-underline" title={title}>
        {children}
        <sup className="font-sans">(i)</sup>
      </abbr>
    );
  };
  return (
    <section className="bg-1 noMaxWidth  font-bold text-sutilBlack">
      <section className="mx-auto max-w-md space-y-6 rounded bg-whiteCream p-3">
        <h1 className="paragraphTitle text-center underline underline-offset-4">
          como empece
        </h1>
        <p className="mx-auto max-w-md indent-4 tracking-wider">
          Desde pequeño me interesé por las computadoras gracias a eso he podido
          aprender inglés desde muy temprana edad y adentrarme aún más en este
          mundo. <br /> <br /> A los 20 años tuve un "click" por la
          programación, creé mods para juegos y luego me enfoqué en el
          desarrollo web.
        </p>

        <h2 className="paragraphTitle text-center underline underline-offset-4">
          al día de hoy
        </h2>
        <p className="mx-auto max-w-md indent-4 tracking-wider">
          Cuando comencé con las herramientas básicas
          <ABBR title="Hyper Text Markup Language"> HTML</ABBR>,
          <ABBR title="Cascade Style Sheets"> CSS</ABBR> y JavaScript todo
          parecía ir muy lento pero seguro, hasta que conocí framworks como
          ReactJS y NextJS, estos me despertaron la pasión por el desarrollo
          web. <br />
          <br />Y desde ello cada día he querido ir aprendiendo y ampliar más mi
          saber por las nuevas tecnologías que hay, y vendran.
        </p>
      </section>
    </section>
  );
}
