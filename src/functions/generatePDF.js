import { jsPDF } from "jspdf";

const generatePDF = (formData) => {
  console.log(formData);
  const doc = new jsPDF();
  let yPosition = 10; // Initial vertical position

  // Function to add text with dynamic text box sizing and text wrapping
  function addTextWithWrapping(text, marginTop = 0, marginBottom = 0) {
    const maxWidth = 200; // Adjust this value as needed
    let textLines = doc.splitTextToSize(text, maxWidth);

    for (let i = 0; i < textLines.length; i++) {
      const textLine = textLines[i];
      const textHeight = doc.getTextDimensions(textLine).h;

      if (yPosition + textHeight > doc.internal.pageSize.getHeight()) {
        doc.addPage();
        yPosition = 10; // Reset the vertical position for the new page
      }

      yPosition += marginTop; // Add top margin
      doc.text(textLine, 10, yPosition);
      yPosition += textHeight + marginBottom; // Add bottom margin
    }
  }

  // Add the title with a larger font size
  doc.setFontSize(16);
  addTextWithWrapping("Fiche de traitement : " + formData.traitmentName, 0, 5);

  // Reset the font size to 12 for the following lines
  doc.setFontSize(14);
  addTextWithWrapping("Parties prenantes", 5, 5);

  doc.setFontSize(12);

  // Add other content using addTextWithWrapping function
  addTextWithWrapping(
    "Date de création du traitement : " + formData.traitmentCreationDate
  );
  addTextWithWrapping(
    "Précision(s) sur la date de création du traitement : " +
      formData.traitmentCreationDatePrecision
  );

  // Set the font size to 14 for "Parties prenantes" (including top and bottom margins)
  doc.setFontSize(14);
  addTextWithWrapping("Parties prenantes au traitement", 5, 5); // Add 10 units top and bottom margin

  // Reset the font size to 12 for the following lines
  doc.setFontSize(12);

  // Add other content using addTextWithWrapping function
  addTextWithWrapping("Responsable de traitement : " + formData.RTName);
  addTextWithWrapping("Délégué à la protection des données (DPO) : " + formData.DPOName);
  addTextWithWrapping("Représentant du responsable de traitement : " + formData.RRTName);
  addTextWithWrapping("Corresponsable de traitement : " + formData.CoRTName);

  // Set the font size to 13 for "Finalités des données traitées"
  doc.setFontSize(14);
  addTextWithWrapping("Finalités des données traitées", 5, 5);

  // Reset the font size to 12 for the following lines
  doc.setFontSize(12);

  addTextWithWrapping("Finalité principale : " + formData.finalitéPrincipale);

  doc.setFontSize(14);
  addTextWithWrapping("Personnes concernées par le traitement", 5, 5);

  // Reset the font size to 12 for the following lines
  doc.setFontSize(12);

  addTextWithWrapping("Catégorie de personne : " + formData.PCcategory1);
  addTextWithWrapping(
    "Précision sur la catégorie de personne : " + formData.PCcategoryPrecisions1
  );

  // You can continue adding more content using the addTextWithWrapping function.

  // Save the PDF with a filename based on the form data
  doc.save(formData.traitmentName + formData.traitmentCreationDate + ".pdf");
};

export default generatePDF;
