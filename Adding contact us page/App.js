import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./components/pages/Store";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/Contact";

function App() {

  return (
    <Fragment>
        <Routes>
          <Route exact path="/" Component={Store}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/home" Component={Home}/>
        </Routes>
        <br />
        <Footer/>
    </Fragment>

  );
}

export default App;
