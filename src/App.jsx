import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
