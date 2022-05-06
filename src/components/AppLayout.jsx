import GlobalState from "@context/GlobalState";

import Header from "@ui/unique/HeaderUI/Header";
import Footer from "@ui/unique/FooterUI/Footer";
import GoTop from "@ui/unique/GoTop";

import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <GlobalState>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <GoTop />
    </GlobalState>
  );
}
