import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage";
import CreateProductsPage from "../../../app-supermercado/client/app-supermercado/src/pages/CreateProductsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/createProduct" element={<CreateProductsPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;