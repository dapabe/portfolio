import create from "zustand";

export const useModalStore = create((set) => ({
  modalContent: null,
  isOpen: true,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen }), true),
  resetModal: () => set({ modalContent: null }, true),
  setModal: (Content) => {
    set({ modalContent: <Content /> })
  }
}))