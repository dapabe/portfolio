import GlobalState from "./context/GlobalState";
import Portal from "./shared/Portal";

import Header from "@ui/layout/HeaderUI/Header.jsx";
import Footer from "@ui/layout/FooterUI/Footer.jsx";
import GoTop from "@ui/layout/GoTop.jsx";
import Menu from "@ui/layout/MenuUI/Menu.jsx";

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
