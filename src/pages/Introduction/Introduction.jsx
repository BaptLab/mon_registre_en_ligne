import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";

import creationDatePrecision from "../../datas/tooltip/autres/creationPrecision.json";
import data from "../../datas/tooltip/definitionsCnil/definitions.json";
import Input from "../../components/Inputs/Input";

import "./introduction.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Introduction = () => {
  /* const [isContentVisible, setContentVisible] = useState(false);

  // Simulate the appearance of content after a delay (you can adjust the delay as needed)
  useEffect(() => {
    setTimeout(() => {
      setContentVisible(true);
    }, 300); // Delay in milliseconds
  }, []);
 */

  const formData = useSelector((state) => state.formData);
  console.log("formData : ", formData);

  return (
    <>
      <Header />
      <main>
        <SideNav selected="introduction" />
        <div id="form-container">
          <section id="introduction-form" className="form">
            <h2 id="introduction-title" className="page-title">
              Introduction
            </h2>
            <Input
              label="Nom du traitement"
              placeholder="Fichier client"
              id="traitmentName"
              type="text"
              tooltipContent={data.traitement}
            />
            <div className="creation-date-section">
              <Input
                label="Date de création du traitement"
                placeholder="01/01/1999"
                id="traitmentCreationDate"
                type="Date"
              />
              <Input
                label="Précision(s) sur la date de création du traitement"
                placeholder="à compter du lancement du logiciel x"
                id="traitmentCreationDatePrecision"
                type="text"
                tooltipContent={creationDatePrecision}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Introduction;
