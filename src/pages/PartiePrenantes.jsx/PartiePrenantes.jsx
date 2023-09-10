import SideNav from "../../layout/SideNav/SideNav";
import Header from "../../layout/header/Header";
import "./partieprenantes.css";
import Input from "../../components/Inputs/Input";
import data from "../../datas/tooltip/definitionsCnil/definitions.json";
import AnotherBtn from "../../components/btn/anotherBtn/AnotherBtn";

const PartiePrenantes = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <div id="form-container">
          <section id="partiesPrenantes-form" className="form">
            <h2 id="partiesPrenantes-title" className="page-title">
              Parties prenantes au traitement
            </h2>
            <Input
              label="Responsable du traitement"
              placeholder="Jean Dupont (responsable informatique)"
              id="RTName"
              type="text"
              tooltipContent={data.RT}
            />
            <Input
              label="Délégué à la protection des données personnelles (DPO)"
              placeholder="Jean Dupont (responsable informatique)"
              id="DPOname"
              type="text"
              tooltipContent={data.DPO}
            />
            <Input
              label="Représentant du responsable du traitement"
              placeholder="Jeanne Smith (responsable juridique)"
              id="RRTname"
              type="text"
              tooltipContent={data.RRT}
            />
            <Input
              label="Corresponsable de traitement"
              placeholder="Henry Niel (Directeur général de Lesbouchons.com)"
              id="Co-RTname"
              type="text"
              tooltipContent={data["Co-RT"]}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default PartiePrenantes;
