import React, { useEffect, useState } from "react";
import Fiche from "../../components/Fiche/Fiche";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/header/Header";
import "./dashboard.css";
import {
  getAllFiches,
  getFicheById,
} from "../../api/fiche";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateValue } from "../../redux/slices/formDataSlice";
const Dashboard = () => {
  const [fiches, setFiches] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        console.error("User not found in local storage");
        return;
      }

      let currentUser;
      try {
        currentUser = JSON.parse(storedUser);
      } catch (error) {
        console.error(
          "Error parsing user data from local storage:",
          error
        );
        return;
      }

      if (!currentUser || !currentUser.id) {
        console.error("Invalid user data");
        return;
      }

      try {
        const fetchedFiches = await getAllFiches(
          currentUser.id
        );
        console.log(fetchedFiches);
        setFiches(fetchedFiches);
      } catch (error) {
        console.error("Error fetching fiches:", error);
      }
    };

    fetchData();
  }, []);

  const sortData = (key) => {
    let direction = "ascending";
    if (
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const sortedData = [...fiches].sort((a, b) => {
      if (key === "traitmentCreationDate") {
        return direction === "ascending"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      } else {
        return direction === "ascending"
          ? (a[key] || "")
              .toString()
              .localeCompare((b[key] || "").toString())
          : (b[key] || "")
              .toString()
              .localeCompare((a[key] || "").toString());
      }
    });

    setFiches(sortedData);
    setSortConfig({ key, direction });
  };

  const handleFicheClick = async (ficheId) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      console.error("User not found in local storage");
      return;
    }

    let currentUser;
    try {
      currentUser = JSON.parse(storedUser);
    } catch (error) {
      console.error(
        "Error parsing user data from local storage:",
        error
      );
      return;
    }

    if (!currentUser || !currentUser.id) {
      console.error("Invalid user data");
      return;
    }

    try {
      console.log(
        "data for the api call :",
        currentUser.id,
        ficheId
      );
      const ficheData = await getFicheById(
        currentUser.id,
        ficheId
      );
      localStorage.setItem(
        "traitementFiche",
        JSON.stringify(ficheData)
      );

      // Dispatch the data to Redux store
      Object.entries(ficheData).forEach(
        ([inputId, value]) => {
          dispatch(updateValue({ id: inputId, value }));
        }
      );

      navigate("/Introduction");
    } catch (error) {
      console.error("Error fetching fiche details:", error);
    }
  };

  const HandleNewFiche = () => {
    try {
      navigate("/Introduction");
    } catch (error) {
      console.error("Couldn't create a new fiche: ", error);
    }
  };

  return (
    <>
      <Header />
      <button id="new-fiche" onClick={HandleNewFiche}>
        Nouvelle fiche
      </button>
      <div id="fiche-array-container">
        <table id="fiche-array" className="fiche">
          <thead>
            <tr>
              <th onClick={() => sortData("id")}>ID</th>
              <th onClick={() => sortData("traitmentName")}>
                Name
              </th>
              <th
                onClick={() =>
                  sortData("traitmentCreationDate")
                }
              >
                Creation Date
              </th>
            </tr>
          </thead>
          <tbody>
            {fiches.map((fiche) => (
              <tr
                key={fiche.id}
                onClick={() => handleFicheClick(fiche.id)}
              >
                <td>{fiche.id}</td>
                <td>{fiche.traitmentName}</td>
                <td>{fiche.traitmentCreationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
