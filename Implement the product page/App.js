import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./components/pages/Store";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/Contact";
import ProductPage from "./components/pages/ProductPage";


function App() {

  return (
    <Fragment>

        <Routes>
          <Route exact path="/" Component={Store}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/home" Component={Home}/>
          <Route path="/product/:id" Component={ProductPage} />
        </Routes>
        <Footer/>
    </Fragment>

  );
}

export default App;
