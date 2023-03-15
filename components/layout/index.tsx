// import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
// import UserDropdown from "./user-dropdown";
import type { IMeta } from "src/types/random";
import { useRouter } from "next/router";

const NAV_LINKS = [
  {
    href: "/about",
    text: "Acerca",
  },
  {
    href: "/works",
    text: "Trabajos hechos",
  },
  {
    href: "/projects",
    text: "Proyectos",
  },
];

export default function Layout({
  meta,
  children,
}: {
  meta?: IMeta;
  children: ReactNode;
}) {
  const { route } = useRouter();
  // const { data: session, status } = useSession();
  // const scrolled = useScroll(50);
  return (
    <div className="h-screen">
      <Meta {...meta} />
      <div className="pointer-events-none fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <header
        className={`border-gray-200z-30 fixed top-0 w-full transition-all`}
      >
        <nav className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            Dapadev
          </Link>
          <ul className="hidden gap-4 sm:flex">
            {NAV_LINKS.map(({ href, text }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-display ${
                    href === route ? "" : "text-gray-500 "
                  }`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex h-[90%] flex-col items-center py-16">
        {children}
      </main>
      <footer className="h-[10%]"></footer>
    </div>
  );
}
