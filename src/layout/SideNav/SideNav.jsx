import "./sidenav.css";

const SideNav = () => {
  return (
    <nav id="side-nav">
      <ul className="section-redirection-container">
        <li className="section-redirection">Parties prenantes</li>
        <li className="section-redirection">Finalités des données traitées</li>
        <li className="section-redirection">Personnes concernées par le traitement</li>
        <li className="section-redirection">Catégories de données traitées</li>
        <li className="section-redirection">Destinataire des données</li>
        <li className="section-redirection">Transferts de données</li>
        <li className="section-redirection">Conservation des données</li>
        <li className="section-redirection">Sécurité des données</li>
      </ul>
    </nav>
  );
};

export default SideNav;
