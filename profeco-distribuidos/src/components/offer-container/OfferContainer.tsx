import SupermarketOffer from "./SupermarketOffer";

export default function OfferContainer() {
  return (
    <>
      <div className="offers container col-4 ">
        <div className=" row justify-content-center d-flex">
     
            <SupermarketOffer
              offerText="15% de descuento en artículos de limpieza"
              buttonText="Visitar el sitio web"
              validity="31st December 2024"
              imgRoute="./img/bodega-aurrera-logo.png"
            />
     
        </div>

        <div className="row justify-content-center d-flex">
        
            <SupermarketOffer
              offerText="2x1 en Shampoo Head And Shoulders"
              buttonText="Visitar el sitio web"
              validity=" 31st December 2024"
              imgRoute="./img/walmart.png"
            />
  
        </div>

        <div className="row justify-content-center ">
        
            <SupermarketOffer
              offerText="4x2 en artículos de higiene personal"
              buttonText="Visitar el sitio web"
              validity=" 31st December 2024"
              imgRoute="./img/bodega-aurrera-logo.png"
            />
    
        </div>
      </div>
    </>
  );
}
