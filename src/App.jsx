import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "home/Header";
import Footer from "home/Footer";
import ContentBody from "home/ContentBody";
import SafeComponent from "./SafeComponent";

const App = () =>{
  return(
  <div className="container">
    <SafeComponent>
    <Header />
    </SafeComponent>
    <ContentBody />
    <Footer />
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
