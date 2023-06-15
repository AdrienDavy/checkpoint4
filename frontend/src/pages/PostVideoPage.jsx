import React from "react";
import particles from "../assets/img/particles.png";

function PostVideoPage() {
  return (
    <div className="post-video-page-container">
      <form className="post-video-page-inputs">
        <label htmlFor="post-video-page-title">Titre</label>
        <input type="text" id="post-video-page-title" />
        <select>
          <option value="">Genre(s)</option>
          <option value="">Animation</option>
        </select>

        <label htmlFor="synopsis">Synopsis</label>

        <textarea name="synopsis" id="synopsis" cols="3" rows="1" />
        <label htmlFor="video">Vidéo</label>
        <input type="file" id="video" />
        <button type="button">Poster ma vidéo</button>
      </form>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default PostVideoPage;
