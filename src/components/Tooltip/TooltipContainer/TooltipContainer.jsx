import "./tooltipcontainer.css";

const TooltipContainer = (props) => {
  return (
    <div
      id={`${props}-tooltip-container`}
      className="tooltip-container text-tooltip-container"
    >
      <span id={`${props}-tooltip`} className="tooltip-content text-tooltip-content">
        {props.children}
      </span>
    </div>
  );
};

export default TooltipContainer;
