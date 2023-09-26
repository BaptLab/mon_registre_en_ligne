import React from "react";
import generatePDF from "../../functions/generatePDF";
import Footer from "../../layout/Footer/Footer";
import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import { useSelector } from "react-redux";

const Recap = () => {
  const formData = useSelector((state) => state.formData);
  console.log(formData);

  const dataTable = formData.map((page) => {
    if (page && page.data) {
      return (
        <tbody key={`page-${page.page}`}>
          <tr>
            <th colSpan="2">{page.name}</th>
          </tr>
          {Object.keys(page.data).map((data) => {
            const dataItem = page.data[data];
            return (
              <tr key={`page-${page.page}-${data}`}>
                <td>{dataItem.label}</td>
                <td>
                  {typeof dataItem.value === "boolean"
                    ? dataItem.value
                      ? "yes"
                      : "no"
                    : dataItem.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      );
    }
    return null; // Return null for cases where page or page.data is undefined
  });

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
            <table border="1">{dataTable}</table>
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
