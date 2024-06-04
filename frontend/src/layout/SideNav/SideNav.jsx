import "./sidenav.css";
import { useNavigate } from "react-router-dom";

const SideNav = (props) => {
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
          className={`section-redirection ${
            props.selected === "introduction" ? "sidenav-selected" : ""
          }`}
        >
          Introduction
        </li>
        <li
          onClick={() => {
            handleRedirection("/PartiePrenantes");
          }}
          className={`section-redirection ${
            props.selected === "partiesprenantes" ? "sidenav-selected" : ""
          }`}
        >
          Parties prenantes
        </li>
        <li
          onClick={() => {
            handleRedirection("/Finalités");
          }}
          className={`section-redirection ${
            props.selected === "finalités" ? "sidenav-selected" : ""
          }`}
        >
          Finalités des données traitées
        </li>
        <li
          onClick={() => {
            handleRedirection("/PersonnesConcernées");
          }}
          className={`section-redirection ${
            props.selected === "pc" ? "sidenav-selected" : ""
          }`}
        >
          Personnes concernées par le traitement
        </li>
        <li
          onClick={() => {
            handleRedirection("/Données");
          }}
          className={`section-redirection ${
            props.selected === "données" ? "sidenav-selected" : ""
          }`}
        >
          Catégories de données traitées
        </li>
        <li
          onClick={() => {
            handleRedirection("/Destinataires");
          }}
          className={`section-redirection ${
            props.selected === "destinataires" ? "sidenav-selected" : ""
          }`}
        >
          Destinataire des données
        </li>
        <li
          onClick={() => {
            handleRedirection("/BaseLégale");
          }}
          className={`section-redirection ${
            props.selected === "baselégale" ? "sidenav-selected" : ""
          }`}
        >
          Base Légale
        </li>
        <li
          onClick={() => {
            handleRedirection("/Sécurité");
          }}
          className={`section-redirection ${
            props.selected === "sécurité" ? "sidenav-selected" : ""
          }`}
        >
          Sécurité des données
        </li>
        <li
          onClick={() => {
            handleRedirection("/Recap");
          }}
          className={`section-redirection ${
            props.selected === "recap" ? "sidenav-selected" : ""
          }`}
        >
          Récapitulatif
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
