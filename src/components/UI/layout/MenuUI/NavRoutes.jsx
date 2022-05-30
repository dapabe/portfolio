import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/reusable/CustomLink";

const ROUTES = routesData.links;

export default function NavRoutes({ ...props }) {
  return ROUTES.map(({ text, ...attr }) => (
    <li key={text}>
      <CustomLink {...attr} {...props}>
        {text}
      </CustomLink>
    </li>
  ));
}
