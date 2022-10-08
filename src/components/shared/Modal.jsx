import { useContext } from "react";
import { GlobalContext } from "../context/states";
import useNoScroll from "../hooks/useNoScroll";

export default function Modal({ isOpen, handleClose, children }) {
  const {} = useContext(GlobalContext);
  useNoScroll(isOpen);
  return (
    isOpen && (
      <div
        className="fixed inset-0 z-30 flex bg-black/95 [&>*]:mx-auto [&>*]:my-auto"
        onClick={handleClose}
      >
        {children}
      </div>
    )
  );
}
