import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import CreateProductsPage from "../../../app-supermercado/client/app-supermercado/src/pages/CreateProductsPage";
import RegisterUser from "./pages/registerUserPage/registerUserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/index" element={<IndexPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterUser/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;