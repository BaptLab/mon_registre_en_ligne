import generatePDF from "../../functions/generatePDF";
import Footer from "../../layout/Footer/Footer";
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
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              generatePDF(formData);
            }}
          >
            {" "}
            Export to PDF
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Recap;
