import Link from "next/link";
import { useRouter } from "next/router";

const styling = (type) => {
  switch (type) {
    case "primary":
      return "underline underline-offset-4";
    default:
      return "btn-inOut after:bg-white ";
  }
};

export default function CustomLink({ href, children, ...props }) {
  const router = useRouter();
  const customCSS =
    props.className ||
    (router.pathname === href ? styling("primary") : styling());

  return (
    <Link href={href}>
      <a className={customCSS} {...props}>
        {children}
      </a>
    </Link>
  );
}
