import "./createCompany.css";
import React from "react";
const CreateCompanyForm = () => {
  return (
    <>
      <div className="container text-center root-container">
        <div>
          <div className="container top-message">
            <h1>Agregar nueva empresa</h1>
          </div>

          <form className="form ">
            <div className="input-wrapper">
              <input type="text" placeholder="Nombre de la empresa" />
            </div>

            <div className="input-wrapper">
              <input type="text" placeholder="RFC" />
            </div>

            <div className="input-wrapper">
              <input type="text" placeholder="Tipo de negocio" />
            </div>

            <div className="input-wrapper submit">
              <input type="submit" placeholder="guardar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCompanyForm;
