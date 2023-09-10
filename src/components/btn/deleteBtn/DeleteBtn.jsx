import "./deletebtn.css";

const DeleteBtn = (props) => {
  return (
    <button onClick={props.deleteAnElement} className="btn delete-btn">
      {props.text}
    </button>
  );
};

export default DeleteBtn;
