import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/pages/Store";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Store}/>
          <Route path="/about" Component={About}/>
          <Route path="/home" Component={Home}/>
        </Routes>
        <br />
        <Footer/>
      </BrowserRouter>
      
    </Fragment>

  );
}

export default App;
