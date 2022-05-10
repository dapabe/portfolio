import GlobalState from "@context/GlobalState";

import Header from "./UI/unique/HeaderUI/Header";
import Footer from "./UI/unique/FooterUI/Footer";
import GoTop from "./UI/unique/GoTop";
import MenuModal from "./UI/unique/MenuUI/MenuModal";

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
      <MenuModal />
    </GlobalState>
  );
}
