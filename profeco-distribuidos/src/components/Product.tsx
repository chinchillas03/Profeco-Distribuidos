export default function Guitar(){

    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src="/public/img/producto.png" alt="imagen producto" />
            </div>
            <div className="col-8">
            <h3 className="text-black fs-4 fw-bold">Nombre Producto</h3>
                <p>Producto desc</p>
                <p className="fw-black text-primary fs-3">$50.00</p>
                <button
                    type="button"
                    className="btn btn-dark w-80"
                >Agregar a favoritos</button>
            </div>
        </div>
    )

}