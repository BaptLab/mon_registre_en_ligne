import jsPDF from "jspdf";
import "jspdf-autotable";

function generatePDF(formData, categories) {
  const doc = new jsPDF();

  // Initialize an array to store the formatted data
  const formattedData = [];

  // Loop through each category label in the 'categories' array
  categories.forEach((categoryLabel) => {
    // Add a row for the category name
    formattedData.push([categoryLabel]);

    // Loop through each field in the category
    for (const field in formData[categoryLabel]) {
      if (formData[categoryLabel].hasOwnProperty(field)) {
        const label = formData[categoryLabel][field].label; // Use label as the Label
        const value = formData[categoryLabel][field].value;

        // Push the Label and Value as a sub-array
        formattedData.push([label, value]);
      }
    }
  });

  // Set table column headers
  const headers = ["Label", "Value"];

  // Set the table options
  const options = {
    startY: 20,
    theme: "striped",
    headStyles: { fillColor: [30, 212, 145] },
    margin: { top: 10 },
  };

  // Add the table to the PDF document
  doc.autoTable(headers, formattedData, options);

  // Save the PDF with a desired filename
  doc.save("your_pdf_filename.pdf");
}

export default generatePDF;
