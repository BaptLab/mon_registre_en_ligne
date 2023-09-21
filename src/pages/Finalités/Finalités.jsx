import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import "./finalités.css";
import Input from "../../components/Inputs/Input";
import definitions from "../../datas/tooltip/definitionsCnil/definitions.json";
import { useState } from "react";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import DeleteBtn from "../../components/btn/deleteBtn/DeleteBtn";
import NavBtn from "../../components/btn/navBtn/NavBtn";
import Footer from "../../layout/Footer/Footer";
const Finalités = () => {
  const [finalitéCount, setFinalitéCount] = useState(1);

  const addAFinalité = () => {
    setFinalitéCount(finalitéCount + 1);
  };

  const deleteAFinalité = () => {
    setFinalitéCount(finalitéCount - 1);
  };

  return (
    <>
      <Header />
      <main>
        <SideNav selected="finalités" />
        <div id="form-container">
          <section id="finalité-form" className="form">
            <h2 id="finalités-title" className="page-title">
              Finalités des données traitées
            </h2>
            <div className="finalité-global-container ">
              <Input
                page="finalityPageData"
                label="Finalité principale"
                placeholder="Gestion de la paie"
                id="finalitéPrincipale"
                type="text"
                tooltipContent={definitions.finalité}
              />
              {Array.from({ length: finalitéCount }).map((_, index) => (
                <Input
                  key={index}
                  page="finalityPageData"
                  label={`Sous-finalité ${index + 1}`} // Label it as needed
                  placeholder={`Calcul des rémunérations`} // Placeholder it as needed
                  id={`sousFinalité${index + 1}`} // Unique ID for each input
                />
              ))}
            </div>{" "}
            <div className="add-and-delete-btn-section">
              <AnotherBtn addAnElement={addAFinalité} text="Ajouter une sous-finalité" />
              <DeleteBtn
                deleteAnElement={deleteAFinalité}
                text="Supprimer une sous-finalité"
              />
            </div>
          </section>
          <NavBtn
            previousDirectionText="Parties prenantes"
            nextDirectionText="Personnes concernées par le traitement"
            doubleBtn={true}
            nextDirection="/PartiePrenantes"
            previousDirection="/PersonnesConcernées"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Finalités;
