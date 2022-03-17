// import { ReactComponent as ArrowUp } from "../../assets/images/ion_arrow-up.svg";
export default function Footer() {
  return (
    <footer>
      <div>
        <h1 className="mb-2 underline underline-offset-2">
          ¿Quieres contactarme?
        </h1>
        <ul className="ml-2 space-y-0.5">
          <li className="w-max hover:underline">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="w-max hover:underline">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
      <a
        href="#root"
        title="Ir hacia arriba"
        className="mxsm:absolute mxsm:right-12 mxsm:top-1/4"
      >
        {/* <ArrowUp className="h-20 w-min" /> */}
      </a>
      <div>
        <h1 className="mb-2 underline underline-offset-2">
          Mis redes sociales
        </h1>
        <ul className="sm:flex sm:flex-col sm:items-end mxsm:ml-2">
          <li className="w-max hover:underline">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li className="w-max hover:underline">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
