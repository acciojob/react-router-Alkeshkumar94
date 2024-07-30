
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
   </Router>
   
  )
}

export default App
