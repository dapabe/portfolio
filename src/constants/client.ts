import { DefaultTheme } from "../types/IClient";

type ClientPreferedTheme = {
  [K in "light" | "dark"]: DefaultTheme
}

export const DefaultThemes: ClientPreferedTheme = {
  light: "corporate",
  dark: "black"
}