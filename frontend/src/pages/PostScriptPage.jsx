import React from "react";
import NewScript from "../components/NewScript";
import particles from "../assets/img/particles.png";

function PostScriptPage() {
  return (
    <div className="post-script-page-container">
      <form className="post-script-page-inputs">
        <label htmlFor="post-script-page-title">Titre</label>
        <input type="text" id="post-script-page-title" />
        <select>
          <option value="">Genre(s)</option>
          <option value="">Animation</option>
        </select>
        <label htmlFor="synopsis">Synopsis</label>

        <textarea name="synopsis" id="synopsis" cols="3" rows="1" />
        <label htmlFor="script">Scénario</label>
        <input type="file" id="script" />
        <button type="button">Poster mon scénario</button>
      </form>
      <div>
        <NewScript />
      </div>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default PostScriptPage;
