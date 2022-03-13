// import { ReactComponent as CSS3 } from "/icons/icon_css3.svg";
// import { ReactComponent as HTML5 } from "/icons/icon_html5.svg";
// import { ReactComponent as JAVASCRIPT } from "/icons/icon_javascript.svg";
// import { ReactComponent as MONGODB } from "/icons/icon_mongodb.svg";
// import { ReactComponent as MYSQL } from "/icons/icon_mysql.svg";
// import { ReactComponent as NEXTJS } from "/icons/icon_nextjs.svg";
// import { ReactComponent as NODEJS } from "/icons/icon_nodejs.svg";
// import { ReactComponent as REACTJS } from "/icons/icon_react.svg";
// import { ReactComponent as TAILWINDCSS } from "/icons/icon_tailwindcss.svg";
import Carousel from "../Minis/Carousel";

export default function SectionTechs() {
  const [pause, setPause] = useState(false);
  const handlePause = () => {
    setPause(!pause);
  };
  let techClasses = "h-20 w-[200px]";
  return (
    <section className="flex w-full flex-col bg-sutilBlack py-9">
      <h1 className="relative ml-8 w-max after:absolute after:top-full after:left-0 after:h-1 after:w-full after:bg-white after:content-['']">
        Tecnologias que uso
      </h1>
      <div className="relative h-max w-full">
        <Carousel fn={handlePause} state={pause}>
          <HTML5 className={techClasses} />
          <CSS3 className={techClasses} />
          <JAVASCRIPT className={techClasses} />
          <REACTJS className={techClasses} />
          <NEXTJS className={techClasses} />
          <NODEJS className={techClasses} />
          <TAILWINDCSS className={techClasses} />
          <MYSQL className={techClasses} />
          <MONGODB className={techClasses} />
          {/* <HTML5 className={techClasses} />
          <CSS3 className={techClasses} />
          <JAVASCRIPT className={techClasses} />
          <REACTJS className={techClasses} />
          <NEXTJS className={techClasses} />
          <NODEJS className={techClasses} />
          <TAILWINDCSS className={techClasses} />
          <MYSQL className={techClasses} />
          <MONGODB className={techClasses} /> */}
        </Carousel>
      </div>
      <span className="self-end text-slate-300 sm:mr-10">
        - Siempre aprendiendo tecnologias solicitadas en el mercado.
      </span>
    </section>
  );
}
