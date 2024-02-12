import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleGoBack = () => {
    navigate(-1);
  };

  async function submit(e) {
    e.preventDefault();
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
        // Redirection vers la page d'accueil avec l'identifiant de l'utilisateur
        navigate("/home", { state: { id: mail } });
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  };

  return (
    <div className="login">
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
