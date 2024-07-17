import "./baselégale.css";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Input from "../../components/Inputs/Input";
import defintions from "../../datas/tooltip/definitionsCnil/definitions.json";
import NavBtn from "../../components/btn/navBtn/NavBtn";
import Footer from "../../layout/Footer/Footer";

const BaseLégale = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav selected="baselégale" />
        <div id="form-container">
          <section id="baseLégale-form" className="form">
            <h2 id="data-title" className="page-title">
              Base légale du traitement
            </h2>
            <div className="data-input-section ">
              <Input
                page="baseLégalePageData"
                label="Consentement"
                id="consentBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.consentBase}
              />
              <Input
                page="baseLégalePageData"
                label="Contrat"
                id="contractBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.contractBase}
              />
              <Input
                page="baseLégalePageData"
                label="Obligation Légale"
                id="legalObligationBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.legalObligationBase}
              />
              <Input
                page="baseLégalePageData"
                label="Sauvegarde des intérêts vitaux"
                id="vitalSaveBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.vitalSaveBase}
              />
              <Input
                page="baseLégalePageData"
                label="Intérêt légitimes"
                id="legitimateInterestBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.legitimateInterestBase}
              />
              <Input
                page="baseLégalePageData"
                label="Intérêt public"
                id="publicInterestBase"
                type="radio"
                name="baseLégale"
                tooltipContent={defintions.publicInterestBase}
              />
            </div>
          </section>
          <NavBtn
            previousDirectionText="Destinataires des données"
            nextDirectionText="Sécurité des données"
            doubleBtn={true}
            nextDirection="/Sécurité"
            previousDirection="/Destinataires"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BaseLégale;
