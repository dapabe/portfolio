import GlobalState from "./context/GlobalState";
import Portal from "./shared/Portal";

import Header from "@ui/layout/HeaderUI/Header.jsx";
import Footer from "@ui/layout/FooterUI/Footer.jsx";
import GoTop from "@ui/layout/GoTop.jsx";
import Menu from "@ui/layout/MenuUI/Menu.jsx";

import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "./context/states";

export default function AppLayout({ children }) {
  const {} = useContext(GlobalContext);
  const { pathname } = useRouter();

  let conditionalModal = null;

  const exclusivePadding = () => {
    let p = "p-10";
    switch (pathname) {
      case "/about":
        return p;
      default:
        return;
    }
  };

  return (
    <GlobalState>
      <Header />
      <main
        id="main"
        {...(exclusivePadding() && { className: exclusivePadding() })}
      >
        {children}
      </main>
      <Footer />
      <Portal htmlId="modal-root">
        <Menu />
        {conditionalModal}
      </Portal>
      <GoTop />
    </GlobalState>
  );
}
