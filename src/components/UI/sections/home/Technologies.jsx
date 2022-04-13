import { createRef } from "react";
import useObserver from "@hooks/useObserver";
import { CompareAndRetrieve } from "@utils/common.jsx";
import { Carousel } from "@ui/common/exports";
import data from "@src/assets/data.json";

const TECHS = data.tech_data;
const ICONS = data.icons_data;
const ICONS_DATA = CompareAndRetrieve({
  arrToLook: TECHS,
  arrToSearch: ICONS,
  keyToSearch: "name",
  keyToReturn: "file",
});

export default function SectionTechs() {
  const targetRef = createRef(null);
  const [isVisible] = useObserver(targetRef, {
    rootMargin: "300px",
    runOnce: false,
  });

  return (
    <section className="techSection noMaxWidth noSpace" ref={targetRef}>
      <svg viewBox="0 0 1440 320" className="absolute bottom-full">
        <path
          fill="#1C1B20"
          fillOpacity="1"
          d="M0,96L34.3,106.7C68.6,117,137,139,206,160C274.3,181,343,203,411,218.7C480,235,549,245,617,218.7C685.7,192,754,128,823,96C891.4,64,960,64,1029,80C1097.1,96,1166,128,1234,122.7C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <h1 className="sectionTitle sm:indent-[5rem] mxsm:text-center">
        Tecnologias
      </h1>
      <Carousel>
        {ICONS_DATA.map((icon) => (
          <li key={icon.name + 1}>
            {isVisible && (
              <img
                src={`/icons/logos/${icon.file}`}
                alt={icon.img_desc}
                className="h-20 w-[200px]"
              />
            )}
          </li>
        ))}
      </Carousel>
      <h1 className="ml-auto mr-16 text-center sm:max-w-md sm:text-left mxsm:mx-auto mxsm:max-w-xs">
        - Siempre aprendiendo tecnologias solicitadas en el mercado.
      </h1>
      <svg viewBox="0 0 1440 320" className="absolute top-full">
        <path
          fill="#1C1B20"
          fillOpacity="1"
          d="M0,96L34.3,106.7C68.6,117,137,139,206,160C274.3,181,343,203,411,218.7C480,235,549,245,617,218.7C685.7,192,754,128,823,96C891.4,64,960,64,1029,80C1097.1,96,1166,128,1234,122.7C1302.9,117,1371,75,1406,53.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
