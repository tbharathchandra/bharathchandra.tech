import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contactme from "./components/Contantme";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <AboutMe />
      <Work />
      <Projects />
      <Articles />
      <Contactme />
      <ScrollToTopBtn />
    </div>
  );
}

export default App;
