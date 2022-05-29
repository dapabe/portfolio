import GlobalState from "./HOC/GlobalState";
import Portal from "./HOC/Portal";

import Header from "./UI/unique/HeaderUI/Header";
import Footer from "./UI/unique/FooterUI/Footer";
import GoTop from "./UI/unique/GoTop";
import Menu from "./UI/unique/MenuUI/Menu";

export default function AppLayout({ children }) {
  return (
    <GlobalState>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <GoTop />
      <Portal selector="menu-root">
        <Menu />
      </Portal>
    </GlobalState>
  );
}
