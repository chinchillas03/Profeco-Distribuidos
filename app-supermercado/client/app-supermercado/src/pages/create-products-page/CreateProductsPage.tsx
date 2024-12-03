import React, { useState } from 'react';
import Header from "../../components/header/Header";
import InputComponent from "../../components/input-component/InputComponent";
import SeparationBar from "../../components/separation-bar/SeparationBar";
import './createProducts.css'

export default function CreateProductsPage() {
  // Estado para almacenar los valores de los inputs
  const [rfc, setRfc] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  // Función para manejar el evento onClick del botón
  const handleAgregarProducto = async () => {
    // Verificar que los campos no estén vacíos
    if (!rfc || !nombre || !descripcion || !precio) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const productData = {
      nombre,
      precio,
      descripcion
    };

    try {
      const response = await fetch(`http://localhost:4006/api/producto/empresa/${rfc}/producto`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert("Producto agregado correctamente");
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert("Hubo un error al agregar el producto");
    }
  };

  return (
    <>
      <Header />
      <SeparationBar />
      <div className="container-fluid top-message">
        <h3>Agregar un producto a mi empresa</h3>
      </div>

      <div className="container text-center py-5">
        <InputComponent label="RFC de la empresa" value={rfc} onChange={e => setRfc(e.target.value)} />
        <InputComponent label="Nombre del producto" value={nombre} onChange={e => setNombre(e.target.value)} />
        <InputComponent label="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        <InputComponent label="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
        <button className="btn" onClick={handleAgregarProducto}>
          Agregar
        </button>
      </div>
    </>
  );
}