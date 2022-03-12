export default function SectionIntro() {
  return (
    <section className={"ml-auto h-max bg-pastelRed mxsm:space-y-4 "}>
      <div className="mx-auto max-w-sm space-y-4 rounded border bg-white/20 py-2 px-4 backdrop-blur-sm sm:my-auto sm:mx-0 sm:p-10">
        <h1 className="text-center text-xl tracking-wide underline decoration-white underline-offset-4 ">
          Daniel Patricio Becerra
        </h1>

        <p>
          Creo experiencias de usuarios tanto memorables como satisfactorias.
          <br />
          Sencillas pero eficases.
        </p>

        <div className="flex flex-col items-end text-sm">
          <h2 className="italic tracking-wide">
            -Desarrollador Front-End <br />y futuro desarrollador Full-Stack.
          </h2>
          <a href="/" className="text-sm underline-offset-2 hover:underline">
            Información a detalle <i className="text-xl">&rarr;</i>
          </a>
        </div>
      </div>
    </section>
  );
}
