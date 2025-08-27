import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import Page404 from "./Pages/Page404.jsx";

const App = ()=>{

  // testing the routing
  // const Home = ()=>{
  //   return(
  //     <>
  //       <h1>This is Home page</h1>
  //     </>
  //   );
  // }

  // const About = ()=>{
  //   return(
  //     <>
  //       <h1>This is About page</h1>
  //     </>
  //   );
  // }

  // const Contact = ()=>{
  //   return(
  //     <>
  //       <h1>This is Contact page</h1>
  //     </>
  //   );
  // }

  return(
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;