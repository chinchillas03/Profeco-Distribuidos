import { Link } from "react-router-dom";
import MenuOption from "../menu-option/MenuOption";

export default function Navbar() {
  return (
    <>
      <div className="container d-flex">
        <div className="row col-12">
          <div className="container">
            <div className="row">
              <div className="options-group col-6">
                <Link to={"/"}>
                  <MenuOption label="Ver ofertas" state="active" />
                </Link>
              </div>

              <div className="options-group col-6">
                <Link to={"/markets"}>
                  <MenuOption label="Ver supermercados" state="unactive" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
