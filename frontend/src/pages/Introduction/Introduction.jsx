import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import Footer from "../../layout/Footer/Footer";

import creationDatePrecision from "../../datas/tooltip/autres/creationPrecision.json";
import data from "../../datas/tooltip/definitionsCnil/definitions.json";
import Input from "../../components/Inputs/Input";

import "./introduction.css";
import { useEffect } from "react";
import { updateValue } from "../../redux/slices/formDataSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavBtn from "../../components/btn/navBtn/NavBtn";

const Introduction = () => {
  /* const [isContentVisible, setContentVisible] = useState(false);

  // Simulate the appearance of content after a delay (you can adjust the delay as needed)
  useEffect(() => {
    setTimeout(() => {
      setContentVisible(true);
    }, 300); // Delay in milliseconds
  }, []);
 */
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem(
      "traitementFiche"
    );

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.entries(parsedData).forEach(
        ([inputId, value]) => {
          dispatch(updateValue({ id: inputId, value }));
        }
      );
    }
  }, [dispatch]);
  const formData = useSelector((state) => state.formData);
  const optionalFieldsValue = useSelector(
    (state) => state.optionalFields
  );
  return (
    <>
      <Header />
      <main>
        <SideNav selected="introduction" />
        <div id="form-container">
          <section id="introduction-form" className="form">
            <h2
              id="introduction-title"
              className="page-title"
            >
              Introduction
            </h2>
            <Input
              page="introductionPageData"
              label="Nom du traitement"
              optional={false}
              placeholder="Fichier client"
              id="traitmentName"
              type="text"
              tooltipContent={data.traitement}
            />
            <div className="creation-date-section">
              <Input
                page="introductionPageData"
                label="Date de création du traitement"
                optional={true}
                placeholder="01/01/1999"
                id="traitmentCreationDate"
                type="Date"
              />
              <Input
                page="introductionPageData"
                label="Précision(s) sur la date de création du traitement"
                optional={true}
                placeholder="à compter du lancement du logiciel x"
                id="traitmentCreationDatePrecision"
                type="text"
                tooltipContent={creationDatePrecision}
              />
            </div>
          </section>
          <NavBtn
            nextDirectionText="Parties prenantes"
            nextDirection="/PartiePrenantes"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Introduction;
