import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchValue } from "../../redux/slices/checkboxSlice";

import TooltipContainer from "../Tooltip/TooltipContainer/TooltipContainer";
import TooltipContent from "../Tooltip/TooltipContent/TooltipContent";

import "./input.css";

const Input = (props) => {
  const dispatch = useDispatch();
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const onMouseEnter = () => {
    setTooltipVisibility(true);
  };

  const onMouseLeave = () => {
    setTooltipVisibility(false);
  };

  const handleInputValue = (e) => {
    dispatch(switchValue({ id: `${props.id}` }));
  };

  return (
    <div
      id={`${props.id}-input-container`}
      className={`input-container ${props.type}-input-container`}
    >
      {/* Conditionally render the label and tooltip section */}
      {props.label && (
        <div
          id={`${props.id}-label-and-tooltip-section`}
          className="label-and-tooltip-section"
        >
          <label
            htmlFor={`${props.id}-input`}
            id={`${props.id}-label`}
            className={`input-label ${props.type}-input-label`}
          >
            {props.label}
          </label>
          {props.tooltipContent && (
            <>
              <FontAwesomeIcon
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                icon={faCircleQuestion}
              />

              <TooltipContainer visibility={tooltipVisibility} id={props.id}>
                <TooltipContent id={props.id} content={props.tooltipContent} />
              </TooltipContainer>
            </>
          )}
        </div>
      )}
      <input
        type={props.type}
        id={`${props.id}-input`}
        className={`input ${props.type}-input`}
        placeholder={props.placeholder}
        onChange={(e) => {
          handleInputValue(e);
        }}
      />
    </div>
  );
};

export default Input;
