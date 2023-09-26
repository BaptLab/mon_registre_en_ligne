import jsPDF from "jspdf";
import "jspdf-autotable";

function generatePDF(formData) {
  const doc = new jsPDF();

  let yOffset = 20; // Initialize the Y offset for positioning content

  // Loop through each page in the formData array
  for (const page of formData) {
    const pageLabel = page.name; // Use the page name as the category label

    // Initialize an array to store the formatted data for this page
    const formattedData = [];

    // Loop through each field in the page
    for (const fieldId in page.data) {
      if (page.data.hasOwnProperty(fieldId)) {
        const label = page.data[fieldId].label; // Use label as the Label
        const value = page.data[fieldId].value;

        // Push the Label and Value as a sub-array
        formattedData.push([label, value]);
      }
    }

    // Set page label as a category title
    doc.setFontSize(16);
    doc.text(pageLabel, 10, yOffset);

    // Check if there's any data for this category
    if (formattedData.length > 0) {
      // Set table column headers
      const headers = ["Label", "Value"];

      // Set the table options
      const options = {
        startY: yOffset + 10,
        theme: "striped",
        headStyles: { fillColor: [30, 212, 145] },
        margin: { top: 10 },
      };

      // Add the table to the PDF document for this page
      doc.autoTable(headers, formattedData, options);

      // Update the Y offset for the next category
      yOffset = doc.autoTable.previous.finalY + 20;
    } else {
      // If no data for this category, add a placeholder message
      doc.setFontSize(14);
      doc.text(`No data available for ${pageLabel}`, 10, yOffset + 10);
      yOffset += 30; // Move down for the next category
    }
  }

  // Save the PDF with a desired filename
  doc.save("your_pdf_filename.pdf");
}

export default generatePDF;
