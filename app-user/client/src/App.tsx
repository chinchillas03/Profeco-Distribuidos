import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import SeeProductsRegistered from "./pages/see-products-registered/SeeProductsRegistered";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         
          <Route path="/markets" element={<SeeProductsRegistered />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;