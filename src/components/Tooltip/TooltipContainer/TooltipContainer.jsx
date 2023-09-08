import "./tooltipcontainer.css";

const TooltipContainer = (props) => {
  return (
    <div
      id={`${props.id}-tooltip-container`}
      className={`${
        props.visibility ? "show" : "hide"
      } tooltip-container text-tooltip-container`}
    >
      {props.children}
    </div>
  );
};

export default TooltipContainer;
