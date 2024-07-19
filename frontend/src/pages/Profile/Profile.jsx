import React, { useEffect, useState } from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/header/Header";
import "./profile.css";
import { getUserInfos } from "../../api/user";
import { clearUser } from "../../api/apiUtils";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userInfos, setUserInfos] = useState({});
  const navigate = useNavigate();
  const handleDisconnect = () => {
    clearUser();
    navigate("/Login");
  };

  useEffect(() => {
    const fetchUserInfos = async () => {
      const currentUser = localStorage.getItem("user");
      const userId = JSON.parse(currentUser).id;

      try {
        const userData = await getUserInfos(userId); // Assuming getUserInfos requires authToken
        setUserInfos(userData);
      } catch (error) {
        console.error(
          "Error fetching user information:",
          error
        );
      }
    };

    fetchUserInfos();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div id="form-container">
          <div id="profile-infos">
            <span id="email">
              Votre adresse mail : {userInfos.email}
            </span>
            <span id="email">
              Date de création du compte :
            </span>
          </div>
        </div>
        <button
          id="disconnect-btn"
          onClick={handleDisconnect}
        >
          Se déconnecter
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
