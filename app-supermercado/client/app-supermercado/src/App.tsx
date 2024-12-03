import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProductsPage from "./pages/create-products-page/CreateProductsPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CreateProductsPage />} />

        </Routes>
      </Router>

    </div>
  );
}
