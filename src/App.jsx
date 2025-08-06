import { useState } from "react";
import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Action from "./components/Action";
import EveryThing from "./components/EveryThing";
import Pricing from "./components/Pricing";
import CampareFeature from "./components/CampareFeature";
import Members from "./components/Members";
import Ready from "./components/Ready";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import BackToTop from "./common/BackToTop";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function App() {
  return (
    <>
      <Hero />
      <Action />
      <EveryThing />
      <Pricing />
      <CampareFeature />
      <Members />
      <Ready />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
