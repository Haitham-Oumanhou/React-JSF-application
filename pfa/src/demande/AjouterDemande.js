import React, { useState } from "react";
import "./style.css";

function AjouterDemande({ onAjouter }) {
  const [nouvelleDemande, setNouvelleDemande] = useState({
    nom: "",
    description: "",
  });

  const handleChange = (e) => {
    setNouvelleDemande({ ...nouvelleDemande, [e.target.name]: e.target.value });
  };

  const ajouterDemande = () => {
    if (nouvelleDemande.nom.trim() !== "") {
      onAjouter(nouvelleDemande);
      setNouvelleDemande({ nom: "", description: "" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <div className="tabAjout">
        <h1>Ajouter une demandes</h1>
        <input
          type="text"
          name="nom"
          placeholder="Nom de la demande"
          value={nouvelleDemande.nom}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description de la demande"
          value={nouvelleDemande.description}
          onChange={handleChange}
        />
        <button onClick={ajouterDemande}>Ajouter</button>
      </div>
    </div>
  );
}

export default AjouterDemande;
