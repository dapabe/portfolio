import { useState } from "react";
import { ReactComponent as CSS3 } from "/images/icon_css3.svg";
import { ReactComponent as HTML5 } from "/images/icon_html5.svg";
import { ReactComponent as JAVASCRIPT } from "/images/icon_javascript.svg";
import { ReactComponent as MONGODB } from "/images/icon_mongodb.svg";
import { ReactComponent as MYSQL } from "/images/icon_mysql.svg";
import { ReactComponent as NEXTJS } from "/images/icon_nextjs.svg";
import { ReactComponent as NODEJS } from "/images/icon_nodejs.svg";
import { ReactComponent as REACTJS } from "/images/icon_react.svg";
import { ReactComponent as TAILWINDCSS } from "/images/icon_tailwindcss.svg";
import placeholder from "/images/placeholder.jpg";

import { Carousel, CustomCard } from "./1-MicroComponents";

export function SectionHero() {
  return (
    <section className={" flex h-[90vh] flex-col items-center justify-center"}>
      <h1
        id="hero-text"
        className="relative z-0 
      bg-clip-text text-7xl leading-snug sm:text-9xl sm:leading-tight sm:tracking-widest"
      >
        dapabe
      </h1>
    </section>
  );
}
export function SectionIntro() {
  return (
    <section className={"mxsm:space-y-4 bg-pastelRed ml-auto h-max "}>
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

export function SectionTechs() {
  const [pause, setPause] = useState(false);
  const pauseAnim = () => {
    setPause(!pause);
  };
  let techClasses = "h-20 w-[200px]";
  return (
    <section className="bg-sutilBlack flex w-full flex-col py-9">
      <h1 className="relative ml-8 w-max after:absolute after:top-full after:left-0 after:h-1 after:w-full after:bg-white after:content-['']">
        Tecnologias que uso
      </h1>
      <div className="relative h-max w-full">
        <Carousel fn={pauseAnim} state={pause}>
          <HTML5 className={techClasses} />
          <CSS3 className={techClasses} />
          <JAVASCRIPT className={techClasses} />
          <REACTJS className={techClasses} />
          <NEXTJS className={techClasses} />
          <NODEJS className={techClasses} />
          <TAILWINDCSS className={techClasses} />
          <MYSQL className={techClasses} />
          <MONGODB className={techClasses} />
          <HTML5 className={techClasses} />
          <CSS3 className={techClasses} />
          <JAVASCRIPT className={techClasses} />
          <REACTJS className={techClasses} />
          <NEXTJS className={techClasses} />
          <NODEJS className={techClasses} />
          <TAILWINDCSS className={techClasses} />
          <MYSQL className={techClasses} />
          <MONGODB className={techClasses} />
        </Carousel>
      </div>
      <span className="self-end text-slate-300 sm:mr-10">
        - Siempre aprendiendo tecnologias solicitadas en el mercado.
      </span>
    </section>
  );
}

export function SectionProjects() {
  const pro = [
    {
      link: "www.fake.com",
      image: placeholder,
      alt: "Placeholder",
      title: "Animales en peligro",
      description: "lorem*20",
    },
  ];
  const mappedProjects = () => {
    return pro.map((val) => {
      return (
        <CustomCard
          key={val.link}
          link={val.link}
          image={val.image}
          alt={val.alt}
          title={val.title}
          description={val.description}
        />
      );
    });
  };
  return <section className="mosaicBg h-[90vh]">{mappedProjects()}</section>;
}

export function SectionContact() {
  return (
    <section className={"h-[90vh]"}>
      <form action=""></form>
    </section>
  );
}
