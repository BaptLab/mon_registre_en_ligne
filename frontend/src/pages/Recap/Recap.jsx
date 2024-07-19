import React from "react";
import generatePDF from "../../functions/generatePDF";
import Footer from "../../layout/Footer/Footer";
import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import { useSelector } from "react-redux";
import "./recap.css";
import { createFiche } from "../../api/fiche";
import { mapFormDataToFiche } from "../../api/apiUtils";

const Recap = () => {
  const formData = useSelector((state) => state.formData);
  const currentUser = localStorage.getItem("user");
  const userId = JSON.parse(currentUser).id;
  console.log(formData);

  const handleSaveFiche = async () => {
    try {
      // Map formData to fiche structure
      console.log("data to format", formData);
      const ficheObject = mapFormDataToFiche(formData);
      console.log("data formatted:", ficheObject);
      // Save fiche to backend
      await createFiche(userId, ficheObject);
      console.log("Fiche saved successfully");
    } catch (error) {
      console.error("Error saving fiche:", error);
    }
  };

  const dataTable = formData.map((page) => {
    if (
      page &&
      page.data &&
      Object.keys(page.data).length > 0
    ) {
      return (
        <tbody key={`page-${page.page}`}>
          <tr>
            <th colSpan="2">{page.name}</th>
          </tr>
          {Object.keys(page.data).map((data) => {
            const dataItem = page.data[data];
            return (
              <tr key={`page-${page.page}-${data}`}>
                <td className="recap-row-text recap-label">
                  {dataItem.label}
                </td>
                <td className="recap-row-text recap-value">
                  {typeof dataItem.value === "boolean"
                    ? dataItem.value
                      ? "oui"
                      : "non"
                    : dataItem.value || "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      );
    } else {
      // Display a row with a placeholder text when no data is available
      return (
        <tbody key={`page-${page.page}`}>
          <tr>
            <th colSpan="2">{page.name}</th>
          </tr>
          <tr>
            <td colSpan="2">Aucune donnée renseigné</td>
          </tr>
        </tbody>
      );
    }
  });

  return (
    <>
      <Header />
      <main>
        <SideNav selected="recap" />

        <div
          className="recap-table-container"
          id="form-container"
        >
          <section id="recap-table" className="form">
            <h2 id="recap-title" className="page-title">
              Récapitulatif
            </h2>
            <span
              id="recap-subtitle"
              className="page-subtitle"
            >
              Vous retrouverez ici un récapitulatif de
              l'ensemble des champs que vous avez renseigné.{" "}
              <br />
              Veillez à bien vérifier que chaque champ a été
              rempli correctement avant d'effectuer
              l'exportation de la fiche de traitement.
            </span>
            <table border="1">{dataTable}</table>
            <div className="btn-container">
              <button
                className="btn"
                onClick={() => generatePDF(formData)}
              >
                Export to PDF
              </button>
              <button
                className="btn"
                onClick={() => console.table(formData)}
              >
                Print table
              </button>
            </div>
            <button
              onClick={handleSaveFiche}
              id="saveFiche-btn"
            >
              Save
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Recap;
