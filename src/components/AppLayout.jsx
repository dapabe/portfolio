import Header from "@ui/unique/HeaderUI/Header";
import Footer from "@ui/unique/FooterUI/Footer";
import BackToTop from "@ui/unique/BackToTop";

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
