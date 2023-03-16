import dynamic from "next/dynamic";
import BxlJavascript from "$icons/BxlJavascript";
import StarsIcon from "$icons/StarsIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuIcon = dynamic(
  async () => {
    return (await import("lucide-react")).MenuIcon;
  },
  { ssr: false },
);

const NewspaperIcon = dynamic(
  async () => {
    return (await import("lucide-react")).NewspaperIcon;
  },
  { ssr: false },
);

const HomeIcon = dynamic(
  async () => {
    return (await import("lucide-react")).HomeIcon;
  },
  { ssr: false },
);

const NAV_LINKS = [
  {
    href: "/development",
    text: "Desarrollos",
    icon: (params: any) => <BxlJavascript {...params} />,
  },
  {
    href: "/blog",
    text: "Blog",
    icon: (params: any) => <NewspaperIcon {...params} />,
  },
];

export const DesktopNavbar = () => {
  const { route } = useRouter();

  const routeMatch = (href: string) =>
    href === route
      ? "text-stone-300 underline"
      : "text-stone-400 hover:text-stone-300";

  return (
    <nav className="hidden items-center border-y border-y-stone-600 px-11 sm:flex">
      <Link
        href="/"
        className={`border-r border-r-stone-600 p-3 transition-colors duration-300 ${routeMatch(
          "/",
        )}`}
      >
        <HomeIcon />
      </Link>
      <ul className="flex gap-11 py-3 px-4 font-display leading-relaxed [&>li]:transition-colors [&>li]:duration-300">
        {NAV_LINKS.map(({ href, text, icon }) => (
          <li key={href} className={routeMatch(href)}>
            <Link href={href} className="flex items-center gap-1">
              {icon({ className: "w-6 h-6" })}
              {text}
            </Link>
          </li>
        ))}
        <li className={routeMatch("/works")}>
          <Link href="/works" className="flex items-center gap-1">
            <StarsIcon className="h-6 w-6" />
            Trabajos Hechos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
