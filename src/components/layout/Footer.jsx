// import { ReactComponent as ArrowUp } from "../../assets/images/ion_arrow-up.svg";
export default function Footer() {
  return (
    <footer className="bg-sutilBlack mxsm:space-y-3 relative z-[1] h-56 w-full justify-between p-4 text-sm text-slate-300 shadow-inner shadow-slate-700 sm:flex">
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
        <ul className="mxsm:ml-2 sm:flex sm:flex-col sm:items-end">
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
