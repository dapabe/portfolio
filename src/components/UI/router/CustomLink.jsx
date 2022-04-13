import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ type, to, children, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const styling = (type) => {
    switch (type) {
      case "primary":
        return "underline underline-offset-4";

      default:
        return;
    }
  };

  return (
    <Link className={match && styling(type)} to={to} {...props}>
      {children}
    </Link>
  );
}
