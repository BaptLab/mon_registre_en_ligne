import "./fiche.css";

const Fiche = ({
  id,
  name,
  author,
  creationDate,
  updateDate,
}) => {
  return (
    <tr>
      <td className="fiche-id">{id}</td>
      <td className="fiche-name">{name}</td>
      <td className="fiche-creation-date">
        {creationDate}
      </td>
    </tr>
  );
};

export default Fiche;
