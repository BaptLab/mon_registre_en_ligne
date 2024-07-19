import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Introduction from "./pages/Introduction/Introduction";
import PartiePrenantes from "./pages/PartiePrenantes.jsx/PartiePrenantes";
import Finalités from "./pages/Finalités/Finalités";
import PersonnesConcernées from "./pages/PersonnesConcernées/PersonnesConcernées";
import Données from "./pages/Données/Données";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Destinataires from "./pages/Destinataires/Destinataires";
import Sécurité from "./pages/Sécurité/Sécurité";
import BaseLégale from "./pages/BaseLégale/BaseLégale";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { updateValue } from "./redux/slices/formDataSlice";
import Recap from "./pages/Recap/Recap";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

const App = () => {
  useEffect(() => {
    // Retrieve the data from localStorage
    const storedData = localStorage.getItem(
      "traitementFiche"
    );

    // If data exists in localStorage, parse it and dispatch it to the Redux store
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.entries(parsedData).forEach(
        ([inputId, value]) => {
          store.dispatch(
            updateValue({ id: inputId, value })
          );
        }
      );
    }
  }, []); // Run this effect only once, on component mount

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route
            path="/Dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/Introduction"
            element={<Introduction />}
          />
          <Route
            path="/PartiePrenantes"
            element={<PartiePrenantes />}
          />
          <Route
            path="/Finalités"
            element={<Finalités />}
          />
          <Route path="/Données" element={<Données />} />
          <Route
            path="/PersonnesConcernées"
            element={<PersonnesConcernées />}
          />
          <Route
            path="/Destinataires"
            element={<Destinataires />}
          />
          <Route path="/Sécurité" element={<Sécurité />} />
          <Route
            path="/BaseLégale"
            element={<BaseLégale />}
          />
          <Route path="/Recap" element={<Recap />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
