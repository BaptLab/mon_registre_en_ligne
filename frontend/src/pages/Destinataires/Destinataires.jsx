import "./destinataires.css";
import { useState } from "react";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Input from "../../components/Inputs/Input";
import definitions from "../../datas/tooltip/definitionsCnil/definitions.json";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import DeleteBtn from "../../components/btn/deleteBtn/DeleteBtn";
import { useSelector } from "react-redux";
import NavBtn from "../../components/btn/navBtn/NavBtn";
import Footer from "../../layout/Footer/Footer";

const Destinataires = () => {
  const trasnferCheckboxValue = useSelector((state) => state.dataCheckbox.transferData);

  const [destinataireTypeCount, setdestinataireTypeCount] = useState(1);

  const addaDestinataireType = () => {
    setdestinataireTypeCount(destinataireTypeCount + 1);
  };

  const deleteaDestinataireType = () => {
    setdestinataireTypeCount(destinataireTypeCount - 1);
  };

  const [transferData, setTransferDataCount] = useState(1);

  const addEthData = () => {
    setTransferDataCount(transferData + 1);
  };

  const deleteEthData = () => {
    setTransferDataCount(Math.max(1, transferData - 1));
  };
  return (
    <>
      <Header />
      <main>
        <SideNav selected="destinataires" />
        <div id="form-container">
          <div className="form ">
            <section id="destinataires-form" className="form-part">
              <h2 id="destinataires-title" className="page-title">
                Destinataires des données
              </h2>
              {Array.from({ length: destinataireTypeCount }).map((_, index) => (
                <div className="transfert-global-container">
                  <h3 className="transfer-title inputs-title">
                    Destinataire {index + 1}
                  </h3>
                  <div className="destinataires-container double-input-container">
                    <Input
                      key={index}
                      page="destinatairePageData"
                      label={`Type de destinataire ${index + 1}`}
                      placeholder={`Service interne, partenaire commercial...`}
                      id={`destinataireType-${index + 1}`}
                      tooltipContent={definitions.destinataire}
                    />
                    <Input
                      key={index}
                      page="destinatairePageData"
                      label={`Précisions sur le type de destinataire ${index + 1}`}
                      placeholder={`Direction financière, banque partenaire...`}
                      id={`destinataires-precisions-${index + 1}`}
                    />
                  </div>
                </div>
              ))}{" "}
              <div className="add-and-delete-btn-section">
                <AnotherBtn
                  addAnElement={addaDestinataireType}
                  text="Ajouter un destinataire"
                />
                <DeleteBtn
                  deleteAnElement={deleteaDestinataireType}
                  text="Supprimer un destinataire"
                />{" "}
              </div>
            </section>
            <section className="transfer-input-section form-part">
              <Input
                page="destinatairePageData"
                label="Les données font-elle l'objet d'un transfert en dehors de l'UE ?"
                id="transferData"
                type="checkbox"
              />
              {trasnferCheckboxValue && (
                <>
                  {Array.from({ length: transferData }).map((_, index) => (
                    <div className="transfert-global-container">
                      <h3 className="transfer-title">
                        Organisme destinataire (hors UE) {index + 1}
                      </h3>
                      <div className="transfert-input-container">
                        <Input
                          key={index}
                          placeholder={`Banque d'Andorre`}
                          page="destinatairePageData"
                          label="Destinataire"
                          id={`horsUEDestinataire${index + 1}`}
                        />
                        <Input
                          key={index}
                          placeholder={`Andorre`}
                          page="destinatairePageData"
                          label="Pays"
                          id={`horsUEPays${index + 1}`}
                        />
                        <Input
                          key={index}
                          placeholder={`Clauses contractuelles types (CCT)`}
                          page="destinatairePageData"
                          label="Type de garanties"
                          id={`horsUEGuaranties${index + 1}`}
                        />
                        <Input
                          key={index}
                          placeholder={`Contrat en date du 23/01/2018`}
                          page="destinatairePageData"
                          label="Liens vers la documentation"
                          id={`horsUEDocumentationLink${index + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                  <AnotherBtn addAnElement={addEthData} text="+" />
                  <DeleteBtn deleteAnElement={deleteEthData} text="-" />
                </>
              )}
            </section>
          </div>
          <NavBtn
            previousDirectionText="Catégorie de données traitées"
            nextDirectionText="Base Légale"
            doubleBtn={true}
            nextDirection="/BaseLégale"
            previousDirection="/Données"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Destinataires;
