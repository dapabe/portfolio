import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import dynamic from "next/dynamic";
// import UserDropdown from "./user-dropdown";

const MenuIcon = dynamic(
  async () => {
    return (await import("lucide-react")).MenuIcon;
  },
  { ssr: false },
);

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="pointer-events-none fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <header
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/75 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 py-2 transition-all`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
          <Link href="/">
            <Image
              src="/dapabe.png"
              alt="Daniel Patricio Becerra"
              width="150"
              height="1"
            ></Image>
          </Link>
          <nav className="hidden space-x-8 border-y border-y-gray-300 px-4 py-2 font-display text-lg sm:flex [&>a]:hidden [&>a]:leading-none [&>a]:sm:inline-block">
            <Link href="/work">
              Trabajos
              <span className="text-2xl leading-none text-rose-600">.</span>
            </Link>
            <Link href="/dev">
              Desarrollos
              <span className="text-2xl leading-none text-rose-600">.</span>
            </Link>
            <Link href="/blog">
              Blog
              <span className="text-2xl leading-none text-rose-600">.</span>
            </Link>
          </nav>
          <button>
            <MenuIcon />
          </button>
        </div>
        <div className="absolute top-full h-screen w-full bg-gradient-to-b from-indigo-50  via-cyan-100 to-cyan-200">
          <div className="mx-auto h-full max-w-screen-md">cosas</div>
        </div>
      </header>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <footer className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          A free template by{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/_danzen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steven Tey
          </a>
        </p>
      </footer>
    </>
  );
}
