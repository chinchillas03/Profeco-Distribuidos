import React from "react";
import "./companyCard.css";
import { Link } from "react-router-dom";

export interface CompanyCardProps {
  name: string;
  line: string;
  date: string;
  numberOfReports: string;
}
export default function CompanyCard({
  name,
  line,
  date,
  numberOfReports,
}: CompanyCardProps) {
  return (
    <>
      <div className="container card-container col-12">
        <div className="row ">
          <div className="container d-flex company-name">
            <h3>{name}</h3>
            <i className="bi bi-trash"></i>
            <i className="bi bi-pencil-square"></i>
          </div>
          <div className="company-line ">
            <h4>
              <strong>Tipo de negocio:</strong> {line}
            </h4>
          </div>
          <div className="company-date ">
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
