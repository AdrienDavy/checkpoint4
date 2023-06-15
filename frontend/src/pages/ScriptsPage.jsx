import React from "react";
import particles from "../assets/img/particles.png";

function ScriptsPage() {
  return (
    <div className="scripts-page-container">
      <div className="scripts-page-inputs">
        <h1 className="scripts-page-title">Titre</h1>

        <h2 className="synopsis">Synopsis</h2>

        <div name="synopsis" id="synopsis">
          synopsis
        </div>
        <h2 className="video">Scénario</h2>

        <button type="button">Ouvrir</button>
      </div>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default ScriptsPage;
