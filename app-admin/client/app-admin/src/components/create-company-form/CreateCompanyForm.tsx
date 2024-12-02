import "./createCompany.css";
import React, { useState } from "react";
import axios from "axios";

export default function CreateCompanyForm() {
  const [formData, setFormData] = useState({
    rfc: "",
    nombre: "",
    businessLine: "",
  });

  const [message, setMessage] = useState(""); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(
        "http://localhost:4007/api/empresas/",
        { ...formData, dateAdded: new Date().toISOString() },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMessage("Empresa registrada exitosamente!");
      setFormData({ rfc: "", nombre: "", businessLine: "" });
    } catch (err) {
      console.error(err);
      setMessage("Error al registrar la empresa.");
    }
  };

  return (
    <div className="container text-center root-container">
      <div>
        <div className="container top-message">
          <h1>Registro de Nueva Empresa</h1>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre de la empresa"
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="rfc"
              value={formData.rfc}
              onChange={handleChange}
              placeholder="RFC"
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="businessLine"
              value={formData.businessLine}
              onChange={handleChange}
              placeholder="Tipo de negocio"
              required
            />
          </div>

          <div className="input-wrapper submit">
            <button type="submit">Guardar</button>
          </div>
        </form>

        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </div>
    </div>
  );
}
