import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  let handleRedirection = (url) => {
    navigate(url);
  };
  return (
    <header>
      <h1
        onClick={() => {
          handleRedirection("/");
        }}
      >
        Mon registre de traitement RGPD en ligne
      </h1>
    </header>
  );
};

export default Header;
