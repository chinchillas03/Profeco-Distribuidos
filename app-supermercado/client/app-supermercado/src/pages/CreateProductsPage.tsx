import Header from "../components/header/Header";
import InputComponent from "../components/input-component/InputComponent";
import SeparationBar from "../components/separation-bar/SeparationBar";

export default function CreateProductsPage() {
  return (
    <>
      <Header />
      <SeparationBar />
      <div className="container  text-center py-5 ">
        <InputComponent label="Nombre del producto" />
        <InputComponent label="Descripción" />
        <InputComponent label="Precio" />
      </div>
    </>
  );
}
