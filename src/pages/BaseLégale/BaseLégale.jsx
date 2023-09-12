import "./baselégale.css";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import DeleteBtn from "../../components/btn/deleteBtn/DeleteBtn";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Input from "../../components/Inputs/Input";
import defintions from "../../datas/tooltip/definitionsCnil/definitions.json";

const BaseLégale = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav selected="baselégale" />
        <div id="form-container">
          <section id="data-form" className="form">
            <h2 id="data-title" className="page-title">
              Base légale du traitement
            </h2>
            <div className="data-input-section ">
              <Input
                label="Consentement"
                id="consentBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.consentBase}
              />
              <Input
                label="Contract"
                id="contractBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.contractBase}
              />
              <Input
                label="Obligation Légale"
                id="legalObligationBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.legalObligationBase}
              />
              <Input
                label="Sauvegarde des intérêts vitaux"
                id="vitalSaveBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.vitalSaveBase}
              />
              <Input
                label="Intérêt légitimes"
                id="legitimateInterestBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.legitimateInterestBase}
              />
              <Input
                label="Intérêt public"
                id="publicInterestBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.publicInterestBase}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BaseLégale;
