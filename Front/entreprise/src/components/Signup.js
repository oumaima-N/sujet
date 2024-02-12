import '../App.css';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(e) {
  
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
   };
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  async function submit() {
   
    try {
      const res = await axios.post("http://127.0.0.1:3000/signup", {
        mail,
        password,
        name,
        address,
        phone
      });

      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        navigate("/home", { state: { id: mail } });
      }
    } catch (e) {
      alert("wrong details");
      console.log(e);
    }
  };

  return (
    <div className="signup">
      <h1>Page d'inscription pour les entreprises</h1>
      <form onSubmit={submit}>
        <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Nom de l'entreprise" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="text" placeholder="Numéro de téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <button onClick={handleGoBack}>
        login Page
      </button>
    </div>
  );
}

export default Signup;
