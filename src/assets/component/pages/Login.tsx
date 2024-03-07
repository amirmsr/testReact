import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";



export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };


  const {mutate : loginMutation } = useMutation(
    async () => {
      const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });      

      const textResponse = await response.json();
      console.log(textResponse.token);
      const tokenFinal = textResponse.token
      return tokenFinal
      
    },
    {
      onSuccess: (tokenFinal) => {
        const token = tokenFinal;
        console.log("token" + token);        
        localStorage.setItem("token", token);
        navigate(`/profil`)
      },
      onError: () => {
          alert('mauvais mot de passe ou mauvais mail où compte non valide');
          
      }
      
    }
  );

  const handleInscription = async () => { 
      navigate(`/inscription`)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation();
  };


  return (
  <div className="loginBg">
    <div className="container">
    <form style={{ paddingBottom: '100px', padding: '100px' }} onSubmit={handleSubmit}>
      <div className="add" style={{ backgroundColor: 'white', padding: '0px 20px', borderRadius: '15px' }}>
        <br /><br /><br />
        <h1 data-testid="cypress-title" style={{ color: '#1A4550', textAlign: 'center' }}>Connexion</h1>
        <br /><br />
        <div className="form-group">
          <label htmlFor="email" style={{ color: '#1A4550', fontSize: '1.5rem' }}>mail</label>
          <center><input style={{width:'30%'}} className='form-control' type="text" id="mail" name="mail" placeholder='mail' onChange={handleChange} /></center>
          
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password" style={{ color: '#1A4550', fontSize: '1.5rem' }}>Mot de passe</label>
          <center><input  style={{width:'30%'}} className='form-control' type="password" id="password" name="password" placeholder="Mot de passe" onChange={handleChange} /></center>
        </div>
        <br /><br />
        <button type="submit" className='btnMain2 btn-block'>Se connecter</button>
        <br /><br />
        <p>ou</p>
        <div className="row">
          <div className="col">
              <button onClick={handleInscription} className="btnMain2 btn-block">S'inscrire</button>
          </div>
          <br /><br /><br /><br /><br />
        </div>
      </div>
    </form>
    </div>    
  </div>

  );
}
