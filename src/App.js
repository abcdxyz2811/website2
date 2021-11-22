import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";


function App() {

    return ( < >

        <
        Menu / >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > } > < /Route> <
        Route exact path = "/about"
        element = { < About / > } > < /Route>  <
        Route exact path = "/service"
        element = { < Service / > } > < /Route> <
        Route exact path = "/contact"
        element = { < Contact / > } > < /Route>

        <
        /Routes > < /
        >
    )

}


export default App;