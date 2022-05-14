import { ExtLink } from "@utils/text";

const links = [
  "https://webaccesible.xyz/navegacion/teclado/#:~:text=Para%20navegar%20con%20el%20teclado,seleccionar%20o%20activar%20un%20elemento.",
  "https://es.wikipedia.org/wiki/Lector_de_pantalla",
];

export default function Focus() {
  return (
    <div className="intro_focus">
      <h2 className="mb-2 tracking-wider text-white">Enfoques</h2>
      <ul className="intro_list">
        <li>Priorizar el rendimiento.</li>
        <li>Diseño adaptable para diferentes dispositivos y plataformas.</li>
        <li>Crear agradables interfaces y experiencias de usuario.</li>
        <li>
          <dfn>Accesibilidad</dfn> ;{" "}
          <ExtLink href={links[0]}>Navegación por teclado</ExtLink> y{" "}
          <ExtLink href={links[1]}>lectores de pantalla</ExtLink>.
        </li>
      </ul>
    </div>
  );
}
