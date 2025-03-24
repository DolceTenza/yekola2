import React, { useState } from 'react'
import { Particles } from "../../component/Particles";
import {TiMail, TiKey, TiUser} from "react-icons/ti"
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai';

export const Register = () => {

  const [inputs, setInputs] = useState({
    name : "",
    email : "",
    password : "",
    password2 : ""
  })
  const [info, setInfo] = useState(false);

  const HandleChange = e => {
    setInputs(prev=>({...prev, [e.target.name] : e.target.value}));
  }

  const HandleSubmit = async e => {
    e.preventDefault();
    if(inputs.name.trim() === "") return setInfo("Insérez votre nom");
    if(inputs.email.trim() === "") return setInfo("l'Email est requis");
    if(inputs.password.trim() === "") return setInfo("le mot de passe est requis");
    if(inputs.password2.trim() === "") return setInfo("Veillez confirmer le mot de passe ");
    if(inputs.password.trim() != inputs.password2.trim()) return setInfo("mots de passe incohérents");
    

    try {
      const res = await axios.post('http://localhost:8080/api/register', inputs);
      if(res.data.message) return setInfo(res.data.message);
    } catch (error) {
      console.log(error)
    }
  }

  const HandleClose = () => {
    setInfo(false)
  }

  console.log(inputs)
  return (
    <div className="auth">
    {info ? (
        <div className="info active"> 
        <p>{info}</p>
        <AiOutlineClose  onClick= {HandleClose} className="icon"/>
      </div>
      ) : (
        <div className="info"> 
        <p></p>
        <AiOutlineClose  className="icon"/>
      </div >
      )}
    <div className="back-container">
      <div className="particles">
        <Particles/>
      </div>
    </div>
    <div className="form-container">
      <div className="top">
        <h1>Education</h1>
        <h2>Sign Up</h2>
      </div>
      <div className="bottom">
        <form className="form">
          <div className="input-box">
            <TiUser className="icon" />
            <input type="text" placeholder="Nom complet" name="name" onChange={HandleChange} />
          </div>
          <div className="input-box">
            <TiMail className="icon" />
            <input type="email" placeholder="E-mail" name="email" onChange={HandleChange} />
          </div>
          <div className="input-box" >
            <TiKey className="icon"/>
            <input type="password" placeholder="Mot de passe" name="password" onChange={HandleChange}/>
          </div>
          <div className="input-box" >
            <TiKey className="icon"/>
            <input type="password" placeholder="Confirme le mot de asse" name="password2" onChange={HandleChange}/>
          </div>
          <button onClick={HandleSubmit} className="btn">Inscription</button>
          <div className="link">
            <a href="/">Connectez-vous</a>
            </div>
        </form>
      </div>
    </div>
  </div>
  )
}
