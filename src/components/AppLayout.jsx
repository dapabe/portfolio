import { Suspense, lazy } from "react";
import GlobalState from "@context/GlobalState";

import { Lines } from "@fallback";

import Header from "@ui/unique/HeaderUI/Header";
const Footer = lazy(() => import("@ui/unique/FooterUI/Footer"));
const GoTop = lazy(() => import("@ui/unique/GoTop"));

import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <GlobalState>
        <Header />
        <main id="main">
          <Outlet />
        </main>
      </GlobalState>
      <Suspense fallback={<Lines lines={4} />}>
        <Footer />
        <GoTop />
      </Suspense>
    </>
  );
}
