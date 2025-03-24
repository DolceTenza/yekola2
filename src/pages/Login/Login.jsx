import React, { useContext, useState } from "react";
import "./login.css"
import { Particles } from "../../component/Particles";
import { TiMail, TiKey } from "react-icons/ti"
import { AiOutlineClose } from "react-icons/ai"
import { AuthContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const {currentUser, Login} = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email : "",
    password : ""
  })
  const [info, setInfo] = useState(false);

  const HandleChange = e => {
    setInputs(prev=>({...prev, [e.target.name] : e.target.value}));
  }
  // console.log(inputs)
  const Navigate = useNavigate();

  const HandleSubmit = async e => {
    e.preventDefault();
    if(inputs.email.trim() === "") return setInfo("le champs email est requis");
    if(inputs.password.trim() === "") return setInfo("le mot de passe est requis");

    try {
      Login(inputs);
      if(currentUser.message) return setInfo(currentUser.message);
      Navigate('/home')
    } catch (error) {
      alert(error)
    }
  }

  const HandleClose = () => {
    setInfo(false)
  }

  return (
    <div className="auth">
      {info ? (
        <div className="info active"> 
        <p>{info}</p>
        <AiOutlineClose onClick={HandleClose} className="icon"/>
      </div>
      ) : (
        <div className="info"> 
        <p></p>
        <AiOutlineClose  className="icon"/>
      </div >
      )}
      <div className="back-container">
        <div className="particles">
          <Particles />
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
              <input type="text" placeholder="E-mail" name="email" onChange={HandleChange} />
            </div>
            <div className="input-box" >
              <TiKey className="icon" />
              <input type="password" placeholder="Mot de passe" onChange={HandleChange} name="password" />
            </div>
            <button onClick={HandleSubmit} className="btn">Connexion</button>
            <div className="link">
              <a href="/register">Créer un compte </a>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};
