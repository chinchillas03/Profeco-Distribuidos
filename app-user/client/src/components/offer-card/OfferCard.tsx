import React from 'react';
import './offerCard.css';

interface OfferCardProps {
  nombre: string;
  precio: number;
  descripcion: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ nombre, precio, descripcion }) => {
  return (
    <div className="container d-flex align-items-center offer-container">
      <div className="row col-6 offer-info-row">
        <div className="offer-name">{nombre}</div>
        <div className="offer-market">{descripcion}</div>
        <div className="offer-ending">{precio} USD</div>
      </div>
      <div className="container d-flex col-6 icons-row">
        <div className="row col-4">
          <i className="bi bi-heart"></i>
        </div>

        <div className="row col-8">
          <i className="bi bi-flag-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;