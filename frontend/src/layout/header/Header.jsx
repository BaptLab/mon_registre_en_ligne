import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { switchOptionalFields } from "../../redux/slices/optionalFieldSlice";
import userIcon from "../../assets/icons/user.png";
import "./header.css";

const Header = () => {
  const optionalFieldsValue = useSelector(
    (state) => state.optionalFields
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const handleRedirection = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginElement = () => (
    <span
      id="connected-text"
      onClick={() => navigate("/login")}
    >
      Log in
    </span>
  );

  const connectedElement = () => (
    <span
      id="connected-text"
      onClick={() => navigate("/profile")}
    >
      {user.email}
    </span>
  );

  return (
    <header>
      <div id="center-header">
        <h1 onClick={() => handleRedirection("/")}>
          Mon registre de traitement RGPD en ligne
        </h1>
        <div className="switchFields-btn-container">
          <FormControlLabel
            control={
              <Switch
                color="default"
                onChange={() =>
                  dispatch(switchOptionalFields())
                }
                checked={optionalFieldsValue ? false : true}
              />
            }
            label="Afficher les champs facultatifs"
          />
        </div>
      </div>
      <div id="connected">
        <img
          alt="connected-user-icon"
          id="connected-icon"
          src={userIcon}
        />
        <span id="connected-text-container">
          {user ? connectedElement() : loginElement()}
        </span>
      </div>
    </header>
  );
};

export default Header;
