import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import TooltipContainer from "../../Tooltip/TooltipContainer/TooltipContainer";
import TooltipContent from "../../Tooltip/TooltipContent/TooltipContent";

import traitement from "../../../datas/tooltip/definitionsCnil/traitement.json";

import "./textinput.css";

const TextInput = (props) => {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const onMouseEnter = () => {
    setTooltipVisibility(true);
    console.log(tooltipVisibility);
  };

  const onMouseLeave = () => {
    setTooltipVisibility(false);
    console.log(tooltipVisibility);
  };

  return (
    <div
      id={`${props.id}-input-container`}
      className="input-container text-input-container"
    >
      <div
        id={`${props.id}-label-and-tooltip-section`}
        className="label-and-tooltip-section"
      >
        <label
          htmlFor={`${props.id}-input`}
          id={`${props.id}-label`}
          className={`input-label text-input-label`}
        >
          {props.label}
        </label>
        <FontAwesomeIcon
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          icon={faCircleQuestion}
        />
        <TooltipContainer visibility={tooltipVisibility} id={props.id}>
          <TooltipContent content={traitement} />
        </TooltipContainer>
      </div>
      <input
        type="text"
        id={`${props}-input`}
        className="input text-input"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default TextInput;
