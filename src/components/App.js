import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "./index" 

const App = () => {
    
return (
    <div>
      <div className="app-container">
      </div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;