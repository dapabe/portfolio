import { Header, Footer } from "./AppLayout/exports";
import { BackToTop } from "./AppLayout/common/exports";

import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
