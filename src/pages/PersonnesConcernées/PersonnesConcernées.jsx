import "./personnesconcernées.css";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Input from "../../components/Inputs/Input";
import definitions from "../../datas/tooltip/definitionsCnil/definitions.json";
import { useState } from "react";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import DeleteBtn from "../../components/btn/deleteBtn/DeleteBtn";
const PersonnesConcernées = () => {
  const [PCcategoryCount, setPCcategoryCount] = useState(1);

  const addaPCcategory = () => {
    setPCcategoryCount(PCcategoryCount + 1);
  };

  const deleteaPCcategory = () => {
    setPCcategoryCount(PCcategoryCount - 1);
  };

  return (
    <>
      <Header />
      <main>
        <SideNav />
        <div id="form-container">
          <section id="catégorieDePersonnes-form" className="form">
            <h2 id="catégorieDePersonnes-title" className="page-title">
              Personnes concernées par le traitement
            </h2>
            {Array.from({ length: PCcategoryCount }).map((_, index) => (
              <div className="PCcategory-container">
                <Input
                  key={index}
                  label={`Catégorie de personne ${index + 1}`}
                  placeholder={`Clients, patients...`}
                  id={`PCcategory-${index + 1}`}
                  tooltipContent={definitions.PC}
                />
                <Input
                  key={index}
                  label={`Précisions sur la catégorie de personne ${index + 1}`}
                  placeholder={`Clients faisant l'objet d'un dérogation d'ordre médical...`}
                  id={`PCcategory-precisions-${index + 1}`}
                />
              </div>
            ))}
            <AnotherBtn
              addAnElement={addaPCcategory}
              text="Ajouter une catégorie de personnes"
            />
            <DeleteBtn
              deleteAnElement={deleteaPCcategory}
              text="Supprimer une catégorie de personnes"
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default PersonnesConcernées;
