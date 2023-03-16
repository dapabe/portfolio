// import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Meta from "./meta";
import type { IMeta } from "src/types/random";
import { DesktopNavbar } from "src/components/DesktopNavbar";

export default function Layout({
  meta,
  children,
}: {
  meta?: IMeta;
  children: ReactNode;
}) {
  // const { data: session, status } = useSession();
  // const scrolled = useScroll(50);
  return (
    <div className="h-screen">
      <Meta {...meta} />
      <div className="pointer-events-none fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <header
        className={`relative top-0 w-full bg-gradient-to-b from-[#212121] to-[#292524] transition-all`}
      >
        <div className="flex flex-col justify-between py-8 px-14">
          <Link
            href="/"
            className="flex items-center font-display text-2xl text-stone-200"
          >
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            Dapadev
          </Link>
        </div>
        <DesktopNavbar />
        <div className="absolute top-full left-0 w-full rotate-180 overflow-hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`relative block h-[5rem] w-[calc(165%_+_1.3px)] `}
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#292524"
            ></path>
          </svg>
        </div>
      </header>
      <main className="flex h-[70%] flex-col items-center">{children}</main>
      <footer className="">ul</footer>
    </div>
  );
}
