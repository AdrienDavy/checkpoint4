import React from "react";
import particles from "../assets/img/particles.png";

function ConnexionPage() {
  return (
    <div className="connexion-container">
      <h1 className="connexion-title">ID de connexion et mot de passe</h1>
      <h2 className="connexion-subtitle">
        Saisissez une adresse e-mail valide et un mot de passe sécurisé.
      </h2>
      <form className="connexion-inputs">
        <label htmlFor="connexion-id">ID de connexion (adresse e-mail)</label>
        <input type="text" id="connexion-id" />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" />
        <button type="button">Se Connecter</button>
      </form>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default ConnexionPage;
