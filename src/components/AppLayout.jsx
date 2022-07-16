import GlobalState from "./HOC/GlobalState";
import Portal from "./HOC/Portal";

import Header from "./ui/layout/HeaderUI/Header";
import Footer from "./ui/layout/FooterUI/Footer";
import GoTop from "./ui/layout/GoTop";
import Menu from "./ui/layout/MenuUI/Menu";

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
