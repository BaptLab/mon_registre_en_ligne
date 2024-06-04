import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchValue } from "../../redux/slices/checkboxSlice";

import TooltipContainer from "../Tooltip/TooltipContainer/TooltipContainer";
import TooltipContent from "../Tooltip/TooltipContent/TooltipContent";

import "./input.css";
import { updateValue } from "../../redux/slices/formDataSlice";

const Input = (props) => {
  const optionalFieldsValue = useSelector((state) => state.optionalFields);

  const pageName = props.page;
  const dataId = props.id;
  const dispatch = useDispatch();
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const onMouseEnter = () => {
    setTooltipVisibility(true);
  };

  const onMouseLeave = () => {
    setTooltipVisibility(false);
  };

  // Retrieve the value from Redux state
  const formDataState = useSelector((state) => state.formData);
  const checkboxValue = useSelector((state) => state.dataCheckbox);

  // Maintain local state for the input field value
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Find the object in formData that matches the pageName
    const formDataObj = formDataState.find((pageData) => pageData.page === pageName);

    // Update the local input value with the value from Redux state
    const valueFromRedux = formDataObj?.data[dataId]?.value || "";
    setInputValue(valueFromRedux);
  }, [formDataState, pageName, dataId]);

  const handleInputValue = (e) => {
    if (props.type === "checkbox") {
      dispatch(switchValue({ id: `${props.id}` }));
      const currentCheckbox = props.id;
      dispatch(
        updateValue({
          page: pageName, // Pass the current page identifier
          id: props.id,
          value: !checkboxValue[currentCheckbox],
          label: props.label,
        })
      );
    } else if (props.type === "radio") {
      dispatch(
        updateValue({
          page: pageName, // Pass the current page identifier
          id: "baseLégale",
          value: props.id,
          label: props.label,
        })
      );
    } else {
      // Update the local state with the new value
      const newValue = e.target.value;

      setInputValue(newValue);
      // Dispatch the new value to Redux
      dispatch(
        updateValue({
          page: pageName, // Pass the current page identifier
          id: props.id,
          value: newValue,
          label: props.label,
        })
      );
    }
  };

  return (
    <div
      id={`${props.id}-input-container`}
      className={`input-container ${props.type}-input-container ${
        props.optional && optionalFieldsValue ? "hide" : "show"
      } `}
    >
      {/* Conditionally render the label and tooltip section */}
      {props.label && (
        <div
          id={`${props.id}-label-and-tooltip-section`}
          className="label-and-tooltip-section"
        >
          <div className="label-container">
            <label
              htmlFor={`${props.id}-input`}
              id={`${props.id}-label`}
              className={`input-label ${props.type}-input-label`}
            >
              {props.label}
            </label>
            {!props.optional && <span className="optional-star"> *</span>}
          </div>
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
        page={props.page}
        name={props.name}
        type={props.type}
        id={`${props.id}-input`}
        className={`input ${props.type}-input`}
        placeholder={props.placeholder}
        value={inputValue} // Use the local state for input value
        onChange={(e) => {
          handleInputValue(e);
        }}
      />
    </div>
  );
};

export default Input;
