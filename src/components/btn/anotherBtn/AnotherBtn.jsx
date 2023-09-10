import "./anotherbtn.css";

const AnotherBtn = (props) => {
  return (
    <button onClick={props.addAnElement} className="btn another-btn">
      {props.text}
    </button>
  );
};

export default AnotherBtn;
