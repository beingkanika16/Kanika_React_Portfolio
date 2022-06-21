/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
	  <SocialLinks/>
	  <About />
	  <Experience/>
	  <Contact />
    </div>
  );
}

export default App;
