import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { switchOptionalFields } from "../../redux/slices/optionalFieldSlice";

const Header = () => {
  const optionalFieldsValue = useSelector((state) => state.optionalFields);
  console.log(optionalFieldsValue);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <div className="switchFields-btn-container">
        <button
          className="btn"
          onClick={() => {
            dispatch(switchOptionalFields());
          }}
        >
          Afficher les champs facultatifs
        </button>
      </div>
    </header>
  );
};

export default Header;
