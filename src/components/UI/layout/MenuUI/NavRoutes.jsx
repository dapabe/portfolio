import { useEffect } from "react";
import { useRouter } from "next/router";

import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/reusable/CustomLink";

const ROUTES = routesData.links;

export default function NavRoutes({ ...props }) {
  const router = useRouter();
  useEffect(() => {
    ROUTES.forEach(({ href }) => {
      if (router.pathname === href) return;
      else return router.prefetch(href);
    });
  }, []);

  return ROUTES.map(({ text, ...attr }) => (
    <li key={text}>
      <CustomLink {...attr} onClick={props.onClick}>
        {text}
      </CustomLink>
    </li>
  ));
}
