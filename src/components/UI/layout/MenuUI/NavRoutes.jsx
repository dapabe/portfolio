import { useEffect } from "react";
import { useRouter } from "next/router";

import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/reusable/CustomLink";


export default function NavRoutes({ ...props }) {
  const {locale,pathname,prefetch} = useRouter();

  useEffect(() => {
    routesData.forEach(({ href }) => {
      if (pathname !== href) return prefetch(href);
    });
  }, []);

  return routesData.map(({ text, ...attr }) => (
    <li key={text}>
      <CustomLink {...attr} childProps={...props}>
        {text[locale]}
      </CustomLink>
    </li>
  ));
}
