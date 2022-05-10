import "./index.css";
import { StrictMode } from "react";
import { render } from "react-dom";
import Routing from "./Routing";

// Route Composition
render(
  <StrictMode>
    <Routing />
  </StrictMode>,
  document.getElementById("app-root")
);
