import React from "react";
import generatePDF from "../../functions/generatePDF";
import Footer from "../../layout/Footer/Footer";
import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import "./recap.css";
import { useSelector } from "react-redux";

const Recap = () => {
  const formData = useSelector((state) => state.formData);

  // Create an array of section labels and their corresponding data keys
  const sections = [
    { label: "Introduction", key: "introductionPageData" },
    { label: "Parties prenantes", key: "partiePrenantesPageData" },
    { label: "Finalités des données traitées", key: "finalityPageData" },
    {
      label: "Personnes concernées par le traitement",
      key: "personnesConcernéesPageData",
    },
    { label: "Catégories de données traitées", key: "dataPageData" },
    { label: "Destinataires des données", key: "destinatairePageData" },
    { label: "Base légale", key: "baseLégalePageData" },
    { label: "Sécurité des données", key: "securityPageData" },
  ];

  const sectionLabels = sections.map((section) => section.label);

  // Create a reusable function to render a section of the table
  const renderSection = (section) => (
    <>
      <tr>
        <th colSpan="2">{section.label}</th>
      </tr>
      {formData[section.key] &&
        Object.entries(formData[section.key]).map(([key, value]) => (
          <tr key={key}>
            <td>{value.label}</td>
            <td>
              {typeof value.value === "boolean"
                ? value.value
                  ? "yes"
                  : "no"
                : value.value}
            </td>
          </tr>
        ))}
    </>
  );

  return (
    <>
      <Header />
      <main>
        <SideNav selected="recap" />

        <div className="recap-table-container" id="form-container">
          <section id="recap-table" className="form">
            <h2 id="recap-title" className="page-title">
              Récapitulatif
            </h2>
            <span id="recap-subtitle" className="page-subtitle">
              Vous retrouverez ici un récapitulatif de l'ensemble des champs que vous avez
              renseigné. <br />
              Veillez à bien vérifier que chaque champ à été rempli correctement avant
              d'effectuer l'exportation de la fiche de traitement.
            </span>
            <table border="1">
              <tbody>{sections.map((section) => renderSection(section))}</tbody>
            </table>
          </section>

          <div className="btn-container">
            <button
              className="btn"
              onClick={() => {
                generatePDF(formData);
              }}
            >
              Export to PDF
            </button>
            <button
              className="btn"
              onClick={() => {
                console.table(formData);
              }}
            >
              Print table
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Recap;
