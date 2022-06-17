import GlobalState from "./HOC/GlobalState";
import Portal from "./HOC/Portal";

import Header from "./UI/layout/HeaderUI/Header";
import Footer from "./UI/layout/FooterUI/Footer";
import GoTop from "./UI/layout/GoTop";
import Menu from "./UI/layout/MenuUI/Menu";

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
