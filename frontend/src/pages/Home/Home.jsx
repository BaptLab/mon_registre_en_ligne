import "./home.css";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";
import Footer from "../../layout/Footer/Footer";
import NavBtn from "../../components/btn/navBtn/NavBtn";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="homepage form" id="form-container">
          <section>
            <h1>Le registre des activités de traitement</h1>
            <br />
            <p>
              Le registre des activités de traitement permet
              de recenser vos traitements de données et de
              disposer d’une vue d’ensemble de ce que vous
              faites avec les données personnelles. Le
              registre est prévu par l’article 30 du RGPD.
              Il participe à la documentation de la
              conformité. Document de recensement et
              d’analyse, il doit refléter la réalité de vos
              traitements de données personnelles et vous
              permet d’identifier précisément :{" "}
            </p>

            <ul>
              <li>
                les parties prenantes (représentant,
                sous-traitants, co-responsables, etc.) qui
                interviennent dans le traitement des données
                ;
              </li>
              <li>les catégories de données traitées ;</li>
              <li>
                à quoi servent ces données (ce que vous en
                faites), qui accède aux données et à qui
                elles sont communiquées ;
              </li>
              <li>combien de temps vous les conservez ;</li>
              <li>comment elles sont sécurisées.</li>
            </ul>
            <p>
              Au-delà de la réponse à l’obligation prévue
              par l’article 30 du RGPD, le registre est un
              outil de pilotage et de démonstration de votre
              conformité au RGPD. <br />
              <br />
              Il vous permet de documenter vos traitements
              de données et de vous poser les bonnes
              questions : ai-je vraiment besoin de cette
              donnée dans le cadre de mon traitement ?
              Est-il pertinent de conserver toutes les
              données aussi longtemps ? Les données
              sont-elles suffisamment protégées ? Etc.
              <br />
              <br /> Sa création et sa mise à jour sont
              ainsi l’occasion d’identifier et de
              hiérarchiser les risques au regard du RGPD.
              Cette étape essentielle vous permettra d’en
              déduire un plan d’action de mise en conformité
              de vos traitements aux règles de protection
              des données.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
