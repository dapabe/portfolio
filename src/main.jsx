import "./index.css";
import { StrictMode, Suspense, lazy } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "@fallback";
//  For testing    SuspendedEl  importShorthand
import { SimDelay, LoadElement, load } from "./utilities/common";
//  ====================================

import AppLayout from "./components/AppLayout";
import { Home, E404 } from "@pages/exports";
const About = lazy(() => import("@pages/About.jsx"));
const Projects = lazy(() => import("@pages/Projects.jsx"));
const ProjectID = lazy(() => import("@pages/ProjectID.jsx"));

// Route Composition
render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<LoadElement children={<About />} />} />
          <Route
            path="projects"
            element={<LoadElement children={<Projects />} />}
          >
            <Route
              path=":projectId"
              element={<LoadElement children={<ProjectID />} />}
            />
          </Route>
          <Route path="*" element={<E404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
