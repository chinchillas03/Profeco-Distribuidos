import MenuOption from "./MenuOption";

export default function Navbar() {
  return (
    <>
      <div className="container d-flex">
        <div className="row col-12">
      
            <div className="container">
              <div className="row">
                <div className="options-group col-4">
                  <MenuOption label="Ver ofertas" state="active" />
                </div>
                <div className="options-group col-4">
                  <MenuOption label="Ver supermercados"  state="unactive" />
                </div>
                <div className="options-group col-4">
                  <MenuOption label="Ver productos"  state="unactive" />
                </div>
              </div>
            </div>
          </div>

      </div>
    </>
  );
}
