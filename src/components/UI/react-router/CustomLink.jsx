import { Link, useMatch, useResolvedPath } from "react-router-dom";

const styling = (type) => {
  switch (type) {
    case "primary":
      return "underline underline-offset-4";
    default:
      return "btn-inOut after:bg-white ";
  }
};

export default function CustomLink({ type, to, children, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const customCSS =
    props.className || (match ? styling(type ? type : "primary") : styling());

  return (
    <Link className={customCSS} to={to} {...props}>
      {children}
    </Link>
  );
}
