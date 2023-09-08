import "./tooltipcontent.css";

const TooltipContent = (props) => {
  return (
    <>
      <span
        className={`tooltip-content text-tooltip-content ${props.id}-tooltip-definition `}
      >
        {props.content.definition}
      </span>
      <br />
      <br />
      <span
        className={`tooltip-content text-tooltip-content ${props.id}-tooltip-examples `}
      >
        {props.content.examples}
      </span>
      <br />
      <br />
      <span
        className={`tooltip-content text-tooltip-content ${props.id}-tooltip-simplifiedTerms `}
      >
        {props.content.simplifiedTerms}
      </span>
    </>
  );
};

export default TooltipContent;
