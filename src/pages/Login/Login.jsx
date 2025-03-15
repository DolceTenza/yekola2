import React from "react";
import "./login.css"
import { Particles } from "../../component/Particles";
import {TiMail, TiKey} from "react-icons/ti"

export const Login = () => {
  return (
    <div className="auth">
      <div className="back-container">
        <div className="particles">
          <Particles/>
        </div>
      </div>
      <div className="form-container">
        <div className="top">
          <h1>Education</h1>
          <p>learn as Never Before, become more than your feeling</p>
        </div>
        <div className="bottom">
          <form className="form">
            <div className="input-box">
              <TiMail className="icon" />
              <input type="text" placeholder="E-mail" name="email" />
            </div>
            <div className="input-box" >
              <TiKey className="icon"/>
              <input type="password" placeholder="Mot de passe" name="password"/>
            </div>
            <button className="btn">Connexion</button>
            <div className="link">
              <p>Créer un compte</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
