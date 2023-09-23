import React from "react";
import generatePDF from "../../functions/generatePDF";
import Footer from "../../layout/Footer/Footer";
import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import { useSelector } from "react-redux";

const Recap = () => {
  const formData = useSelector((state) => state.formData);

  // Create a function to render a section of the table
  const renderSection = (section) => {
    const rows = [];
    rows.push(
      <tr key={`header-${section.name}`}>
        <th colSpan="2">{section.name}</th>
      </tr>
    );

    if (formData[section.key]) {
      Object.entries(formData[section.key].data).forEach(([key, value]) => {
        rows.push(
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
        );
      });
    }

    return rows;
  };

  const sectionsToRender = Object.entries(formData).map(([key, section]) => ({
    name: section.name,
    key,
  }));

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
              Veillez à bien vérifier que chaque champ a été rempli correctement avant
              d'effectuer l'exportation de la fiche de traitement.
            </span>
            <table border="1">
              <tbody>{sectionsToRender.map((section) => renderSection(section))}</tbody>
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
