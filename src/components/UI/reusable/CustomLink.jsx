import Link from "next/link";

const styling = (type) => {
  switch (type) {
    case "primary":
      return "underline underline-offset-4";
    default:
      return "btn-inOut after:bg-white ";
  }
};

export default function CustomLink({ href, type, children, ...props }) {
  // const resolved = useResolvedPath(to);
  // const match = useMatch({ path: resolved.pathname, end: true });
  // const customCSS =
  //   props.className || (match ? styling(type ? type : "primary") : styling());

  return (
    <Link href={href}>
      <a className="" {...props}>
        {children}
      </a>
    </Link>
  );
}
