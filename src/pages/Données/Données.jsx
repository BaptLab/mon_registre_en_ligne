import "./données.css";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Input from "../../components/Inputs/Input";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import DeleteBtn from "../../components/btn/deleteBtn/DeleteBtn";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavBtn from "../../components/btn/navBtn/NavBtn";
import Footer from "../../layout/Footer/Footer";

const Données = () => {
  const checkboxValues = useSelector((state) => state.dataCheckbox);

  // Define state variables for other input sections
  const [civData, setCivData] = useState(1);
  const [viePersoDataCount, setViePersoDataCount] = useState(1);
  const [ecoDataCount, setEcoDataCount] = useState(1);
  const [connexionDataCount, setConnexionDataCount] = useState(1);
  const [localisationDataCount, setLocalisationDataCount] = useState(1);
  const [NIRDataCount, setNIRDataCount] = useState(1);

  // Define functions to add and delete data fields for other input sections
  const addCivData = () => {
    setCivData(civData + 1);
  };

  const deleteCivData = () => {
    setCivData(Math.max(1, civData - 1));
  };

  const addViePersoData = () => {
    setViePersoDataCount(viePersoDataCount + 1);
  };

  const deleteViePersoData = () => {
    setViePersoDataCount(Math.max(1, viePersoDataCount - 1));
  };

  const addEcoData = () => {
    setEcoDataCount(ecoDataCount + 1);
  };

  const deleteEcoData = () => {
    setEcoDataCount(Math.max(1, ecoDataCount - 1));
  };

  const addConnexionData = () => {
    setConnexionDataCount(connexionDataCount + 1);
  };

  const deleteConnexionData = () => {
    setConnexionDataCount(Math.max(1, connexionDataCount - 1));
  };

  const addLocalisationData = () => {
    setLocalisationDataCount(localisationDataCount + 1);
  };

  const deleteLocalisationData = () => {
    setLocalisationDataCount(Math.max(1, localisationDataCount - 1));
  };

  const addNIRData = () => {
    setNIRDataCount(NIRDataCount + 1);
  };

  const deleteNIRData = () => {
    setNIRDataCount(Math.max(1, NIRDataCount - 1));
  };

  const [ethData, setethDataCount] = useState(1);
  const [politicData, setPoliticDataCount] = useState(1);
  const [religiousData, setReligiousDataCount] = useState(1);
  const [syndicalData, setSyndicalDataCount] = useState(1);
  const [biometricData, setBiometricDataCount] = useState(1);
  const [healthData, setHealthDataCount] = useState(1);
  const [sexualData, setSexualDataCount] = useState(1);
  const [convictionData, setConvictionDataCount] = useState(1);

  const addEthData = () => {
    setethDataCount(ethData + 1);
  };

  const deleteEthData = () => {
    setethDataCount(Math.max(1, ethData - 1));
  };
  const addPoliticData = () => {
    setPoliticDataCount(politicData + 1);
  };

  const deletePoliticData = () => {
    setPoliticDataCount(Math.max(1, politicData - 1));
  };

  const addReligiousData = () => {
    setReligiousDataCount(religiousData + 1);
  };

  const deleteReligiousData = () => {
    setReligiousDataCount(Math.max(1, religiousData - 1));
  };

  const addSyndicalData = () => {
    setSyndicalDataCount(syndicalData + 1);
  };

  const deleteSyndicalData = () => {
    setSyndicalDataCount(Math.max(1, syndicalData - 1));
  };

  const addHealthData = () => {
    setHealthDataCount(healthData + 1);
  };

  const deleteHealthData = () => {
    setHealthDataCount(Math.max(1, healthData - 1));
  };

  const addBiometricData = () => {
    setBiometricDataCount(biometricData + 1);
  };

  const deleteBiometricData = () => {
    setBiometricDataCount(Math.max(1, biometricData - 1));
  };

  const addSexualData = () => {
    setSexualDataCount(sexualData + 1);
  };

  const deleteSexualData = () => {
    setSexualDataCount(Math.max(1, sexualData - 1));
  };

  const addConvictionData = () => {
    setConvictionDataCount(convictionData + 1);
  };

  const deleteConvictionData = () => {
    setConvictionDataCount(Math.max(1, convictionData - 1));
  };

  return (
    <>
      <Header />
      <main>
        <SideNav selected="données" />
        <div id="form-container">
          <section id="data-form" className="form">
            <h2 id="data-title" className="page-title">
              Données personnelles traitées
            </h2>
            <section id="regular-data-form" className="form-part">
              <h2 id="data-subtitle" className="page-subtitle">
                Données personnelles sensibles
              </h2>
              <div className="data-input-section ">
                <div className="global-input-container data-input-container">
                  <Input
                    label="Etat civil, identité, données d'identitifaction, images, etc."
                    id="civData"
                    type="checkbox"
                  />
                  {checkboxValues.civData && (
                    <>
                      {Array.from({ length: civData }).map((_, index) => (
                        <Input
                          label={`Donnée d'identité ${index + 1}`}
                          id={`civData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Numéro de téléphone`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        {" "}
                        <AnotherBtn addAnElement={addCivData} text="+" />
                        <DeleteBtn deleteAnElement={deleteCivData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input label="Vie personnelle" id="viePersoData" type="checkbox" />
                  {checkboxValues.viePersoData && (
                    <>
                      {Array.from({ length: viePersoDataCount }).map((_, index) => (
                        <Input
                          label={`Donnée de vie personnelle ${index + 1}`}
                          id={`viePersoData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addViePersoData} text="+" />
                        <DeleteBtn deleteAnElement={deleteViePersoData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input
                    label="Informations d'ordre économique et financier"
                    id="ecoData"
                    type="checkbox"
                  />
                  {checkboxValues.ecoData && (
                    <>
                      {Array.from({ length: ecoDataCount }).map((_, index) => (
                        <Input
                          label={`Donnée d'ordre économique ${index + 1}`}
                          id={`ecoData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addEcoData} text="+" />
                        <DeleteBtn deleteAnElement={deleteEcoData} text="-" />
                      </div>
                    </>
                  )}
                </div>{" "}
                <div className="global-input-container" data->
                  <Input
                    label="Données de connexion"
                    id="connexionData"
                    type="checkbox"
                  />
                  {checkboxValues.connexionData && (
                    <>
                      {Array.from({ length: connexionDataCount }).map((_, index) => (
                        <Input
                          label={`Donnée de connexion ${index + 1}`}
                          id={`connexionData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addConnexionData} text="+" />
                        <DeleteBtn deleteAnElement={deleteConnexionData} text="-" />
                      </div>
                    </>
                  )}{" "}
                </div>{" "}
                <div className="global-input-container" data->
                  <Input
                    label="Données de localisation"
                    id="localisationData"
                    type="checkbox"
                  />
                  {checkboxValues.localisationData && (
                    <>
                      {Array.from({ length: localisationDataCount }).map((_, index) => (
                        <Input
                          label={`Donnée de localisation ${index + 1}`}
                          id={`localisationData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addLocalisationData} text="+" />
                        <DeleteBtn deleteAnElement={deleteLocalisationData} text="-" />
                      </div>
                    </>
                  )}
                </div>{" "}
                <div className="global-input-container">
                  {" "}
                  <Input
                    label="Numéro de Sécurité Sociale"
                    id="NIRData"
                    type="checkbox"
                    page="dataPageData"
                  />
                </div>
              </div>
            </section>
            <section id="sensible-data-form" className="form-part">
              <h2 id="data-subtitle" className="page-subtitle">
                Données personnelles sensibles
              </h2>
              <div className="data-input-section">
                <div className="global-input-container" data->
                  <Input
                    label="Données révélant l'origine raciale ou ethnique"
                    id="ethData"
                    type="checkbox"
                  />
                  {checkboxValues.ethData && (
                    <>
                      {Array.from({ length: ethData }).map((_, index) => (
                        <Input
                          label={`Donnée éthnique${index + 1}`}
                          id={`ethData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addEthData} text="+" />
                        <DeleteBtn deleteAnElement={deleteEthData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input label="Données politiques" id="politicData" type="checkbox" />
                  {checkboxValues.politicData && (
                    <>
                      {Array.from({ length: politicData }).map((_, index) => (
                        <Input
                          label={`Donnée politique ${index + 1}`}
                          id={`politicData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addPoliticData} text="+" />
                        <DeleteBtn deleteAnElement={deletePoliticData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input label="Données religieuses" id="religiousData" type="checkbox" />
                  {checkboxValues.religiousData && (
                    <>
                      {Array.from({ length: religiousData }).map((_, index) => (
                        <Input
                          label={`Donnée religieuse ${index + 1}`}
                          id={`religiousData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addReligiousData} text="+" />
                        <DeleteBtn deleteAnElement={deleteReligiousData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input label="Données syndicales" id="syndicalData" type="checkbox" />
                  {checkboxValues.syndicalData && (
                    <>
                      {Array.from({ length: syndicalData }).map((_, index) => (
                        <Input
                          label={`Donnée syndicale ${index + 1}`}
                          id={`syndicalData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addSyndicalData} text="+" />
                        <DeleteBtn deleteAnElement={deleteSyndicalData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input
                    label="Données biométriques"
                    id="biometricData"
                    type="checkbox"
                  />
                  {checkboxValues.biometricData && (
                    <>
                      {Array.from({ length: biometricData }).map((_, index) => (
                        <Input
                          label={`Donnée biométrique ${index + 1}`}
                          id={`biometricData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addBiometricData} text="+" />
                        <DeleteBtn deleteAnElement={deleteBiometricData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input label="Données de santé" id="healthData" type="checkbox" />
                  {checkboxValues.healthData && (
                    <>
                      {Array.from({ length: healthData }).map((_, index) => (
                        <Input
                          label={`Donnée de santé ${index + 1}`}
                          id={`healthData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addHealthData} text="+" />
                        <DeleteBtn deleteAnElement={deleteHealthData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input
                    label="Données à caractère sexuel"
                    id="sexualData"
                    type="checkbox"
                  />
                  {checkboxValues.sexualData && (
                    <>
                      {Array.from({ length: sexualData }).map((_, index) => (
                        <Input
                          label={`Donnée à caractère sexuel ${index + 1}`}
                          id={`sexualData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addSexualData} text="+" />
                        <DeleteBtn deleteAnElement={deleteSexualData} text="-" />
                      </div>
                    </>
                  )}
                </div>
                <div className="global-input-container" data->
                  <Input
                    label="Données de condamnation pénale"
                    id="convictionData"
                    type="checkbox"
                  />
                  {checkboxValues.convictionData && (
                    <>
                      {Array.from({ length: convictionData }).map((_, index) => (
                        <Input
                          label={`Donnée relative à une condamnation pénale ${index + 1}`}
                          id={`convictionData${index + 1}`}
                          optional={true}
                          key={index}
                          page="dataPageData"
                          type="text"
                          placeholder={`Some placeholder`}
                        />
                      ))}
                      <div className="add-and-delete-btn-section">
                        <AnotherBtn addAnElement={addConvictionData} text="+" />
                        <DeleteBtn deleteAnElement={deleteConvictionData} text="-" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          </section>
          <NavBtn
            previousDirectionText="Personnes concernées par le traitement"
            nextDirectionText="Destinataire des données"
            doubleBtn={true}
            nextDirection="/Destinataires"
            previousDirection="/PersonnesConcernées"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Données;
