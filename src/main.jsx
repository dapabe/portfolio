import "./index.css";
import { StrictMode, Suspense, lazy } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lines } from "@fallback";
//      For testing  SuspendedEl
import { slowImport } from "./utilities/common";
//  ====================================

import AppLayout from "./components/AppLayout";
import { Home, E404 } from "@pages/exports";
const About = slowImport(import("@pages/About.jsx"));
const Projects = lazy(() => import("@pages/Projects.jsx"));
const ProjectID = lazy(() => import("@pages/ProjectID.jsx"));

// Route Composition
render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<Lines title lines={15} />}>
                <About />
              </Suspense>
            }
          />
          <Route path="*" element={<E404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
