/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import particles from "../assets/img/particles.png";
import cross from "../assets/img/cross.svg";

function LandingPage() {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/login");
  };
  const handleCreateClick = () => {
    navigate("/new");
  };
  return (
    <div className="landing-page-container">
      <h1 className="welcome-title">Bienvenue sur Ciné Sparks</h1>
      <main className="create-account-or-login">
        <figure>
          <div className="circle">
            <img
              src={cross}
              alt="cross"
              className="cross"
              onClick={handleCreateClick}
            />
          </div>
          <figcaption>Créer un compte</figcaption>
        </figure>
        <figure>
          <img
            src={particles}
            alt="avatar"
            className="avatar-picture"
            onClick={handleAvatarClick}
          />

          <figcaption>Se Connecter</figcaption>
        </figure>
      </main>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default LandingPage;
