import SupermarketOffer from "./SupermarketOffer";

export default function OfferContainer() {
  return (
    <>
      <div className="offers">
        <div className="container justify-content-center d-flex">
          <div className="row">
            <SupermarketOffer
              offerText="15% de descuento en artículos de limpieza"
              buttonText="Visitar el sitio web"
              validity="31st December 2024"
              imgRoute="./img/bodega-aurrera-logo.png"
            />
          </div>
        </div>

        <div className="container justify-content-center d-flex">
          <div className="row">
            <SupermarketOffer
              offerText="2x1 en Shampoo Head And Shoulders"
              buttonText="Visitar el sitio web"
              validity=" 31st December 2024"
              imgRoute="./img/walmart.png"
            />
          </div>
        </div>

        <div className="container justify-content-center d-flex">
          <div className="row">
            <SupermarketOffer
              offerText="4x2 en artículos de higiene personal"
              buttonText="Visitar el sitio web"
              validity=" 31st December 2024"
              imgRoute="./img/bodega-aurrera-logo.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
