/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import particles from "../assets/img/particles.png";
import useApi from "../services/useApi";

function NewAccount() {
  const navigate = useNavigate();

  const [createPseudo, setCreatePseudo] = useState("");
  const [createMail, setCreateMail] = useState("");
  const [createPassword1, setCreatePassword1] = useState("");
  const [createCity, setCreateCity] = useState("");
  const [createPassword2, setCreatePassword2] = useState("");

  const [textModal, setTextModal] = useState("");
  const [modal, setModal] = useState(false);
  const displayModal = () => {
    setModal(true);
  };

  const resetCreateForm = () => {
    setCreatePseudo("");
    setCreateMail("");

    setCreatePassword1("");
    setCreatePassword2("");
    setCreateCity("");
  };

  const api = useApi();

  function handleCreateAccount(e) {
    e.preventDefault();
    api
      .post("/user", {
        pseudo: createPseudo,
        email: createMail,

        password: createPassword1,
        city: createCity,
      })
      .then(() => {
        resetCreateForm();
        setTextModal(
          <>
            <h3>Votre compte a bien été créé.</h3>

            <div className="buttons-container">
              <button
                type="button"
                className="close-modal"
                onClick={() => {
                  setModal(false);
                }}
              >
                Fermer
              </button>
            </div>
          </>
        );
        displayModal();
        navigate("/newscript");
      });
  }

  const NAME_REGEX = /^[\wÀ-ÿ]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [validPseudo, setValidPseudo] = useState(false);
  useEffect(() => {
    setValidPseudo(NAME_REGEX.test(createPseudo));
  }, [createPseudo]);

  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(createMail));
  }, [createMail]);

  const [validPwd, setValidPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(createPassword1));
    setValidMatch(createPassword1 === createPassword2);
  }, [createPassword1, createPassword2]);

  return (
    <div className="new-account-container">
      <h1 className="new-account-title">
        Créer mon compte <strong>Ciné Sparks</strong>
      </h1>
      <h2 className="new-account-subtitle">
        Saisissez une adresse e-mail valide et un mot de passe sécurisé.
      </h2>
      <form
        className="new-account-inputs"
        action="#"
        onSubmit={handleCreateAccount}
      >
        <img src={particles} alt="cross" className="add-avatar-picture" />
        <label htmlFor="new-account-id">ID de connexion (adresse e-mail)</label>
        <input
          id="new-account-id"
          className={createMail && !validEmail ? "input-error" : ""}
          type="email"
          value={createMail}
          onChange={(e) => setCreateMail(e.target.value)}
        />
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          id="pseudo"
          className={createPseudo && !validPseudo ? "input-error" : ""}
          value={createPseudo}
          onChange={(e) => setCreatePseudo(e.target.value)}
        />
        <label htmlFor="city">Ville</label>
        <input
          type="text"
          id="city"
          value={createCity}
          onChange={(e) => setCreateCity(e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          className={createPassword1 && !validPwd ? "input-error" : ""}
          type="password"
          value={createPassword1}
          onChange={(e) => setCreatePassword1(e.target.value)}
          id="password"
        />
        <label htmlFor="password-confirm">Confirmer le mot de passe</label>
        <input
          className={createPassword2 && !validMatch ? "input-error" : ""}
          type="password"
          value={createPassword2}
          onChange={(e) => setCreatePassword2(e.target.value)}
          id="password-confirm"
        />

        <button
          disabled={!(validPseudo && validEmail && validMatch && validPwd)}
          type="submit"
        >
          Créer mon compte
        </button>
      </form>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default NewAccount;
