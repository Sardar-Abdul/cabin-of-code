import React from "react";
import { StyledApp } from "./components/styles/appStyle";
import Topbar from "./components/navbar/topbar";
import Header from "./components/pages/header";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Faq from "./components/pages/faq";
import Footer from "./components/footer/footer";

function App() {
  return (
    <StyledApp>
      <Topbar />
      <Header />
      <About />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
    </StyledApp>
  );
}

export default App;
