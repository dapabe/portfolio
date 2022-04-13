import GlobalState from "@context/GlobalState";

import Header from "@ui/unique/HeaderUI/Header";
import Footer from "@ui/unique/FooterUI/Footer";
import BackToTop from "@ui/unique/BackToTop";

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
      <Footer />
      <BackToTop />
    </>
  );
}
