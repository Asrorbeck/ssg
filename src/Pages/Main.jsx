import React from "react";
import Hero from "../Components/Hero/Hero";
import Company from "../Components/Company/Company";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import Benefit from "../Components/Benefit/Benefit";
import Plus from "../Components/Plus/Plus";
import Solutions from "../Components/Solutions/Solutions";
import Confident from "../Components/Confident/Confident";
import Client from "../Components/Client/Client";
import FAQ from "../Components/FAQ/FAQ";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";

function Main() {
  return (
    <div>
      <Hero />
      <Company />
      <About />
      <Service />
      <Benefit />
      <Plus />
      <Solutions />
      <Confident />
      <Client />
      <FAQ />
      <Blog />
      <Contact />
    </div>
  );
}

export default Main;
