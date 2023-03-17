import { ReactNode } from "react";
import { Header } from "./Header";
import Meta from "./meta";

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
  return (
    <>
      <Meta {...meta} />
      <div className="pointer-events-none fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <Header />
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <footer className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          Hecho con dedicación por{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/_danzen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel P. Becerra
          </a>
        </p>
      </footer>
    </>
  );
}
