import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import TooltipContainer from "../../Tooltip/TooltipContainer/TooltipContainer";

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
    <div id={`${props}-input-container`} className="input-container text-input-container">
      <div
        id={`${props.id}-label-and-tooltip-section`}
        className="label-and-tooltip-section"
      >
        <label
          htmlFor={`${props.id}-input`}
          id={`${props}-label`}
          className={`input-label text-input-label`}
        >
          {props.label}
        </label>
        <FontAwesomeIcon
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          icon={faCircleQuestion}
        />
        <TooltipContainer
          className={`${tooltipVisibility ? "show" : "hide"}`}
          id={props.id}
        ></TooltipContainer>
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
