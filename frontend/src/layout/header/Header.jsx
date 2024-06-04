import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { switchOptionalFields } from "../../redux/slices/optionalFieldSlice";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Header = () => {
  const optionalFieldsValue = useSelector((state) => state.optionalFields);
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
        <FormControlLabel
          control={
            <Switch
              color="default"
              onChange={() => {
                dispatch(switchOptionalFields());
              }}
              checked={optionalFieldsValue ? false : true}
            />
          }
          label="Afficher les champs facultatifs"
        />
      </div>
    </header>
  );
};

export default Header;
