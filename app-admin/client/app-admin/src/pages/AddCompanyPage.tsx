import React from "react";
import Header from "../components/header/Header.tsx";
import SeparationBar from "../components/separation-bar/SeparationBar.tsx";
import CreateCompanyForm from "../components/create-company-form/CreateCompanyForm.tsx"


const AddCompanyPage = () => {
  return (
    <div>
      <header>
        <Header />
        <SeparationBar/>
      </header>
      <body>
        <CreateCompanyForm/>

      </body>
    </div>
  );
};

export default AddCompanyPage;
