

export default function Header() {
    return (
      <div>
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <div className="row w-100 align-items-center">

              <div className="col-3">
                <a className="navbar-brand" href="#">
                  <img
                    src="img/logo-profeco.png"
                    alt="Logo"
                    className="img-fluid navbar-img-logo"
                    
                  />
                </a>
              </div>

              <div className="col-9 text-end">
                <a className="navbar-link" href="#">
                  <i className="bi bi-person-circle" style={{ fontSize: "3rem", color : "black" }}></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
