import GlobalState from "./HOC/GlobalState";
import Portal from "./HOC/Portal";

import Header from "@src/components/interface/layout/HeaderUI/Header.jsx";
import Footer from "@src/components/interface/layout/FooterUI/Footer.jsx";
import GoTop from "@src/components/interface/layout/GoTop.jsx";
import Menu from "@src/components/interface/layout/MenuUI/Menu.jsx";

export default function AppLayout({ children }) {
  return (
    <GlobalState>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Portal selector="menu-root">
        <Menu />
      </Portal>
      <GoTop />
    </GlobalState>
  );
}
