import "./offerCard.css";
export default function OfferCard() {
  return (
    <>
      <div className="container d-flex align-items-center offer-container">
        <div className="row col-6 offer-info-row">
          <div className="offer-name">Oferta </div>
          <div className="offer-market">Mercado </div>
          <div className="offer-ending"> Diciembre</div>
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
    </>
  );
}
