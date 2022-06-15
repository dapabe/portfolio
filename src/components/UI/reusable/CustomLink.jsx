import Link from "next/link";
import { useRouter } from "next/router";

const styling = (type) => {
  switch (type) {
    case "primary":
      return "underline underline-offset-4";
    case "kbd":
      return "inline-block analog-shadow-right px-0.5 rounded-md bg-white text-sutilBlack transition-[box-shadow_transform] active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner active:shadow-gray-500";
    default:
      return "btn-inOut after:bg-white";
  }
};

export default function CustomLink({ ...props }) {
  const { href, children, className, onClick } = props;
  const { pathname } = useRouter();
  const customCSS =
    className || styling(pathname === href ? "primary" : "default");

  return (
    <Link href={href} {...props}>
      <a className={customCSS} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
}
