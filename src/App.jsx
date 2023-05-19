import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Post from "./Pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Home/></div>}/>s
        <Route path="/About" element={<div><About/></div>}/>
        <Route path="/Features" element={<div><Features/></div>}/>
        <Route path="/Post" element={<div><Post/></div>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
