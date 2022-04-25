import data from "@src/assets/data.json";
import { createContext } from "react";

const INSPIRATIONS = Object.freeze(data.inspirations);

export const QuotesContext = createContext([INSPIRATIONS]);
