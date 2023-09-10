import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Introduction from "./pages/Introduction/Introduction";
import PartiePrenantes from "./pages/PartiePrenantes.jsx/PartiePrenantes";
import Finalités from "./pages/Finalités/Finalités";
import PersonnesConcernées from "./pages/PersonnesConcernées/PersonnesConcernées";
import Données from "./pages/Données/Données";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/PartiePrenantes" element={<PartiePrenantes />} />
          <Route path="/Finalités" element={<Finalités />} />
          <Route path="/Données" element={<Données />} />
          <Route path="/PersonnesConcernées" element={<PersonnesConcernées />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
