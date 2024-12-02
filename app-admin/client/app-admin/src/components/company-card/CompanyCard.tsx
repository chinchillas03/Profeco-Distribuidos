import React, { useState } from "react";
import "./companyCard.css";
import { Link } from "react-router-dom";
import axios from "axios";

export interface CompanyCardProps {
  id: string;
  name: string;
  line: string;
  date: string;
  numberOfReports: string;
}

export default function CompanyCard({
  id,
  name,
  line,
  date,
  numberOfReports,
}: CompanyCardProps) {
  const handleClickDelete = async () => {
    try {

      const response = await axios.delete(`http://localhost:4007/api/empresas/${id}`);
      console.log("Company deleted", response.data);
      window.location.reload();
 
    } catch (error) {
      console.log("Error deleting company", error);
    }
  };

  return (
    <>
      <div className="container card-container col-12">
        <div className="row">
          <div className="container d-flex company-name">
            <h3>{name}</h3>
            <i onClick={handleClickDelete} className="bi bi-trash"></i>
            <i className="bi bi-pencil-square"></i>
          </div>
          <div className="company-id">
            <h4>
              <strong>ID:</strong> {id}
            </h4>
          </div>
          <div className="company-line">
            <h4>
              <strong>Tipo de negocio:</strong> {line}
            </h4>
          </div>
          <div className="company-date">
            <h4>
              <strong>Fecha en que se agregó:</strong> {date}
            </h4>
          </div>

          <div className="container company-reports d-flex">
            <div className="row col-3 number-report-row">
              <h4>
                <strong>Número de reportes:</strong> {numberOfReports}
              </h4>
            </div>
            <Link to="/">
              <div className="row col-2 icon-row">
                <i className="bi bi-eye"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
