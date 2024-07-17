import React, { useEffect, useState } from "react";
import Fiche from "../../components/Fiche/Fiche";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/header/Header";
import "./dashboard.css";
import { getAllFiches } from "../../api/fiche";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector(
    (state) => state.user.userInfo
  );

  const [ficheData, setFicheData] = useState({
    fichesTraitement: [],
  });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialFicheData = await getAllFiches(
          currentUser.id
        );
        console.log(initialFicheData);
        setFicheData({
          fichesTraitement:
            initialFicheData.fichesTraitement || [],
        });
      } catch (error) {
        console.error("Error fetching fiches:", error);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, [currentUser.id]); // Dependency on currentUser.id ensures data updates when user changes

  const sortData = (key) => {
    let direction = "ascending";
    if (
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const sortedData = [...ficheData.fichesTraitement].sort(
      (a, b) => {
        if (key === "createdAt" || key === "updatedAt") {
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
      }
    );

    setFicheData({
      ...ficheData,
      fichesTraitement: sortedData,
    });
    setSortConfig({ key, direction });
  };

  return (
    <>
      <Header />
      <div id="fiche-array-container">
        <table id="fiche-array" className="fiche">
          <thead>
            <tr>
              <th onClick={() => sortData("id")}>ID</th>
              <th onClick={() => sortData("traitmentName")}>
                Name
              </th>
              <th onClick={() => sortData("user.username")}>
                Author
              </th>
              <th onClick={() => sortData("createdAt")}>
                Creation Date
              </th>
              <th onClick={() => sortData("updatedAt")}>
                Update Date
              </th>
            </tr>
          </thead>
          <tbody>
            {ficheData.fichesTraitement.map((fiche) => (
              <Fiche id={fiche.id} />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
