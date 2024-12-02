import React from "react";
import AddCompanyPage from "./pages/add-company/AddCompanyPage.tsx";
import IndexAdmin from "./pages/index-admin/IndexAdmin.tsx";
import { Routes, Route } from "react-router-dom";
import SearchCompanies from "./pages/search-companies/SearchCompanies.tsx";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<IndexAdmin />} />
        <Route path="/add" element={<AddCompanyPage />} />
        <Route path="/search" element={<SearchCompanies />} />
     
    
      </Routes>
    </>
  );
}

export default App;
