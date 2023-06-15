import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import particles from "../assets/img/particles.png";
import { useUser } from "../contexts/UserContext";
import useApi from "../services/useApi";

function ConnexionPage() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const api = useApi();
  function handleLogin(e) {
    e.preventDefault();
    api
      .post("/login", {
        email: loginMail,
        password: loginPassword,
      })
      .then((res) => {
        const { token } = res.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { id } = res.data.user;
        const { pseudo } = res.data.user;
        const { email } = res.data.user;
        const { city } = res.data.user;

        setUser({
          id,
          pseudo,
          email,
          city,
        });
        navigate("/newscript");
      });
  }

  return (
    <div className="connexion-container">
      <h1 className="connexion-title">ID de connexion et mot de passe</h1>
      <h2 className="connexion-subtitle">
        Saisissez une adresse e-mail valide et un mot de passe sécurisé.
      </h2>

      <form className="connexion-inputs" action="#" onSubmit={handleLogin}>
        <label htmlFor="connexion-id">ID de connexion (adresse e-mail)</label>
        <input
          type="text"
          id="connexion-id"
          value={loginMail}
          onChange={(e) => setLoginMail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button type="submit">Se Connecter</button>
      </form>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default ConnexionPage;
