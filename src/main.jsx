import "./index.css";
import { StrictMode, Suspense, lazy } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "@fallback";
//  For testing    SuspendedEl  import
import { SimDelay, LoadElement, load } from "./utilities/common";
//  ====================================

import AppLayout from "./components/AppLayout";
import { Home, E404 } from "./components/pages/exports";
const About = load("./components/pages/About.jsx");
const Projects = load("./components/pages/Projects.jsx");
const ProjectID = load("./components/pages/ProjectID.jsx");

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
