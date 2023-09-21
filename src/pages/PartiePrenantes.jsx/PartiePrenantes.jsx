import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import "./partieprenantes.css";
import Input from "../../components/Inputs/Input";
import data from "../../datas/tooltip/definitionsCnil/definitions.json";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";
import NavBtn from "../../components/btn/navBtn/NavBtn";
import Footer from "../../layout/Footer/Footer";

const PartiePrenantes = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav selected="partiesprenantes" />
        <div id="form-container">
          <section id="partiesPrenantes-form" className="form">
            <h2 id="partiesPrenantes-title" className="page-title">
              Parties prenantes au traitement
            </h2>
            <Input
              page="partiePrenantesPageData"
              label="Responsable du traitement"
              placeholder="Jean Dupont (responsable informatique)"
              id="RTName"
              type="text"
              tooltipContent={data.RT}
            />
            <Input
              page="partiePrenantesPageData"
              label="Délégué à la protection des données personnelles (DPO)"
              placeholder="Jean Dupont (responsable informatique)"
              id="DPOName"
              type="text"
              tooltipContent={data.DPO}
            />
            <Input
              page="partiePrenantesPageData"
              label="Représentant du responsable du traitement"
              placeholder="Jeanne Smith (responsable juridique)"
              id="RRTName"
              type="text"
              tooltipContent={data.RRT}
            />
            <Input
              page="partiePrenantesPageData"
              label="Corresponsable de traitement"
              placeholder="Henry Niel (Directeur général de Lesbouchons.com)"
              id="CoRTName"
              type="text"
              tooltipContent={data["Co-RT"]}
            />
          </section>
          <NavBtn
            previousDirectionText="Introduction"
            nextDirectionText="Finalités des données traitées"
            doubleBtn={true}
            nextDirection="/Finalités"
            previousDirection="/Introduction"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PartiePrenantes;
