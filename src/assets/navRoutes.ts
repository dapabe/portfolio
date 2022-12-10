import { LangAbbr } from "../interfaces/IConfig";

export interface IRouteText {
  href: string;
  text: {
    [local in LangAbbr]: string;
  }
}

export default <IRouteText[]>[
  {
    "href": "/about",
    "text": {
      "es": "Acerca",
      "en": "About me"
    }
  },
  // {
  //   "href": "/blog",
  //   "text": {
  //     "es": "Blog",
  //     "en": "Blog"
  //   }
  // },
  // {
  //   "href": "/projects",
  //   "text": {
  //     "es": "Proyectos",
  //     "en": "Projects"
  //   }
  // },
]
