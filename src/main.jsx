import "./index.css";
import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//  For testing
import { SimDelay } from "./utilities";
//  ====================================
import AppLayout from "./components/AppLayout";
import { Home, E404 } from "./components/pages/exports";
import { Loading } from "@ui/fallbacks";

const load = (componentRoute) => {
  return lazy(() => import(componentRoute));
};
const lazyElement = (component, fallback) => {
  return <Suspense fallback={fallback || <Loading />}>{component}</Suspense>;
};

const About = SimDelay("./components/pages/About");
const Projects = load("./components/pages/Projects");
const ProjectID = load("./components/pages/ProjectID");

// Route Composition
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={lazyElement(<Loading />)} />
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
