import GlobalProvider from "./context/GlobalProvider";
import Portal from "./shared/Portal";

import Header from "@ui/layout/HeaderUI/Header.jsx";
import Footer from "@ui/layout/FooterUI/Footer.jsx";
import GoTop from "@ui/layout/GoTop.jsx";
import Menu from "@ui/layout/MenuUI/Menu.jsx";

import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "./context/states";
import { Provider } from "jotai";
import Modal from "./shared/Modal";
import useToggle from "./hooks/useToggle";

export default function AppLayout({ children }) {
  const { pathname } = useRouter();
  const [isModalOpen, toggleModal] = useToggle();

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
    <GlobalProvider>
      <Provider>
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
          <Modal isOpen={isModalOpen} handleClose={toggleModal}>
            {modalContent}
          </Modal>
        </Portal>
        <GoTop />
      </Provider>
    </GlobalProvider>
  );
}
