import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
// import Blogs from './components/blogs/Blogs'
// import Testimonials from './components/testimonials/Testimonials'
// import Pricing from './components/pricing/Pricing'
const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        {/* <Pricing/>
        <Testimonials/>
        <Blogs/> */}
        <Contact />
      </main>
    </>
  );
};

export default App;
