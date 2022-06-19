import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main, NavBar, Cars } from "./index" 

const App = () => {
    
return (
    <div>
      <div className="app-container">
      </div>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/cars" element={<Cars />} />
        <Route path="/" element={<Main />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;