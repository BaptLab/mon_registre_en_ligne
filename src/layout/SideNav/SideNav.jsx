import "./sidenav.css";

import { useNavigate } from "react-router-dom";
import "./sidenav.css";

const SideNav = () => {
  const navigate = useNavigate();

  let handleRedirection = (url) => {
    navigate(url);
  };

  return (
    <nav id="side-nav">
      <ul className="section-redirection-container">
        <li
          onClick={() => {
            handleRedirection("/Introduction");
          }}
          className="section-redirection"
        >
          Introduction
        </li>
        <li
          onClick={() => {
            handleRedirection("/PartiePrenantes");
          }}
          className="section-redirection"
        >
          Parties prenantes
        </li>
        <li
          onClick={() => {
            handleRedirection("/Finalités");
          }}
          className="section-redirection"
        >
          Finalités des données traitées
        </li>
        <li
          onClick={() => {
            handleRedirection("/PersonnesConcernées");
          }}
          className="section-redirection"
        >
          Personnes concernées par le traitement
        </li>
        <li
          onClick={() => {
            handleRedirection("/Données");
          }}
          className="section-redirection"
        >
          Catégories de données traitées
        </li>
        <li
          onClick={() => {
            handleRedirection("/Destinataires");
          }}
          className="section-redirection"
        >
          Destinataire des données
        </li>
        <li
          onClick={() => {
            handleRedirection("/Sécurité");
          }}
          className="section-redirection"
        >
          Sécurité des données
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
