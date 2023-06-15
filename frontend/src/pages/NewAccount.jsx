import React from "react";
import particles from "../assets/img/particles.png";

function NewAccount() {
  return (
    <div className="new-account-container">
      <h1 className="new-account-title">
        Créer mon compte <strong>Ciné Sparks</strong>
      </h1>
      <h2 className="new-account-subtitle">
        Saisissez une adresse e-mail valide et un mot de passe sécurisé.
      </h2>
      <form className="new-account-inputs">
        <img src={particles} alt="cross" className="add-avatar-picture" />
        <label htmlFor="new-account-id">ID de connexion (adresse e-mail)</label>
        <input type="text" id="new-account-id" />
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" id="pseudo" />
        <label htmlFor="city">Ville</label>
        <input type="text" id="city" />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" />
        <label htmlFor="password-confirm">Confirmer le mot de passe</label>
        <input type="text" id="password-confirm" />
        <input type="file" />
        <button type="button">Créer mon compte</button>
      </form>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default NewAccount;
