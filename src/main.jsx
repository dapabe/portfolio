import "./index.css";
import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//  For testing
import { SimDelay } from "./utilities";
//  ====================================

const load = (componentRoute) => lazy(() => import(componentRoute));
const lazyElement = (component, fallback) => {
  if (!component) return;
  return (
    <Suspense fallback={fallback || <LoadingArticle />}>{component}</Suspense>
  );
};

import AppLayout from "./components/AppLayout";
import { Home, E404 } from "./components/pages/exports";
import { LoadingArticle } from "@ui/fallbacks";
const About = SimDelay("./components/pages/About");
const Projects = SimDelay("./components/pages/Projects");
const ProjectID = SimDelay("./components/pages/ProjectID");

// Route Composition
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={lazyElement(<About />)} />
          <Route path="projects" element={lazyElement(<Projects />)}>
            <Route path=":projectId" element={lazyElement(<ProjectID />)} />
          </Route>
          <Route path="*" element={<E404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
