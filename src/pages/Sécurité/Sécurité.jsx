import "./sécurité.css";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Input from "../../components/Inputs/Input";
import definitions from "../../datas/tooltip/definitionsCnil/definitions.json";
import { useState } from "react";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import DeleteBtn from "../../components/btn/deleteBtn/DeleteBtn";

const Sécurité = () => {
  const [securityCount, setSecurityCount] = useState(1);

  const addSecurityData = () => {
    setSecurityCount(securityCount + 1);
  };

  const deleteSecurityData = () => {
    setSecurityCount(Math.max(1, securityCount - 1));
  };
  return (
    <>
      <Header />
      <main>
        <SideNav selected="sécurité" />
        <div id="form-container">
          <section id="security-form" className="form">
            <h2 id="security-title" className="page-title">
              Sécurité des données
            </h2>
            {Array.from({ length: securityCount }).map((_, index) => (
              <div className="security-global-container">
                <h3 className="security-title inputs-title">
                  Mesure de sécurité {index + 1}
                </h3>
                <div className="security-container global-input-container">
                  <Input
                    key={index}
                    label={`Type de mesure de sécurité`}
                    placeholder={`Protection des logiciels, sauvegarde des données, etc.`}
                    id={`security-${index + 1}`}
                    tooltipContent={definitions.security}
                  />
                  <Input
                    key={index}
                    label={`Précisions sur le type mesure de sécurité`}
                    id={`security-precisions-${index + 1}`}
                  />
                </div>
              </div>
            ))}
            <AnotherBtn
              addAnElement={addSecurityData}
              text="Ajouter une mesure de sécurité"
            />
            <DeleteBtn
              deleteAnElement={deleteSecurityData}
              text="Supprimer une mesure de sécurité"
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default Sécurité;
