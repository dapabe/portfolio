import { Suspense, lazy } from "react";
import { createPortal } from "react-dom";

const Menu = lazy(() => import("./Menu"));

export default function MenuModal() {
  return createPortal(
    <Suspense fallback={null}>
      <Menu />
    </Suspense>,
    globalThis.getElementById("menu-root")
  );
}
