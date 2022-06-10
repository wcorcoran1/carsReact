import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main, NavBar } from "./index" 

const App = () => {
    
return (
    <div>
      <div className="app-container">
      </div>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;