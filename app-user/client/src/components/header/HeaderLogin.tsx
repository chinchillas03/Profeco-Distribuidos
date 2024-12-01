export default function HeaderLogin() {
  return (
    <div>
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <div className="row w-100 align-items-center">
            <div className="col-12 text-center">
              <a className="navbar-brand" href="#">
                <img 
                  src={`/img/logo-profeco.png`} 
                  alt="Logo" 
                  className="img-fluid" 
                  style={{ maxWidth: "200px" }} // Ajusta el tamaño del logo aquí
                />
              </a>
            </div>
          </div>
        </div>
        {/* Línea divisoria debajo del logo */}
        <div style={{ backgroundColor: "#800000", height: "5px", width: "100%" }}></div>
      </nav>
    </div>
  );
}

