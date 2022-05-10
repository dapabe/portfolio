import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lines } from "@fallback";

//      For testing
// import { slowImport } from "./utilities/common";
//  ====================================

import AppLayout from "./components/AppLayout";
import { Home, E404 } from "@pages/exports";
const About = lazy(() => import("@pages/About.jsx"));
// const Projects = lazy(() => import("@pages/Projects.jsx"));
// const ProjectID = lazy(() => import("@pages/ProjectID.jsx"));

export default function Routing() {
  return (
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
  );
}
