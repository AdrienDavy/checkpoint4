import React from "react";
import particles from "../assets/img/particles.png";
import cross from "../assets/img/cross.svg";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1 className="welcome-title">Bienvenue sur Ciné Sparks</h1>
      <main className="create-account-or-login">
        <figure>
          <div className="circle">
            <img src={cross} alt="cross" className="cross" />
          </div>
          <figcaption>Créer un compte</figcaption>
        </figure>
        <figure>
          <img src={particles} alt="cross" className="avatar-picture" />

          <figcaption>Se Connecter</figcaption>
        </figure>
      </main>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default LandingPage;
