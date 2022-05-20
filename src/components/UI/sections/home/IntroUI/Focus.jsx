import { ExtLink } from "@utils/text";

const links = [
  "https://webaccesible.xyz/navegacion/teclado/#:~:text=Para%20navegar%20con%20el%20teclado,seleccionar%20o%20activar%20un%20elemento.",
  "https://es.wikipedia.org/wiki/Lector_de_pantalla",
];
const labels = [
  "Link hacia una página que explica como navegar usando solo el teclado.",
  "Link hacia una página que explica que son los lectores de pantalla.",
];
export default function Focus() {
  return (
    <section className="bg-sutilBlack p-8  text-base text-gray-400">
      <h2 className="mb-2 tracking-wider text-white">Enfoques</h2>
      <ul className="intro_list">
        <li>Priorizar el rendimiento.</li>
        <li>
          Aplicar diseños adaptables para diferentes dispositivos y plataformas.
        </li>
        <li>
          Crear interfaces agradables y satisfactorias experiencias de usuario.
        </li>
        <li>
          Adaptar elementos de accesibilidad para personas que navegan con{" "}
          <ExtLink
            href={links[0]}
            className="text-gray-300"
            aria-labelledby={labels[0]}
            title={labels[0]}
          >
            teclado
          </ExtLink>{" "}
          y que utilicen{" "}
          <ExtLink
            href={links[1]}
            className="text-gray-300"
            aria-labelledby={labels[1]}
            title={labels[1]}
          >
            lectores de pantalla
          </ExtLink>
          .
        </li>
      </ul>
    </section>
  );
}
