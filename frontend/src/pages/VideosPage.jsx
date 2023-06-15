import React from "react";
import particles from "../assets/img/particles.png";

function VideosPage() {
  return (
    <div className="videos-page-container">
      <div className="videos-page-inputs">
        <h1 className="videos-page-title">Titre</h1>

        <h2 className="synopsis">Synopsis</h2>

        <div name="synopsis" id="synopsis">
          synopsis
        </div>
        <h2 className="video-title">Vidéo</h2>

        <button type="button">Ouvrir</button>
      </div>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default VideosPage;
