import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/react-router/CustomLink";

const ROUTES = routesData.links;

export default function NavRoutes({ ...props }) {
  return ROUTES.map(({ to, text }) => (
    <li key={text}>
      <CustomLink to={to} {...props}>
        {text}
      </CustomLink>
    </li>
  ));
}
