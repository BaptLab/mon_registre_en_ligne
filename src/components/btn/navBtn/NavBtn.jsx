import "./navbtn.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NavBtn = (props) => {
  const navigate = useNavigate();

  let handleRedirection = (url) => {
    navigate(url);
  };

  return props.doubleBtn ? (
    <div className="nav-btn-container double-btn-container">
      <button
        className={`btn nav-btn next-page-btn`}
        onClick={() => {
          handleRedirection(props.previousDirection);
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} /> {props.previousDirectionText}
      </button>
      <button
        className={`btn nav-btn previous-page-btn`}
        onClick={() => {
          handleRedirection(props.nextDirection);
        }}
      >
        {props.nextDirectionText} <FontAwesomeIcon icon={faArrowRight} />{" "}
      </button>
    </div>
  ) : (
    <div className="nav-btn-container next-btn-container">
      <button
        className={`btn nav-btn next-page-btn`}
        onClick={() => {
          handleRedirection(props.nextDirection);
        }}
      >
        {props.nextDirectionText} <FontAwesomeIcon icon={faArrowRight} />{" "}
      </button>
    </div>
  );
};

export default NavBtn;
