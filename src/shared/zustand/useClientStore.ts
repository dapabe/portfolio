import { create } from "zustand";
import { DefaultThemes } from "$/src/constants/client";
import { DefaultTheme } from "$types/IClient";

interface ClientStore {
  theme: DefaultTheme;
  getTheme: () => void;
  switchTheme: () => void;
}

export const useClientStore = create<ClientStore>((set, get) => ({
  theme: DefaultThemes.light,
  getTheme: () => {
    const currentTheme = localStorage.getItem("theme") as DefaultTheme | null

    if (currentTheme) set((s) => ({ ...s, theme: currentTheme }))
    else {
      const hasDarkT = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      if (hasDarkT) localStorage.setItem("theme", DefaultThemes.dark)
      else localStorage.setItem("theme", DefaultThemes.light)

      set((s) => ({ ...s, theme: localStorage.getItem("theme") as DefaultTheme }))
    }
  },
  switchTheme: () => {
    const storedTheme = localStorage.getItem("theme") as DefaultTheme
    let theme: DefaultTheme;

    if (storedTheme === DefaultThemes.dark) {
      localStorage.setItem("theme", DefaultThemes.light)
      theme = localStorage.getItem("theme") as DefaultTheme
    } else {
      localStorage.setItem("theme", DefaultThemes.dark)
      theme = localStorage.getItem("theme") as DefaultTheme
    }
    set((s) => ({ ...s, theme }))
  },

}))