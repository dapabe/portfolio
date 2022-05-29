import GlobalState from "@context/GlobalState";

import Header from "./UI/unique/HeaderUI/Header";
import Footer from "./UI/unique/FooterUI/Footer";
import GoTop from "./UI/unique/GoTop";
import MenuModal from "./UI/unique/MenuUI/MenuModal";

export default function AppLayout({ children }) {
  return (
    <GlobalState>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <GoTop />
      {/* <MenuModal /> */}
    </GlobalState>
  );
}
