import React, { useEffect, useState } from "react";
import OfferCard from "../../components/offer-card/OfferCard"; // Asegúrate de importar el componente OfferCard
import "./seeProductsRegistered.css";
import SeparationBar from "../../components/separation-bar/SeparationBar";
import Header from "../../components/header/Header";

interface Product {
  empresa: string;
  productos: Array<{
    _id: string;
    nombre: string;
    precio: number;
    descripcion: string;
  }>;
}

export default function SeeProductsRegistered() {
  const [products, setProducts] = useState<Product[]>([]);

  // Hacer la solicitud al backend para obtener los productos registrados
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4008/api/productos/productos-registrados"
        );
        const data = await response.json();
        setProducts(data); // Guardamos los datos obtenidos en el estado
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <SeparationBar />
      <div className="see-products-container">
        {products.map((item) =>
          item.productos.map((producto) => (
            <OfferCard
              key={producto._id}
              nombre={producto.nombre}
              precio={producto.precio}
              descripcion={producto.descripcion}
            />
          ))
        )}
      </div>
    </>
  );
}
