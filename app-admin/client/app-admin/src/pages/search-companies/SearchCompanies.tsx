import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "../../components/company-card/CompanyCard.tsx";
import Header from "../../components/header/Header.tsx";
import SeparationBar from "../../components/separation-bar/SeparationBar.tsx";
import "./searchCompanies.css";

interface Company {
  _id: string;
  rfc: string;
  nombre: string;
  businessLine: string;
  dateAdded: string;
  reports: string[];
}

export default function SearchCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4007/api/empresas");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <SeparationBar />
      <div className="top-message">
        <h3>Empresas del sistema</h3>
      </div>

      <div className="company-cards-container">
        {companies.map((company) => (
          <CompanyCard
            key={company._id} 
            id = {company._id}
            name={company.nombre}
            line={company.businessLine}
            date={company.dateAdded}
            numberOfReports={company.reports.length.toString()} 
          />
        ))}
      </div>
    </div>
  );
}
