import React from "react";
import OptionCard from "../../components/option-card/OptionCard.tsx";
import Header from "../../components/header/Header.tsx";
import SeparationBar from "../../components/separation-bar/SeparationBar.tsx";
import { Link } from "react-router-dom";
import "./indexAdmin.css";

export default function IndexAdmin() {
  return (
    <>
      <Header />
      <SeparationBar />
      <div className="container-fluid top-message">
        <h3>Gestionar Empresas</h3>
      </div>
      <div className="container options-container d-flex">
        <Link to="/add" className="custom-link col-6" >
          <OptionCard icon="bi bi-plus " text="Agregar empresa" />
        </Link>
        <Link to="/search" className="custom-link col-6" >
          <OptionCard icon="bi bi-pencil-square col-6" text="Consultar empresas" />
        </Link>


      </div>
    </>
  );
}
