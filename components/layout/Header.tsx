import useScroll from "@/lib/hooks/use-scroll";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useDimensions } from "src/hooks/useDimensions";
import { useToggle } from "src/hooks/useToggle";
import Card from "../home/card";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";

const MenuIcon = dynamic(
  async () => {
    return (await import("lucide-react")).MenuIcon;
  },
  { ssr: false },
);

export const Header = () => {
  const scrolled = useScroll(80);
  const [isMenuOpen, toggleMenu] = useToggle();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const waterfall = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 0 100%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 100% 0px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.header
        ref={containerRef}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        custom={height}
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/75 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 py-2 transition-[background-color]`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
          {/* <div className="absolute top-0 left-0 -z-10 h-0 w-full bg-gradient-to-tr from-indigo-50 via-cyan-100 to-cyan-200 pt-[5rem]">
          <nav className="mx-auto h-full max-w-screen-md "></nav>
        </div> */}
          <Link href="/" aria-label="Logo Link">
            <Image
              src="/dapabe.png"
              alt="Daniel Patricio Becerra"
              width="150"
              height="1"
            ></Image>
          </Link>
          {/* <nav className="hidden font-display text-lg sm:flex [&>:not(:last-child)]:mr-2 [&>a]:hidden [&>a]:leading-none [&>a]:sm:inline-block">
          <Link href="/work">
            Trabajos
            <span className="text-2xl leading-none text-rose-600">.</span>
          </Link>
          <div className="border-l border-gray-300" />
          <Link href="/dev">
            Desarrollos
            <span className="text-2xl leading-none text-rose-600">.</span>
          </Link>
          <div className="border-l border-gray-300" />
          <Link href="/blog">
            Blog
            <span className="text-2xl leading-none text-rose-600">.</span>
          </Link>
        </nav> */}
          <div className="flex w-[150px] justify-center">
            <MenuToggle toggle={toggleMenu} />
            {/* <button className="rounded-md p-1 text-gray-700 shadow-sm shadow-cyan-700 transition-all will-change-auto hover:shadow-md hover:shadow-cyan-700">
            <MenuIcon size="30" />
          </button> */}
          </div>
        </div>
        <motion.div
          className="absolute inset-0 -z-10 bg-gray-700"
          variants={waterfall}
        />
      </motion.header>
    </>
  );
};

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button onClick={toggle}>
    <svg className="h-6 w-6" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
