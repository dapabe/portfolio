import { useModalStore } from "@src/appState/modalStore";
import { createElement, useContext } from "react";
import { GlobalContext } from "../context/states";
import useNoScroll from "../hooks/useNoScroll";
import useToggle from "../hooks/useToggle";

export default function Modal({ isOpen, toggleModal, content: Content }) {
  useNoScroll(isOpen);

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-30 flex bg-black/95 [&>*]:mx-auto [&>*]:my-auto"
        onClick={toggleModal}
      >
        <Content isModalOpen={isOpen} handleClose={toggleModal} />
      </div>
    )
  );
}
