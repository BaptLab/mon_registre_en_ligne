import generatePDF from "../../functions/generatePDF";
import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import "./recap.css";
import { useSelector } from "react-redux";

const Recap = () => {
  const formData = useSelector((state) => state.formData);

  return (
    <>
      <Header />
      <main>
        <SideNav selected="recap" />
        <button
          className="btn"
          onClick={() => {
            generatePDF(formData);
          }}
        >
          Export to PDF
        </button>
      </main>
    </>
  );
};

export default Recap;
